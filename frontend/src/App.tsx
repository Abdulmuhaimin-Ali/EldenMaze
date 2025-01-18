import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Board from "./components/Board";
import LandingPage from "./components/LandingPage";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/play" element={<Board />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
