import { useState } from "react";
import { motion } from "framer-motion";

export default function MiniBattle() {
  const [pikemanHP, setPikemanHP] = useState(100);
  const [skeletonHP, setSkeletonHP] = useState(100);
  const [turn, setTurn] = useState("Pikeman");
  const [message, setMessage] = useState("⚔️ The battle begins!");

  const attack = () => {
    if (pikemanHP <= 0 || skeletonHP <= 0) return;

    let damage = Math.floor(Math.random() * 20) + 5;

    if (turn === "Pikeman") {
      setSkeletonHP((hp) => Math.max(0, hp - damage));
      setMessage(`🛡️ Pikeman strikes Skeleton for ${damage} damage!`);
      setTurn("Skeleton");
    } else {
      setPikemanHP((hp) => Math.max(0, hp - damage));
      setMessage(`💀 Skeleton hits Pikeman for ${damage} damage!`);
      setTurn("Pikeman");
    }
  };

  const reset = () => {
    setPikemanHP(100);
    setSkeletonHP(100);
    setTurn("Pikeman");
    setMessage("⚔️ The battle begins again!");
  };

  return (
    <div className="bg-gradient-to-b from-yellow-200 via-yellow-100 to-yellow-50 border-4 border-yellow-700 rounded-2xl shadow-2xl p-8 max-w-lg mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-yellow-900">
        Mini Battle Arena
      </h2>

      <div className="flex justify-around items-center mb-8">
        {/* Pikeman */}
        <motion.div
          animate={{
            x: turn === "Pikeman" ? [0, -15, 0] : 0,
            rotate: turn === "Pikeman" ? [0, -5, 5, 0] : 0,
          }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="text-5xl">🛡️</div>
          <p className="font-bold text-yellow-900 mt-2">Pikeman</p>
          <div className="w-28 bg-gray-300 rounded-full h-3 mt-1">
            <motion.div
              className="bg-green-600 h-3 rounded-full"
              animate={{ width: `${pikemanHP}%` }}
            />
          </div>
          <p className="text-sm text-gray-800">{pikemanHP} HP</p>
        </motion.div>

        {/* Skeleton */}
        <motion.div
          animate={{
            x: turn === "Skeleton" ? [0, 15, 0] : 0,
            rotate: turn === "Skeleton" ? [0, 5, -5, 0] : 0,
          }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="text-5xl">💀</div>
          <p className="font-bold text-yellow-900 mt-2">Skeleton</p>
          <div className="w-28 bg-gray-300 rounded-full h-3 mt-1">
            <motion.div
              className="bg-red-600 h-3 rounded-full"
              animate={{ width: `${skeletonHP}%` }}
            />
          </div>
          <p className="text-sm text-gray-800">{skeletonHP} HP</p>
        </motion.div>
      </div>

      <p className="mb-6 text-lg font-semibold text-yellow-800 italic">
        {message}
      </p>

      {pikemanHP > 0 && skeletonHP > 0 ? (
        <button
          onClick={attack}
          className="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 px-6 rounded-xl shadow-md transition"
        >
          {turn === "Pikeman" ? "🗡️ Pikeman Attack" : "💀 Skeleton Attack"}
        </button>
      ) : (
        <>
          <p className="font-bold text-xl text-red-700 mb-3">
            {pikemanHP <= 0 ? "💀 Skeleton wins!" : "🛡️ Pikeman wins!"}
          </p>
          <button
            onClick={reset}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-xl shadow-md transition"
          >
            Restart Battle
          </button>
        </>
      )}
    </div>
  );
}
