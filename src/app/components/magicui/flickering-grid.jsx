// Pega este código en tu archivo: src/components/magicui/flickering-grid.jsx

"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "../../../lib/utils";
export const FlickeringGrid = ({
  className,
  squareSize = 30,
  gridGap = 4,
  color = "#FFFFFF",
  maxOpacity = 0.5,
  flickerChance = 0.1,
  ...props
}) => {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const grid = gridRef.current;
    const squares = [];

    const gridWidth = grid.clientWidth;
    const gridHeight = grid.clientHeight;

    const numSquaresX = Math.ceil(gridWidth / (squareSize + gridGap));
    const numSquaresY = Math.ceil(gridHeight / (squareSize + gridGap));

    for (let i = 0; i < numSquaresX; i++) {
      for (let j = 0; j < numSquaresY; j++) {
        const square = document.createElement("div");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.backgroundColor = color;
        square.style.opacity = "0";
        square.style.position = "absolute";
        square.style.left = `${i * (squareSize + gridGap)}px`;
        square.style.top = `${j * (squareSize + gridGap)}px`;
        square.style.transition = "opacity 0.3s ease";

        grid.appendChild(square);
        squares.push(square);
      }
    }

    const flickerInterval = setInterval(() => {
      squares.forEach((square) => {
        if (Math.random() < flickerChance) {
          square.style.opacity = (Math.random() * maxOpacity).toString();
        } else if (parseFloat(square.style.opacity) > 0) {
          square.style.opacity = (parseFloat(square.style.opacity) - 0.05).toString();
        }
      });
    }, 100);

    return () => {
      clearInterval(flickerInterval);
      grid.innerHTML = "";
    };
  }, [squareSize, gridGap, color, maxOpacity, flickerChance]);

  return <div ref={gridRef} className={cn("relative h-full w-full", className)} {...props} />;
};

export default FlickeringGrid;