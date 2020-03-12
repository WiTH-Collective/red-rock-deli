import React, { useEffect, useRef, useState } from "react";
import SpritesUrl from "../../img/products/particle-sprites.png";
import { FauxRandom, CosRandom } from "../utils/FauxRandom";
import { TimelineMax, Power3, TweenMax } from "gsap";

const Particles = props => {
    // console.log("CURRENT: ", props.current);
    const canvasRef = useRef(null);
    const sprites = new Image();
    sprites.src = SpritesUrl;
    let particleArray = [];

    const tl = new TimelineMax({ onUpdate: null });

    // point at the center of the canvas
    const origin = {
        x: null,
        y: null
    }

    const onResize = () => {
        // console.log(e.target.innerWidth, e.target.innerHeight);
        const can = canvasRef.current;
        const canBox = can.getBoundingClientRect();
        can.width = canBox.width;
        can.height = canBox.height;
    }

    const defineParticles = () => {
        const can = canvasRef.current;
        const config = props.data.config;
        const data = props.data.products[props.current].particles;
        const spriteSheetY = (config.smallSpriteSize + config.largeSpriteSize) * props.current;
        origin.x = can.width * 0.5;
        origin.y = can.height * 0.5

        // Set random seed:
        const seed = Math.floor(Math.random() * 500);

        // FauxRandom(data.randomSeed);
        FauxRandom(seed)
        console.log("seed", seed);

        // create new particles.
        // distributed randomly along a diagonal line, extending
        // from the center of the canvas.
        // using data pulled from carouselData.json.
        const newParticle = (isSmall) => {
            // random position on line:
            const randomLinePosition = CosRandom() * 0.5;
            const randomRange = 80;
            const lineWidth = 500;
            const lineHeight = 250;

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
                    size: size,
                },
                wiggle: {
                    x: 0,
                    y: 0,
                    rotation: 0
                },
                x: origin.x + (randomLinePosition * lineWidth) + (CosRandom() * randomRange),
                y: origin.y + (randomLinePosition * -lineHeight) + (CosRandom() * randomRange),
                rotation: FauxRandom() * Math.PI * 2,
                scale: FauxRandom() * 0.2 + 0.4,
            }

            return p;
        }

        // blank array for particles.
        particleArray = [];


        // add small particles
        for (let i = 0; i < config.smallSpriteCount; ++i) {
            const p = newParticle(true);
            particleArray.push(p)
        }

        // add large particles
        for (let i = 0; i < config.largeSpriteCount; ++i) {
            const p = newParticle();
            particleArray.push(p)
        }
    }

    const updateCanvas = () => {

        const config = props.data.config;
        const can = canvasRef.current;
        if (can) {
            const ctx = canvasRef.current.getContext("2d");
            // clear canvas
            ctx.clearRect(0, 0, can.width, can.height);

            const drawParticle = (p) => {
                ctx.translate(p.x + p.wiggle.x, p.y + p.wiggle.y);
                ctx.rotate(p.rotation + p.wiggle.rotation);
                ctx.drawImage(sprites, p.img.x, p.img.y, p.img.size, p.img.size, p.img.size * -0.5 * p.scale, p.img.size * -0.5 * p.scale, p.img.size * p.scale, p.img.size * p.scale);
                ctx.rotate(-p.rotation - p.wiggle.rotation);
                ctx.translate(-p.x - p.wiggle.x, -p.y - p.wiggle.y);
            }

            // draw canvas
            ctx.filter = `blur(4px)`;
            for (let i = 0; i < Math.floor(config.smallSpriteCount * 0.33); ++i) {
                drawParticle(particleArray[i]);

            }
            ctx.filter = `blur(2px)`;
            for (let i = Math.floor(config.smallSpriteCount * 0.33); i < Math.floor(config.smallSpriteCount * 0.66); ++i) {
                drawParticle(particleArray[i]);
            }
            ctx.filter = `none`;
            for (let i = Math.floor(config.smallSpriteCount * 0.66); i < config.smallSpriteCount; ++i) {
                drawParticle(particleArray[i]);
            }

            window.requestAnimationFrame(updateCanvas);
        }
    }

    const initCanvas = () => {



        particleArray.map(p => {
            TweenMax.from(p, 2, { x: origin.x, y: origin.y, rotation: FauxRandom() * Math.PI * 2, ease: Power3.easeInOut, delay: FauxRandom() * 0.5 + 1 })
        })

        updateCanvas();

        console.log(tl);


    }

    // MOUNTING -----------------------------
    useEffect(() => {
        // on mount.
        onResize();
        defineParticles();

        window.addEventListener("resize", onResize);
        sprites.onload = initCanvas;

        document.createElement("img");
        return () => {
            // clean-up on dismount.
            console.log("Unmounting: Particle system");
            window.removeEventListener("resize", onResize);
            window.cancelAnimationFrame(updateCanvas);
            tl.kill();
        }
    }, [])

    return (
        <canvas ref={canvasRef} className="particle-system" />
    );
};

export default Particles;

