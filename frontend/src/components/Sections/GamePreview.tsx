import { useState, useEffect } from "react";
import { Droplet, Key } from "lucide-react";

const mazeLayout = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

export default function GamePreview({ isHovered }: { isHovered: boolean }) {
  const [playerPosition] = useState({ x: 1, y: 1 });
  const [waterDrops, setWaterDrops] = useState<{ x: number; y: number }[]>([]);
  const [levers, setLevers] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    // Generate random water drops and levers
    const newWaterDrops = generateRandomPositions(3);
    const newLevers = generateRandomPositions(2);
    setWaterDrops(newWaterDrops);
    setLevers(newLevers);
  }, []);

  function generateRandomPositions(count: number) {
    const positions = [];
    for (let i = 0; i < count; i++) {
      let x, y;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      } while (
        mazeLayout[y][x] === 1 ||
        (x === playerPosition.x && y === playerPosition.y)
      );
      positions.push({ x, y });
    }
    return positions;
  }

  return (
    <div className="relative w-full h-96 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-0.5 p-2">
        {mazeLayout.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              className={`
                ${cell === 1 ? "bg-gray-600" : "bg-gray-700"}
                ${
                  x === playerPosition.x && y === playerPosition.y
                    ? "bg-purple-500"
                    : ""
                }
                rounded-sm transition-colors duration-300
              `}
            >
              {waterDrops.some((drop) => drop.x === x && drop.y === y) && (
                <Droplet className="w-full h-full text-blue-400 p-1" />
              )}
              {levers.some((lever) => lever.x === x && lever.y === y) && (
                <Key className="w-full h-full text-yellow-400 p-1" />
              )}
            </div>
          ))
        )}
      </div>
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-75"
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-2xl font-bold text-white">Hover to Reveal Maze</p>
      </div>
      <div className="absolute top-2 left-2 bg-gray-800 bg-opacity-75 p-2 rounded">
        <p className="text-sm text-white">Find the keys and escape!</p>
      </div>
    </div>
  );
}
