import { motion } from "framer-motion";
import DialogBox from "@/components/ui/dialog-box";
import PixelButton from "@/components/ui/pixel-button";
import { useGameStore } from "@/store/gameStore";

const HomeZone = () => {
  const { setCurrentZone } = useGameStore();

  return (
    <motion.div 
      id="home" 
      className="zone min-h-screen flex flex-col items-center justify-center p-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-medieval-auto z-0">
        <div className="absolute inset-0 bg-background opacity-70"></div>
      </div>
      
      {/* Character sprite */}
      <div className="sprite z-10 mb-8">
        <svg width="64" height="64" viewBox="0 0 64 64" className="pixelated">
          <rect x="24" y="8" width="16" height="16" fill="#5d275d" />
          <rect x="16" y="24" width="32" height="8" fill="#ff004d" />
          <rect x="16" y="32" width="8" height="16" fill="#29adff" />
          <rect x="40" y="32" width="8" height="16" fill="#29adff" />
          <rect x="24" y="40" width="16" height="8" fill="#5d275d" />
          <rect x="24" y="48" width="8" height="8" fill="#29adff" />
          <rect x="32" y="48" width="8" height="8" fill="#29adff" />
          <rect x="24" y="24" width="16" height="16" fill="#c2c3c7" />
          <rect x="28" y="16" width="4" height="4" fill="#1a1c2c" />
          <rect x="36" y="16" width="4" height="4" fill="#1a1c2c" />
          <rect x="28" y="28" width="8" height="4" fill="#1a1c2c" />
        </svg>
      </div>
      
      {/* Dialog box */}
      <DialogBox className="max-w-lg w-full z-10">
        <div className="text-highlight font-pixel text-lg md:text-2xl mb-4">CHRISTOPHER JOSHY</div>
        <div className="text-accent font-pixel text-base md:text-lg mb-4">FULL-STACK DEVELOPER</div>
        <div className="font-pixel-secondary text-base md:text-xl leading-relaxed mb-6">
          Passionate full-stack developer with expertise in web technologies, AI integration, and 3D visualization. Currently mastering C# & Advanced Web Development. Seeking to leverage technical skills and creativity in a challenging developer role that values innovation.
          <span className="text-highlight animate-blink">|</span>
        </div>
        
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-6">
          <div className="flex items-center">
            <span className="text-accent font-pixel text-sm mr-2">📧</span>
            <span className="font-pixel-secondary text-sm">christopherjoshy4@gmail.com</span>
          </div>
          <div className="flex items-center">
            <span className="text-accent font-pixel text-sm mr-2">📱</span>
            <span className="font-pixel-secondary text-sm">+918075805931</span>
          </div>
          <div className="flex items-center">
            <span className="text-accent font-pixel text-sm mr-2">📍</span>
            <span className="font-pixel-secondary text-sm">Kerala, India</span>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://www.linkedin.com/in/christopher-joshy-272a77290/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-primary text-highlight font-pixel text-sm hover:bg-accent transition-colors">LINKEDIN</a>
          <a href="https://github.com/ChristopherJoshy" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-primary text-highlight font-pixel text-sm hover:bg-accent transition-colors">GITHUB</a>
          <a href="https://instagram.com/calculatederror" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-primary text-highlight font-pixel text-sm hover:bg-accent transition-colors">INSTAGRAM</a>
        </div>
        
        <PixelButton onClick={() => setCurrentZone('skills')}>
          START QUEST
        </PixelButton>
      </DialogBox>
      
      {/* NPCs */}
      <div className="absolute bottom-20 left-20 npc hidden md:block z-10">
        <svg width="40" height="40" viewBox="0 0 40 40" className="pixelated animate-bounce-slow">
          <rect x="12" y="4" width="16" height="8" fill="#ff004d" />
          <rect x="8" y="12" width="24" height="12" fill="#5d275d" />
          <rect x="12" y="24" width="4" height="8" fill="#29adff" />
          <rect x="24" y="24" width="4" height="8" fill="#29adff" />
          <rect x="8" y="16" width="4" height="4" fill="#c2c3c7" />
          <rect x="28" y="16" width="4" height="4" fill="#c2c3c7" />
        </svg>
        <div className="npc-tooltip hidden absolute left-0 bottom-12 bg-background dialog-box p-2 text-xs font-pixel-secondary whitespace-nowrap">
          "He's passionate about clean code and intuitive design!"
        </div>
      </div>
      
      <div className="absolute top-40 right-24 npc hidden md:block z-10">
        <svg width="40" height="40" viewBox="0 0 40 40" className="pixelated animate-bounce-slow">
          <rect x="12" y="4" width="16" height="8" fill="#29adff" />
          <rect x="8" y="12" width="24" height="12" fill="#5d275d" />
          <rect x="12" y="24" width="4" height="8" fill="#ff004d" />
          <rect x="24" y="24" width="4" height="8" fill="#ff004d" />
          <rect x="8" y="16" width="4" height="4" fill="#c2c3c7" />
          <rect x="28" y="16" width="4" height="4" fill="#c2c3c7" />
        </svg>
        <div className="npc-tooltip hidden absolute right-0 bottom-12 bg-background dialog-box p-2 text-xs font-pixel-secondary whitespace-nowrap">
          "I heard he developed an AI-powered adaptive learning app!"
        </div>
      </div>
      
      <div className="absolute top-80 left-40 npc hidden md:block z-10">
        <svg width="40" height="40" viewBox="0 0 40 40" className="pixelated animate-bounce-slow">
          <rect x="12" y="4" width="16" height="8" fill="#ff004d" />
          <rect x="8" y="12" width="24" height="12" fill="#29adff" />
          <rect x="12" y="24" width="4" height="8" fill="#ff004d" />
          <rect x="24" y="24" width="4" height="8" fill="#ff004d" />
          <rect x="8" y="16" width="4" height="4" fill="#c2c3c7" />
          <rect x="28" y="16" width="4" height="4" fill="#c2c3c7" />
        </svg>
        <div className="npc-tooltip hidden absolute left-0 bottom-12 bg-background dialog-box p-2 text-xs font-pixel-secondary whitespace-nowrap">
          "He's a game developer with a love for interactive experiences!"
        </div>
      </div>
    </motion.div>
  );
};

export default HomeZone;
