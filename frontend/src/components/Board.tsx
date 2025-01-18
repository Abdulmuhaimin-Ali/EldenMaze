import GameBackground from "../assets/GameBackground.webp";

const Board = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${GameBackground})` }}
    ></div>
  );
};

export default Board;
