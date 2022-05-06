import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-neutral-800 text-white p-4 flex justify-around">
      <Link to="/asteroids">Asteroids near the Earth</Link>
      <Link to="/picture">Picture of the day</Link>
    </nav>
  );
};

export default Header;
