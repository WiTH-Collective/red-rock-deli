import React, { useEffect, useRef, useState } from "react";
import { FauxRandom, CosRandom } from "../utils/FauxRandom";
import { TimelineMax, Power3, Linear } from "gsap";
import history from "../history";

const OurRangeParticles = props => {
    const productSpacing = 150;
    const [current, setCurrent] = useState(props.current.index);
    const imagesTotal = 2;
    let imagesLoaded = 0;
    const sprites = {
        particles: null,
        product: null,
        globalAlpha: 1
    };
    let hasInit = false;
    const canvasRef = useRef(null);
    let particleArray = [];
    let TL = null;
    let canUpdate = false;
    let scaleMultiplier = 1;
    let nextProductUrl = "";

    const Product = {
        x: 0,
        y: 0,
        direction: 0,
        alpha: 1,
        scale: 1,
        rotation: Math.PI * 0.05,
        img: {
            x: 0,
            y: 0,
            size: 600
        }
    };

    //
    const checkRange = (n, i) => {
        let num = parseInt(n) + i;
        num < 0
            ? (num += props.current.products.length)
            : (num %= props.current.products.length);
        return num;
    };

    //
    const nextProduct = increment => {
        if (canUpdate) {
            canUpdate = false;

            Product.direction = -increment;
            const next = checkRange(current, increment);
            nextProductUrl = `${props.current.group}/${encodeURI(
                props.current.products[next].title
            )}`;
            hideParticles();
        }
    };

    //
    // image preloader
    const loadImg = source => {
        const img = document.createElement("img");
        img.src = source;
        img.onload = () => {
            const i = imagesLoaded;
            imagesLoaded++;
            console.log("imagesLoaded: ", i + 1);
            if (imagesLoaded === imagesTotal) allImagesLoaded();
        };
        return img;
    };
    useEffect(() => {
        console.log("props.current", props.current);

        sprites.particles = loadImg(props.current.product.particleUrl);
        sprites.product = loadImg(props.current.product.packImageUrl);

        return () => {
            console.log("Unmounting: Particle system");
            sprites.particles.remove();
            sprites.product.remove();
            // clean-up on dismount.
            window.removeEventListener("resize", onResize);
        };
    }, [props.current]);

    // point at the center of the canvas
    const origin = {
        x: null,
        y: null,
        width: null,
        height: null
    };

    const onResize = () => {
        // console.log(e.target.innerWidth, e.target.innerHeight);
        const can = canvasRef.current;
        const canBox = can.getBoundingClientRect();
        can.width = canBox.width;
        can.height = canBox.height;
        origin.x = Math.round(can.width * 0.5);
        origin.y = Math.round(can.height * 0.5);
        origin.width = canBox.width;
        origin.height = canBox.height;

        if (hasInit) {
            updateProduct();
            updateCanvas();
        }
    };

    const updateProduct = () => {
        Product.img.x = 0;
        Product.img.y = 0;
        Product.img.size = 600;
        Product.alpha = 1;
        Product.x = 0;
        Product.rotation = Math.PI * 0.05;
        if (origin.width < 480) {
            Product.scale = 0.5;
            scaleMultiplier = 0.7;
        } else if (origin.width < 768) {
            Product.scale = 0.6;
            scaleMultiplier = 0.85;
        } else {
            Product.scale = 0.7;
            scaleMultiplier = 1;
        }
    };

    const drawProduct = context => {
        context.translate(origin.x + Product.x, origin.y + Product.y);
        context.globalAlpha = Product.alpha;
        context.rotate(Product.rotation);
        context.drawImage(
            sprites.product,
            Product.img.x,
            Product.img.y,
            Product.img.size,
            Product.img.size,
            Product.img.size * -0.5 * Product.scale,
            Product.img.size * -0.5 * Product.scale,
            Product.img.size * Product.scale,
            Product.img.size * Product.scale
        );
        context.rotate(-Product.rotation);
        context.translate(-origin.x - Product.x, -origin.y - Product.y);
    };

    const defineParticles = () => {
        const can = canvasRef.current;
        const config = props.data.config;
        console.log(props.current, props.current, current);

        const data = props.current.product.particles;
        const spriteSheetY =
            (config.smallSpriteSize + config.largeSpriteSize) *
            parseInt(data.index);

        // Set random seed:
        const seed = Math.floor(Math.random() * 500);
        // const seed = 285;

        // FauxRandom(data.randomSeed);
        FauxRandom(seed);
        console.log("seed", seed);

        // create new particles.
        // distributed randomly along a diagonal line, extending
        // from the center of the canvas.
        // using data pulled from carouselData.json.
        const newParticle = isSmall => {
            // random position on line:
            const randomLinePosition = CosRandom() * 0.5;
            const randomRange = 60;
            let lineWidth;
            can.width < 600 ? (lineWidth = 300) : (lineWidth = can.width * 0.5);
            let lineHeight = lineWidth * 0.5;

            // large sprites
            let count = data.largeItemCount;
            let size = config.largeSpriteSize;
            let imgY = spriteSheetY + config.smallSpriteSize;
            // small sprites
            if (isSmall) {
                count = data.smallItemCount;
                size = config.smallSpriteSize;
                imgY = spriteSheetY;
            }
            const p = {
                img: {
                    x: Math.floor(FauxRandom() * count) * size,
                    y: imgY,
                    size: size
                },
                wiggle: {
                    x: 0,
                    y: 0,
                    rotation: 0
                },
                x: randomLinePosition * lineWidth + CosRandom() * randomRange,
                y: randomLinePosition * -lineHeight + CosRandom() * randomRange,
                alpha: 1,
                rotation: FauxRandom() * Math.PI * 2,
                scale: FauxRandom() * 0.15 + 0.45
            };

            if (Math.abs(p.x) < 80) {
                if (p.x < 0) {
                    p.x -= productSpacing * 0.5 + FauxRandom() * productSpacing;
                } else {
                    p.x += productSpacing * 0.5 + FauxRandom() * productSpacing;
                }
            }

            return p;
        };

        // blank array for particles.
        particleArray = [];

        // add small particles
        for (let i = 0; i < config.smallSpriteCount; ++i) {
            const p = newParticle(true);
            particleArray.push(p);
        }

        // add large particles
        for (let i = 0; i < config.largeSpriteCount; ++i) {
            const p = newParticle();
            particleArray.push(p);
        }

        // set depth based on particleArray index:
        for (let i = 0; i < Math.floor(config.smallSpriteCount * 0.33); ++i) {
            particleArray[i].depth = 1.25;
        }
        for (
            let i = Math.floor(config.smallSpriteCount * 0.33);
            i < Math.floor(config.smallSpriteCount * 0.66);
            ++i
        ) {
            particleArray[i].depth = 1.5;
        }
        for (
            let i = Math.floor(config.smallSpriteCount * 0.66);
            i < config.smallSpriteCount;
            ++i
        ) {
            particleArray[i].depth = 2.0;
        }
        for (
            let i = config.smallSpriteCount;
            i < config.smallSpriteCount + config.largeSpriteCount;
            ++i
        ) {
            particleArray[i].depth = 2.5;
        }
    };

    const hideParticles = () => {
        if (TL) {
            TL.kill();
        }

        TL = new TimelineMax({
            delay: 0,
            onUpdate: () => {
                updateCanvas();
            },
            onComplete: () => {
                props.onClickFunction(nextProductUrl);
                // defineParticles();
                // updateProduct();
                // initCanvas();
                canUpdate = true;
            }
        });
        TL.to(Product, 0.25, {
            x: 400 * Product.direction,
            rotation: 0,
            alpha: 0
        });
        particleArray.map(p => {
            TL.to(
                p,
                0.25,
                {
                    alpha: 0,
                    x: p.x * p.depth,
                    y: p.y * p.depth,
                    ease: Linear.easeNone
                },
                0
            );
        });
    };

    const updateCanvas = () => {
        const config = props.data.config;
        const can = canvasRef.current;

        if (can && origin.x && origin.y) {
            const ctx = canvasRef.current.getContext("2d");
            ctx.save();
            // clear canvas
            ctx.clearRect(0, 0, can.width, can.height);

            const drawParticle = p => {
                if (p) {
                    ctx.translate(
                        origin.x + p.x + p.wiggle.x,
                        origin.y + p.y + p.wiggle.y
                    );
                    ctx.globalAlpha = p.alpha;
                    ctx.rotate(p.rotation + p.wiggle.rotation);
                    ctx.drawImage(
                        sprites.particles,
                        p.img.x,
                        p.img.y,
                        p.img.size,
                        p.img.size,
                        p.img.size * -0.5 * p.scale * scaleMultiplier,
                        p.img.size * -0.5 * p.scale * scaleMultiplier,
                        p.img.size * p.scale * scaleMultiplier,
                        p.img.size * p.scale * scaleMultiplier
                    );
                    ctx.rotate(-p.rotation - p.wiggle.rotation);
                    ctx.translate(
                        -p.x - p.wiggle.x - origin.x,
                        -p.y - p.wiggle.y - origin.y
                    );
                }
            };

            // upper layer, has dropshadow
            ctx.filter = `blur(3px)`;
            for (
                let i = 0;
                i < Math.floor(config.smallSpriteCount * 0.33);
                ++i
            ) {
                drawParticle(particleArray[i]);
            }
            // upper layer, has dropshadow
            ctx.filter = `none`;
            for (
                let i = Math.floor(config.smallSpriteCount * 0.33);
                i < config.smallSpriteCount;
                ++i
            ) {
                drawParticle(particleArray[i]);
            }
            // upper layer, has dropshadow
            ctx.filter = `drop-shadow(0px 20px 5px rgba(0,0,0,0.2))`;
            drawProduct(ctx);

            for (
                let i = config.smallSpriteCount;
                i < config.smallSpriteCount + config.largeSpriteCount;
                ++i
            ) {
                drawParticle(particleArray[i]);
            }

            ctx.restore();
        }
    };

    const initCanvas = () => {
        const time = 5;

        if (TL) {
            TL.kill();
        }
        TL = new TimelineMax({
            delay: 0,
            onUpdate: () => {
                updateCanvas();
            }
        });
        // animate product image
        TL.from(Product, 0.5, {
            x: 150 * -Product.direction,
            rotation: 0,
            alpha: 0,
            ease: Power3.easeOut
        });
        // animates particles.
        particleArray.map(p => {
            const pDelay = FauxRandom() * 2;
            TL.from(
                p,
                time + pDelay,
                {
                    x: p.x * 0.5,
                    y: p.y * 0.5,
                    rotation: p.rotation + CosRandom() * Math.PI * 0.25,
                    ease: Power3.easeOut
                },
                0
            );
            TL.from(
                p,
                0.25,
                {
                    alpha: 0,
                    ease: Power3.easeIn
                },
                0
            );
        });
    };

    const showNutritionalInfo = () => {
        console.log("impplement showMODAL", "showNutritionalInfo");
    };
    const showFlavourPairings = () => {
        console.log("impplement showMODAL", "showFlavourPairings");
    };

    // MOUNTING -----------------------------
    const allImagesLoaded = () => {
        console.log("MOUNTING: CURRENT: ", current);

        onResize();
        defineParticles();
        updateProduct();
        initCanvas();
        hasInit = true;
        canUpdate = true;

        // on mount.
        window.addEventListener("resize", onResize);

        return () => {
            console.log("DIS-MOUNTING: CURRENT: ", current);
            window.removeEventListener("resize", onResize);
        };
    };

    return (
        <div className="canvas-container">
            <div className="canvas-inner">
                <canvas ref={canvasRef} className="particle-system" />
            </div>
            <div className="description">
                <h1>{props.current.product.title}</h1>
                <p className="large">{props.current.product.copy}</p>
                <p>{props.current.product.subCopy}</p>
                <div className="icons">
                    <div
                        className="icon nutritional-info"
                        onClick={() => {
                            showNutritionalInfo();
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M14.31,2.56a3.9,3.9,0,0,0-1.88,1,3.76,3.76,0,0,0-.9,1.89c-4.15-1.83-8.21,1.2-8,5.69S7.2,22,12,19.42c4.82,2.65,7.92-3.56,8.49-7.51s-2.69-8.46-7.84-6.36a2.47,2.47,0,0,1,.63-1.26,3.91,3.91,0,0,1,1.48-.86A1.08,1.08,0,0,0,14.31,2.56Zm-4,7A1.85,1.85,0,0,1,12,10.69a1.85,1.85,0,0,1,1.6-1.13,1.76,1.76,0,0,1,1.78,1.63c0,2-2.2,2.2-3.38,4.5-1.18-2.3-3.41-2.51-3.39-4.5A1.73,1.73,0,0,1,10.36,9.56Z" />
                        </svg>
                    </div>
                    <div
                        className="icon flavour-pairings"
                        onClick={() => {
                            showFlavourPairings();
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M1.51,2.73a.14.14,0,0,0-.14.15V3C1.32,3.37,1,6.61,1,8.18v.08c0,1.18.7,1.47,1.7,1.49a3.36,3.36,0,0,1-.24,1.65v0a.62.62,0,0,0-.22.47l.19,9c0,.31.1.57.39.57h.54c.29,0,.36-.26.36-.57l.2-9a.67.67,0,0,0-.22-.47v0c-.2-.16-.25-1-.27-1.65,1-.05,1.68-.31,1.7-1.49V8.18C5.06,6.61,4.77,3.37,4.75,3V2.88a.17.17,0,0,0-.15-.15H4.46a.16.16,0,0,0-.15.15v5.3a.18.18,0,0,1,0,.11s0,.05-.08.05H4a.17.17,0,0,1-.15-.16V2.88a.16.16,0,0,0-.14-.15H3.56c-.15,0-.22.08-.22.15v5.3c0,.08,0,.16-.12.16H2.8a.25.25,0,0,1,0-.13V2.91a.13.13,0,0,0-.12-.18H2.49a.15.15,0,0,0-.15.15v5.3a.17.17,0,0,1,0,.13.14.14,0,0,1-.09,0H1.9a0,0,0,0,1,0,0l0,0s0-.05,0-.08V2.88a.17.17,0,0,0-.15-.15ZM9,2.73c-1.09.67-1.92,4-1.92,7.79,0,.47,0,.9,0,1.37a1.88,1.88,0,0,1,.41,1.26,2.13,2.13,0,0,1-.09.67H9Zm2.8,0a16.75,16.75,0,0,0-.76,5A6.12,6.12,0,0,0,16.41,14v6.69H16.2c-.32,0-3.89.36-3.89.77v.05h9.26v-.05c0-.41-3.55-.75-3.87-.77h-.24V14a6.13,6.13,0,0,0,5.39-6.22,16.74,16.74,0,0,0-.75-5Zm9.94.57a15.14,15.14,0,0,1,.48,2.9H12.67v0a11.46,11.46,0,0,0,.2,3.14,5.82,5.82,0,0,0,2.38,3.76,5.52,5.52,0,0,1-2.55-1.91,5.8,5.8,0,0,1-1.12-3.75,19.59,19.59,0,0,1,.58-4.17h9.16A3,3,0,0,1,21.74,3.3ZM7.27,14a.19.19,0,0,0-.17.16v.2a1.05,1.05,0,0,1,.3.75,19.07,19.07,0,0,0-.17,2.26c0,1.06.22,2.37.22,2.65a1,1,0,0,1-.2.64.5.5,0,0,0-.29.39.42.42,0,0,0,.14.28.18.18,0,0,0,.15.1H8.88A.15.15,0,0,0,9,21.3V14.18A.16.16,0,0,0,8.88,14Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="controls">
                <div>
                    <button
                        className="previous"
                        onClick={() => {
                            nextProduct(-1);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                        >
                            <path d="M16.85,26.31l8.62,8.35a1.21,1.21,0,0,0,1.68,0,1.12,1.12,0,0,0,0-1.63L19.37,25.5,27.15,18a1.11,1.11,0,0,0,0-1.62,1.21,1.21,0,0,0-1.68,0l-8.62,8.34A1.12,1.12,0,0,0,16.85,26.31Z" />
                        </svg>
                    </button>
                    <button
                        className="next"
                        onClick={() => {
                            nextProduct(+1);
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                        >
                            <path d="M33.15,24.68l-8.62-8.34a1.21,1.21,0,0,0-1.68,0,1.11,1.11,0,0,0,0,1.62l7.78,7.54L22.85,33a1.12,1.12,0,0,0,0,1.63,1.21,1.21,0,0,0,1.68,0l8.62-8.35A1.12,1.12,0,0,0,33.15,24.68Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OurRangeParticles;
