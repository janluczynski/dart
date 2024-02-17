import logo from "../assets/dart.png";
export default function Header() {
  function handleClick(event) {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left; //x position within the element.
    const y = event.clientY - rect.top; //y position within the element.
    console.log("Left? : " + x + " ; Top? : " + y + ".");
  }
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img
        src={logo}
        alt="A canvas"
        className="object-contain mb-8 w-44 h-44"
        onClick={handleClick}
      />
      <h1 className="text-2xl font-bold">Darts Scorer</h1>
    </header>
  );
}
