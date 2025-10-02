import { motion } from "framer-motion";

export default function App() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-indigo-800 to-black text-center text-yellow-300 font-serif w-screen overflow-x-hidden">
            <header className="py-10">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold drop-shadow-lg"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Happy 30th Anniversary Heroes of Might and Magic!
                </motion.h1>
            </header>

            <main className="flex flex-col items-center justify-center mt-2 space-y-8">
                <motion.img
                    src="/poster.png"
                    alt="Heroes of Might and Magic Poster"
                    className="w-72 md:w-96 rounded-2xl shadow-2xl border-4 border-yellow-500"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                />

                <motion.p
                    className="max-w-3xl text-lg md:text-xl text-yellow-200 px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Join us in celebrating three decades of legendary Heroes of Might and Magic. <br/>
                    Relive the adventures, strategies, and unforgettable moments that shaped generations.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-2xl shadow-lg border-2 border-yellow-300"
                >
                    Explore the Legacy
                </motion.button>
            </main>

            <footer className="mt-16 py-6 text-sm text-yellow-400">
                © 2025 Heroes of Might and Magic - Tonio
            </footer>
        </div>
    );
}
