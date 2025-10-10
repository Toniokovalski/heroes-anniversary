import { useState, useEffect, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const tracks = [
  { name: "The Druid & The Ranger", src: "/audio/The Druid & The Ranger.mp3" },
  { name: "The Pride Of Erathia", src: "/audio/The Pride Of Erathia.mp3" },
  { name: "The Heretic's Plan", src: "/audio/The Heretic's Plan.mp3" },
  {
    name: "A Quick Stroll Through The KingdomV",
    src: "/audio/A Quick Stroll Through The Kingdom.mp3",
  },
  { name: "The Necropolis", src: "/audio/The Necropolis.mp3" },
  { name: "The Reign Of The Orcs", src: "/audio/The Reign Of The Orcs.mp3" },
];

export default function FloatingMusicPlayer() {
  const playerRef = useRef(0);
  const [trackIndex, setTrackIndex] = useState(0);

  const nextTrack = () => setTrackIndex((prev) => (prev + 1) % tracks.length);
  const prevTrack = () =>
    setTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);

  // Autoplay after first user interaction
  useEffect(() => {
    const handleInteraction = () => {
      playerRef.current.audio.current.play().catch(() => {});
      window.removeEventListener("click", handleInteraction);
    };
    window.addEventListener("click", handleInteraction);
    return () => window.removeEventListener("click", handleInteraction);
  }, []);

  // Play automatically when track changes
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.audio.current.play().catch(() => {});
    }
  }, [trackIndex]);

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80">
      <div className="relative bg-black border-4 border-yellow-500 rounded-xl p-2 shadow-xl">
        <div className="absolute inset-0 rounded-xl border-2 border-yellow-300 pointer-events-none animate-pulse"></div>

        <AudioPlayer
          ref={playerRef}
          src={tracks[trackIndex].src}
          showSkipControls={false}
          showJumpControls={false}
          onClickPrevious={prevTrack}
          onClickNext={nextTrack}
          customAdditionalControls={[
            <button
              key="prev"
              onClick={prevTrack}
              className="px-2 py-1 text-sm text-yellow-400 hover:text-yellow-200"
            >
              ⬅️
            </button>,
            <button
              key="next"
              onClick={nextTrack}
              className="px-2 py-1 text-sm text-yellow-400 hover:text-yellow-200"
            >
              ➡️
            </button>,
          ]}
          layout="stacked"
          className="bg-transparent text-yellow-400"
        />

        <div className="text-sm text-yellow-300 mt-1 text-center font-mono">
          {tracks[trackIndex].name}
        </div>
      </div>
    </div>
  );
}
