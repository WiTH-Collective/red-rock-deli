import React, { useRef, useEffect } from 'react';
import { TweenMax, Power2, TimelineMax } from 'gsap';

const PageTransition = (props) => {

    const canvas = useRef();
    const offset = {y1: 0, y2: 0, y3: 0};
    const width = window.innerWidth;
    const height = window.innerHeight;

    const drawCanvas = () => {    
        const ctx = canvas.current.getContext("2d");
        const boundingBox = canvas.current.getBoundingClientRect();
        ctx.width = width;
        ctx.height = height;
        canvas.current.width = boundingBox.width;
        canvas.current.height = boundingBox.height;
        ctx.clearRect(0,0,width,height);

        const draw = (color, _y) => {
            ctx.beginPath();
            ctx.moveTo(0, offset.y1);
            // ctx.bezierCurveTo(width * 0.25, offset.y1, width * 0.25, _y, width * 0.5, _y);
            // ctx.bezierCurveTo(width * 0.75, _y, width * 0.75, offset.y1, width, offset.y1);
            ctx.quadraticCurveTo(width * 0.5, _y, width, offset.y1)
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.lineTo(0, 0);
            ctx.fillStyle = color;
            ctx.fill();
        }
        
        draw("#131417", offset.y2)
    }

    useEffect(() => {
        canvas.current.style.background = "none";
        const tl = new TimelineMax({onUpdate: drawCanvas, onComplete: () => {
            canvas.current.style.display = "none";
        }});
        tl.to(offset, 1.0, {y2: height, ease: Power2.easeInOut}, 0.0);
        tl.to(offset, 0.8, {y1: height, ease: Power2.easeInOut}, 0.2);
    }, []);



    return(
        <canvas ref={canvas} className="page-transition" />
    );

}
export default PageTransition;

