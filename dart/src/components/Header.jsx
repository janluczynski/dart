import { Link } from "react-router-dom";
import logo from "../assets/dart.png";
export default function Header() {
  return (
    <>
      <Link
        to="/"
        className="text-blue-500 hover:text-blue-800 transition-colors duration-200 text-lg font-bold m-2"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-blue-500 hover:text-blue-800 transition-colors duration-200 text-lg font-bold m-2"
      >
        About
      </Link>
      <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
        <img
          src={logo}
          alt="A canvas"
          className="object-contain mb-8 w-44 h-44"
        />
        <h1 className="text-2xl font-bold">Darts Scorer</h1>
      </header>
    </>
  );
}
