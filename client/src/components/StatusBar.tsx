import { useGameStore } from "@/store/gameStore";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useRef, useEffect } from "react";

const StatusBar = () => {
  const { 
    currentZone, 
    setCurrentZone, 
    isMobileMenuOpen, 
    setMobileMenuOpen,
    isMusicPlaying,
    toggleMusic
  } = useGameStore();

  const [showMusicMenu, setShowMusicMenu] = useState(false);
  const musicMenuRef = useRef<HTMLDivElement>(null);

  const handleZoneChange = (zone: string) => {
    setCurrentZone(zone);
    // Scroll to top when changing zones
    window.scrollTo(0, 0);
  };

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMusicMenu = () => {
    setShowMusicMenu(!showMusicMenu);
  };

  // Close music menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (musicMenuRef.current && !musicMenuRef.current.contains(event.target as Node)) {
        setShowMusicMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="status-bar sticky top-0 z-50 flex items-center justify-between p-2 md:p-4 font-pixel text-xs">
      <div className="flex items-center space-x-2">
        <div className="text-highlight">CHRISTOPHER</div>
        <div className="text-accent">LVL 25</div>
      </div>
      
      <div className="hidden md:flex items-center space-x-4">
        <button 
          className={`nav-btn transition-colors ${currentZone === 'home' ? 'text-highlight' : 'text-text hover:text-highlight'}`} 
          onClick={() => handleZoneChange('home')}
        >
          HOME
        </button>
        <button 
          className={`nav-btn transition-colors ${currentZone === 'skills' ? 'text-highlight' : 'text-text hover:text-highlight'}`} 
          onClick={() => handleZoneChange('skills')}
        >
          SKILLS
        </button>
        <button 
          className={`nav-btn transition-colors ${currentZone === 'education' ? 'text-highlight' : 'text-text hover:text-highlight'}`} 
          onClick={() => handleZoneChange('education')}
        >
          EDUCATION
        </button>
        <button 
          className={`nav-btn transition-colors ${currentZone === 'projects' ? 'text-highlight' : 'text-text hover:text-highlight'}`} 
          onClick={() => handleZoneChange('projects')}
        >
          PROJECTS
        </button>
        <button 
          className={`nav-btn transition-colors ${currentZone === 'quests' ? 'text-highlight' : 'text-text hover:text-highlight'}`} 
          onClick={() => handleZoneChange('quests')}
        >
          QUESTS
        </button>
        <button 
          className={`nav-btn transition-colors ${currentZone === 'contact' ? 'text-highlight' : 'text-text hover:text-highlight'}`} 
          onClick={() => handleZoneChange('contact')}
        >
          CONTACT
        </button>
      </div>
      
      <div className="md:hidden">
        <button id="menu-toggle" className="text-highlight" onClick={toggleMenu}>
          MENU
        </button>
      </div>
      
      <div className="flex items-center space-x-2">
        <ThemeToggle />
        <div className="relative" ref={musicMenuRef}>
          <button 
            id="music-toggle" 
            className="text-xs bg-primary px-2 py-1 flex items-center gap-1"
            onClick={toggleMusic}
          >
            <span id="music-icon">{isMusicPlaying ? '♫' : '♪'}</span>
            <span className="hidden sm:inline">MUSIC</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
