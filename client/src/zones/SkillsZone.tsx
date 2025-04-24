import { useState } from "react";
import { motion } from "framer-motion";
import ItemCard from "@/components/ui/item-card";
import XPBar from "@/components/ui/xp-bar";
import PixelButton from "@/components/ui/pixel-button";
import { useGameStore } from "@/store/gameStore";
import { skills } from "@/data/skills";

const SkillsZone = () => {
  const { setCurrentZone } = useGameStore();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <motion.div 
      id="skills" 
      className="zone min-h-screen p-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-medieval-auto z-0">
        <div className="absolute inset-0 bg-background opacity-70"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="font-pixel text-lg md:text-2xl text-highlight text-center mb-8">TRAINING GROUNDS</h1>
        <p className="font-pixel-secondary text-sm md:text-base text-center mb-8">Select your weapons and tools for the journey ahead...</p>
        
        {/* Skills categories */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 font-pixel text-xs">
            <PixelButton 
              className={activeCategory === "all" ? "border-highlight" : ""}
              onClick={() => setActiveCategory("all")}
            >
              ALL SKILLS
            </PixelButton>
            <PixelButton 
              className={activeCategory === "languages" ? "border-highlight" : ""}
              onClick={() => setActiveCategory("languages")}
            >
              LANGUAGES
            </PixelButton>
            <PixelButton 
              className={activeCategory === "frameworks" ? "border-highlight" : ""}
              onClick={() => setActiveCategory("frameworks")}
            >
              FRAMEWORKS
            </PixelButton>
            <PixelButton 
              className={activeCategory === "tools" ? "border-highlight" : ""}
              onClick={() => setActiveCategory("tools")}
            >
              TOOLS
            </PixelButton>
          </div>
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredSkills.map((skill) => (
            <ItemCard key={skill.id}>
              <div className="flex items-center justify-between mb-2">
                <div className="text-accent font-pixel text-xs">{skill.name}</div>
                <div className="text-highlight font-pixel-secondary text-xs">LVL {skill.level}</div>
              </div>
              <div className="flex justify-center mb-3">
                <img src={skill.icon} alt={skill.name} className="h-10 w-10 pixelated" />
              </div>
              <XPBar level={skill.level} className="mb-2" />
              <div className="text-xs font-pixel-secondary">{skill.experience}</div>
            </ItemCard>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <PixelButton onClick={() => setCurrentZone('education')}>
            CONTINUE TO ARCHIVES
          </PixelButton>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsZone;
