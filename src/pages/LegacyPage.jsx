import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function LegacyPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = Object.values(
    import.meta.glob("/src/assets/images/*.jpg", {
      eager: true,
      import: "default",
    }),
  );

  // ESC key closes modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return; // only navigate when modal is open
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  const handleNext = (e) => {
    e.stopPropagation(); // prevent modal close
    setSelectedIndex((prev) => (prev + 1) % images.length); // wrap around
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length); // wrap around
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-indigo-900 via-purple-800 to-black text-white p-6">
      <h1 className="text-5xl font-bold mb-6">The Legacy Continues</h1>
      <p className="text-lg mb-8 max-w-3xl text-center">
        Behold the timeless journey of heroes and legends. A fantasy tribute
        crafted in classic game style.
      </p>

      {/* Image grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`legacy-${src}`}
            className="w-40 h-40 object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedIndex(i)}
          />
        ))}
      </div>

      {/* Back button */}
      <Link to="/">
        <button className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-2xl shadow-lg border-2 border-yellow-300">
          Back to Home
        </button>
      </Link>

      {/* Fullscreen popup */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            className="absolute left-4 text-white text-3xl font-bold p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 w-50"
            onClick={handlePrev}
          >
            ‹
          </button>

          <img
            src={images[selectedIndex]}
            alt="enlarged"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
          />

          <button
            className="absolute right-4 text-white text-3xl font-bold p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 w-50"
            onClick={handleNext}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
