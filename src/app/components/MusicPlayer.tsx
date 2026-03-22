"use client";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Set volume and restore play state from localStorage on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
    }
    const savedState = localStorage.getItem("musicPlayerState");
    if (savedState === "playing" && audioRef.current) {
      setIsPlaying(true);
      // Don't autoplay - wait for user interaction
    }
  }, []);

  // Save play state to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("musicPlayerState", isPlaying ? "playing" : "paused");
    }
  }, [isPlaying]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Ensure audio is loaded before playing
        if (audioRef.current.readyState < 2) {
          // Load the audio if not already loaded
          audioRef.current.load();
        }
        
        // Wait a moment for the audio to be ready, then play
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((err) => {
              // Autoplay was prevented - this is expected
              console.log("Autoplay prevented (user interaction required):", err);
              setIsPlaying(false);
            });
        } else {
          setIsPlaying(true);
        }
      }
    } catch (error) {
      console.error("Error toggling music:", error);
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* Music control button - fixed position top-right */}
      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-[#6ab04c] text-white flex items-center justify-center text-xl hover:bg-[#5a9f3c] transition-colors shadow-lg hover:scale-110 active:scale-95"
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        title={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        loop
        preload="none"
        onLoadedData={() => {
          // Ensure volume is set when audio loads
          if (audioRef.current) {
            audioRef.current.volume = 0.3;
          }
        }}
        onEnded={() => setIsPlaying(false)}
        onError={(e) => {
          console.error("Audio error:", e);
          setIsPlaying(false);
        }}
      >
        <source src="/music/background-music.mp3" type="audio/mpeg" />
        <source src="/music/background-music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}

