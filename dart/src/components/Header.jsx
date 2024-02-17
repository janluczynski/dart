import logo from "../assets/dart.png";
export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img
        src={logo}
        alt="A canvas"
        className="object-contain mb-8 w-44 h-44"
      />
      <h1 className="text-2xl font-bold">Darts Scorer</h1>
    </header>
  );
}
