// Pega este código en: src/app/components/magicui/particles.jsx
"use client";
import React, { useRef, useEffect } from "react";

export function Particles(props) {
  const canvasRef = useRef(null);
  const {
    className,
    quantity = 1000,
    staticity = 50,
    ease = 50,
    size = 2,
    refresh = false,
    color = "#ffffff",
    vx = 0,
    vy = 0,
  } = props;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let canvasParent = canvas.parentElement;
    if (!canvasParent) return;

    let w, h;
    const setCanvasDimensions = () => {
      w = canvasParent.clientWidth;
      h = canvasParent.clientHeight;
      canvas.width = w;
      canvas.height = h;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    const particles = [];
    for (let i = 0; i < quantity; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: vx,
        vy: vy,
      });
    }

    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };
    canvasParent.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      context.clearRect(0, 0, w, h);
      context.fillStyle = color;
      particles.forEach((p) => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const a = Math.atan2(dy, dx);
        const newVx = (p.vx + (Math.cos(a) * staticity) / dist) * (1 - ease / 100);
        const newVy = (p.vy + (Math.sin(a) * staticity) / dist) * (1 - ease / 100);
        p.vx = newVx;
        p.vy = newVy;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        context.beginPath();
        context.arc(p.x, p.y, size, 0, Math.PI * 2);
        context.fill();
      });
    };

    let animationFrameId;
    const animate = () => {
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      canvasParent.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [quantity, staticity, ease, size, refresh, color, vx, vy]);

  return <canvas ref={canvasRef} className={className} />;
}