import { Link } from "react-router-dom";
import MiniBattle from "../components/MiniBattle";

export default function BattlePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 via-purple-800 to-black text-white p-6">
      <h1 className="text-5xl font-bold mb-6">⚔️ Heroes Mini Battle Arena</h1>
      <p className="text-lg mb-10 max-w-2xl text-center text-yellow-100">
        Enter the arena and witness a classic turn-based duel between the brave
        Pikeman and the cursed Skeleton. Relive the spirit of Heroes of Might &
        Magic!
      </p>

      <MiniBattle />

      <Link to="/" className="mt-10">
        <button className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-2xl shadow-lg border-2 border-yellow-300 hover:bg-yellow-400 transition">
          🏰 Back to Home
        </button>
      </Link>
    </div>
  );
}
