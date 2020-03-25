import React, { useEffect, useRef, useState } from "react";
import { FauxRandom, CosRandom } from "../utils/FauxRandom";
import { TimelineMax, Power3, Back, Sine } from "gsap";
import history from "../history";
import { mixed } from "yup";
import OurRangeIcons from "./OurRangeIcons";

const OurRangeParticles = props => {
    console.log("--> Start of OurRangeParticles Component");

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
        direction: props.current.productAnimationDirection,
        alpha: 1,
        scale: 1,
        rotation: Math.PI * 0.03,
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
            const next = checkRange(props.current.index, increment);
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
        // console.log("props.current", props.current);

        updateSpriteImages();

        return () => {
            console.log("Unmounting: Particle system");
            removeSpriteImages();
            // clean-up on dismount.
            window.removeEventListener("resize", onResize);
        };
    }, [props.current]);

    const updateSpriteImages = () => {
        sprites.particles = loadImg(props.current.product.particleUrl);
        sprites.product = loadImg(props.current.product.packImageUrl);
    };
    const removeSpriteImages = () => {
        sprites.particles.remove();
        sprites.product.remove();
    };

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
        console.log(
            "Defning Particles: ",
            props.current.group,
            "/",
            props.current.product.title
        );

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
                canUpdate = true;
                imagesLoaded = 0;
                removeSpriteImages();
                props.onClickFunction(nextProductUrl, Product.direction);
                // defineParticles();
                // updateProduct();
                // initCanvas();
            }
        });
        TL.to(Product, 0.33, {
            x: 150 * Product.direction,
            rotation: 0,
            alpha: 0,
            ease: Sine.easeIn
        });
        TL.to(
            ".description .copy",
            0.33,
            {
                opacity: 0,
                ease: Power3.easeIn
            },
            0
        );
        particleArray.map(p => {
            TL.to(
                p,
                0.33,
                {
                    alpha: 0,
                    x: p.x * p.depth,
                    y: p.y * p.depth,
                    ease: Sine.easeNone
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
        TL.set(".description .copy", { opacity: 0 })
            .from(Product, 0.2, {
                alpha: 0,
                ease: Power3.easeOut
            })
            .from(
                Product,
                1.0,
                {
                    x: 150 * -props.current.productAnimationDirection,
                    ease: Power3.easeOut
                },
                0
            )
            .to(
                ".description .copy",
                0.6,
                {
                    opacity: 1,
                    ease: Power3.easeOut
                },
                0.25
            )
            .to(
                Product,
                5,
                {
                    rotation: -0.06,
                    ease: Sine.easeInOut
                },
                0
            );

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
                <div className="copy">
                    <h1>{props.current.product.title}</h1>
                    <p className="large">{props.current.product.copy}</p>
                    <p>{props.current.product.subCopy}</p>
                </div>
                <OurRangeIcons onClickFunction={props.showModal} />
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
