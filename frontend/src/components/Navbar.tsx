import { Link } from "react-router-dom";
import Logo from "../assets/O3IFCG0.jpg";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Elden Maze
          <img src={Logo} alt="Logo" className="h-14 w-auto" />
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/play" className="hover:text-gray-300">
            Play
          </Link>
          <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
