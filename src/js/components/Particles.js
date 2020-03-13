import React, { useEffect, useRef, useState } from "react";
import SpritesUrl from "../../img/products/particle-sprites.png";
import ProductsUrl from "../../img/products/product-sprites.png";
import { FauxRandom, CosRandom } from "../utils/FauxRandom";
import { TimelineMax, Power3, TweenMax } from "gsap";

const Particles = props => {
  // console.log("CURRENT: ", props.current);
  const [hasInit, setHasInit] = useState(false);
  const canvasRef = useRef(null);
  let particleArray = [];
  let TL = null;

  console.log("RENDERING COMPONENT");
  const [imagesLoaded, updateImagesLoaded] = useState(0);
  const [imagesHaveLoaded, updateImagesHaveLoaded] = useState(false);
  const imagesTotal = 2;
  const sprites = {
    particles: null,
    products: null
  };

  // image preloader
  const loadImg = source => {
    const img = new Image({ src: source });
    img.onload = () => {
      const i = imagesLoaded;
      updateImagesLoaded(i + 1);
      if (i + 1 === imagesTotal) updateImagesHaveLoaded(true);
      console.log("imagesLoaded: ", i + 1);
    };
    return img;
  };

  useEffect(() => {
    console.log("loading images");

    sprites.particles = loadImg(SpritesUrl);
    sprites.products = loadImg(ProductsUrl);
  }, []);

  // preload images

  // point at the center of the canvas
  const origin = {
    x: null,
    y: null
  };

  const onResize = () => {
    // console.log(e.target.innerWidth, e.target.innerHeight);
    const can = canvasRef.current;
    const canBox = can.getBoundingClientRect();
    can.width = canBox.width;
    can.height = canBox.height;
    origin.x = Math.round(can.width * 0.5);
    origin.y = Math.round(can.height * 0.5);

    if (hasInit) updateCanvas();
  };

  const defineParticles = () => {
    const can = canvasRef.current;
    const config = props.data.config;
    const data = props.data.products[props.current].particles;
    const spriteSheetY = (config.smallSpriteSize + config.largeSpriteSize) * props.current;

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
        scale: FauxRandom() * 0.2 + 0.5
      };

      if (Math.abs(p.x) < 80) {
        if (p.x < 0) {
          p.x -= 80 + FauxRandom() * 120;
        } else {
          p.x += 80 + FauxRandom() * 120;
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
          ctx.translate(origin.x + p.x + p.wiggle.x, origin.y + p.y + p.wiggle.y);
          ctx.globalAlpha = p.alpha;
          ctx.rotate(p.rotation + p.wiggle.rotation);
          ctx.drawImage(
            sprites.particles,
            p.img.x,
            p.img.y,
            p.img.size,
            p.img.size,
            p.img.size * -0.5 * p.scale,
            p.img.size * -0.5 * p.scale,
            p.img.size * p.scale,
            p.img.size * p.scale
          );
          ctx.rotate(-p.rotation - p.wiggle.rotation);
          ctx.translate(-p.x - p.wiggle.x - origin.x, -p.y - p.wiggle.y - origin.y);
        }
      };

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

      ctx.filter = `drop-shadow(0px 20px 5px rgba(0,0,0,0.2))`;
      for (let i = config.smallSpriteCount; i < config.smallSpriteCount + config.largeSpriteCount; ++i) {
        drawParticle(particleArray[i]);
      }

      ctx.restore();
    }
  };

  const initCanvas = () => {
    if (TL) {
      TL.kill();
      TL.reset();
      console.log(TL);
    }

    TL = new TimelineMax({
      delay: 0,
      onUpdate: () => {
        updateCanvas();
      }
    });
    particleArray.map(p => {
      const pDelay = FauxRandom() * 0.5;
      TL.from(
        p,
        5,
        {
          x: p.x * 0.5,
          y: p.y * 0.5,
          rotation: p.rotation + CosRandom() * Math.PI * 0.25,
          ease: Power3.easeOut
        },
        pDelay
      );
      TL.from(
        p,
        0.25,
        {
          alpha: 0,
          ease: Power3.easeIn
        },
        pDelay
      );
    });
  };

  // MOUNTING -----------------------------
  useEffect(() => {
    console.log("MOUNTING: CURRENT: ", props.current, "imagesLoaded", imagesLoaded);

    if (imagesHaveLoaded) {
      onResize();
      defineParticles();
      setHasInit(true);
      initCanvas();
    }

    // on mount.
    window.addEventListener("resize", onResize);

    return () => {
      // clean-up on dismount.
      console.log("Unmounting: Particle system");
      window.removeEventListener("resize", onResize);
    };
  }, [props.current]);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} className="particle-system" />
    </div>
  );
};

export default Particles;
