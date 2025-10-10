import { motion } from "framer-motion";

export default function AuthorPage() {
  return (
    <div className="min-h-screen bg-[url('/images/parchment.jpg')] bg-cover bg-center text-yellow-100 flex flex-col items-center py-12 px-6">
      <div className="bg-black/70 border-4 border-yellow-600 rounded-2xl shadow-2xl p-8 max-w-3xl text-center font-serif">
        <h1 className="text-3xl mb-4 font-bold text-yellow-400">
          📜 The Chronicler of Heroes
        </h1>
        <motion.img
          src="/me.jpg"
          alt="Author portrait"
          className="border-4 border-yellow-600 mx-auto mb-6 shadow-lg hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.5 }}
        />
        <p className="text-lg leading-relaxed mb-4">
          Greetings, traveler. I am{" "}
          <span className="text-yellow-300">Tonio</span>, a humble archivist of
          worlds long past. Since the days of dial-up modems and pixelated maps,
          I’ve wandered the lands of Enroth and Erathia, chasing dragons,
          gathering artifacts, and saving the realm — one turn at a time.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          This site is my tribute to the timeless magic of{" "}
          <span className="text-yellow-300">Heroes of Might & Magic</span> — a
          digital shrine to adventure, music, and strategy that shaped countless
          childhoods.
        </p>

        <p className="italic text-yellow-400 mb-6">
          “In every town, a melody. In every hero, a story.”
        </p>

        <h2 className="text-2xl font-bold mb-2 text-yellow-400">
          Behind the Spellbook
        </h2>
        <p className="text-lg leading-relaxed">
          Built with <b>React</b>, <b>Framer Motion</b> and <b>Tailwind</b>,
          this project blends code and nostalgia. May it bring back a spark of
          wonder to all who once marched across the lands of Might & Magic.
        </p>

        <div className="mt-8 border-t border-yellow-700 pt-4">
          <p className="text-sm text-yellow-500">
            Dedicated to Jon Van Caneghem, Paul Romero, and Rob King — the true
            heroes behind the magic.
          </p>
        </div>
      </div>
    </div>
  );
}
