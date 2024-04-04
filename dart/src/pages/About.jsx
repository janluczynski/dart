export default function AboutPage() {
  return (
    <div className="flex justify-around w-full h-full flex-col">
      <p>
        This is a simple darts game that I created to practice React and
        TailwindCSS. I hope you enjoy it!
      </p>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/jan-luczynski/"
        className="text-blue-500 hover:text-blue-800 transition-colors duration-200 text-lg font-bold m-2"
      >
        Linkedin
      </a>
      <a
        target="_blank"
        href="https://github.com/janluczynski"
        className="text-blue-500 hover:text-blue-800 transition-colors duration-200 text-lg font-bold m-2"
      >
        Github
      </a>
    </div>
  );
}
