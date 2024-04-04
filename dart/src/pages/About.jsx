export default function AboutPage() {
  return (
    <div className="flex justify-around w-full h-full flex-col">
      <p className="text-lg font-light mb-4">
        This is a simple darts game that I created to practice React and
        TailwindCSS. I hope you enjoy it!
      </p>
      <p className="text-lg font-light mb-4">
        To play darts, each player starts with a score of 501 and takes turns to
        throw 3 darts. The score for each turn is calculated and subtracted from
        the players' total. Bullseye scores 50, the outer ring scores 25 and a
        dart in the double or treble ring counts double or triple the segment
        score. The objective is to be the first player to reduce the score to
        exactly zero, the final dart must land in either the bullseye or a
        double segment.
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
