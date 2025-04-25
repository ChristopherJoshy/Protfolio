import { useEffect, useState, useRef } from "react";
import { useGameStore } from "@/store/gameStore";

const AudioController = () => {
  const { isMusicPlaying, setMusicPlaying } = useGameStore();
  // Create audio ref to persist across renders
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Flag to track initialization
  const [initialized, setInitialized] = useState(false);
  
  // Initialize audio once on component mount
  useEffect(() => {
    // Create the audio element if it doesn't exist
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.src = "/assets/music/background/main-theme.mp3";
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
      audioRef.current.preload = "auto";
      
      // Add error handler for debugging
      audioRef.current.onerror = (e) => {
        console.error("Audio error:", e);
        console.error("Error code:", audioRef.current?.error?.code);
        console.error("Error message:", audioRef.current?.error?.message);
      };
      
      // Add load handler
      audioRef.current.oncanplaythrough = () => {
        console.log("Audio loaded and can play");
        setInitialized(true);
      };
    }
    
    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, []);
  
  // Enable autoplay by default
  useEffect(() => {
    if (initialized && !isMusicPlaying) {
      setMusicPlaying(true);
    }
  }, [initialized]);
  
  // Handle play/pause based on music toggle state
  useEffect(() => {
    if (!audioRef.current || !initialized) return;
    
    if (isMusicPlaying) {
      // Use try-catch to handle potential play failures
      try {
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error('Audio play failed:', error);
            // If autoplay is blocked, we need user interaction
            if (error.name === 'NotAllowedError') {
              console.log('Audio autoplay blocked. User interaction required.');
            }
          });
        }
      } catch (err) {
        console.error("Play error:", err);
      }
    } else {
      audioRef.current.pause();
    }
  }, [isMusicPlaying, initialized]);

  return null;
};

export default AudioController;
