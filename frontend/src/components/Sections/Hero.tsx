"use client";

import { useState } from "react";
import GamePreview from "./GamePreview";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-5xl font-bold mb-6">Conquer the Eldin Maze</h1>
        <p className="text-xl mb-8">
          Navigate through fog, find levers, and escape with your life in this
          thrilling blockchain-powered adventure!
        </p>
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Play Now for $2
        </button>
      </div>
      <div className="lg:w-1/2">
        <GamePreview isHovered={isHovered} />
      </div>
    </section>
  );
}
