import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectOrb from "@/components/ui/project-orb";
import DialogBox from "@/components/ui/dialog-box";
import PixelButton from "@/components/ui/pixel-button";
import { useGameStore } from "@/store/gameStore";
import { projects } from "@/data/projects";
import GitHubStats from "@/components/GitHubStats";

const ProjectsZone = () => {
  const { setCurrentZone } = useGameStore();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const showProject = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const hideProject = () => {
    setSelectedProject(null);
  };

  const currentProject = selectedProject ? projects.find(p => p.id === selectedProject) : null;

  return (
    <motion.div 
      id="projects" 
      className="zone min-h-screen p-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Medieval anime background with theme support */}
      <div className="absolute inset-0 bg-medieval-auto z-0">
        <div className="absolute inset-0 bg-background opacity-70"></div>
        
        {/* Radial pulse effect */}
        <div className="bg-radial-pulse"></div>
        
        {/* Lighting effects */}
        <div className="absolute top-0 left-1/4 w-1/2 h-40 bg-gradient-to-b from-accent/20 to-transparent transform -translate-x-1/2 rotate-15 opacity-20"></div>
        <div className="absolute top-20 right-1/4 w-1/2 h-60 bg-gradient-to-b from-highlight/20 to-transparent transform translate-x-1/2 -rotate-15 opacity-20"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Enhanced title with better visual hierarchy */}
        <div className="text-center mb-12 relative">
          <h1 className="font-pixel text-2xl md:text-3xl text-highlight mb-2 relative z-10 drop-shadow-[0_0_10px_rgba(255,0,77,0.5)]">
            THE FORGE
            <span className="absolute -inset-x-10 -top-6 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-70"></span>
            <span className="absolute -inset-x-10 -bottom-4 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-70"></span>
          </h1>
          <p className="font-pixel-secondary text-lg mb-2 max-w-2xl mx-auto text-neutral-200">
            Artifacts crafted through skill and determination...
          </p>
          <p className="font-pixel-secondary text-sm max-w-2xl mx-auto text-neutral-400 italic">
            Each project is a fusion of code, creativity, and problem-solving
          </p>
        </div>
        
        {/* Enhanced project orbs grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="transform transition duration-300 hover:scale-110">
              <ProjectOrb 
                title={project.shortTitle}
                onClick={() => showProject(project.id)}
                className="shadow-[0_0_15px_rgba(41,173,255,0.3)] hover:shadow-[0_0_25px_rgba(255,0,77,0.5)]"
              />
            </div>
          ))}
        </div>
        
        {/* Enhanced project details panels */}
        <AnimatePresence>
          {currentProject && (
            <motion.div 
              id="project-details"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="backdrop-blur-sm"
            >
              <DialogBox className="project-panel p-6 rounded max-w-4xl mx-auto border-4 border-highlight/70 shadow-[0_0_30px_rgba(255,0,77,0.3)] bg-opacity-80">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="font-pixel text-base md:text-lg text-highlight mb-1">{currentProject.title}</h2>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                  </div>
                  <button 
                    className="text-accent font-pixel w-8 h-8 rounded-full border-2 border-accent hover:bg-accent hover:text-primary transition duration-300 flex items-center justify-center" 
                    onClick={hideProject}
                  >
                    X
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="border-2 border-primary/50 p-1 mb-4 transform transition duration-300 hover:scale-[1.02] overflow-hidden">
                      <img 
                        src={currentProject.image} 
                        alt={`${currentProject.title} Screenshot`} 
                        className="w-full rounded pixelated"
                      />
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {currentProject.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-primary/70 backdrop-blur-sm text-xs font-pixel-secondary px-2 py-1 rounded border border-highlight/30 transform transition duration-300 hover:border-highlight/70 hover:translate-y-[-2px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a href={currentProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <PixelButton variant="accent" size="sm" className="w-full shadow-[0_0_10px_rgba(41,173,255,0.2)]">
                          GitHub
                        </PixelButton>
                      </a>
                      {currentProject.demoUrl && (
                        <a href={currentProject.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <PixelButton variant="highlight" size="sm" className="w-full shadow-[0_0_10px_rgba(255,0,77,0.2)]">
                            Live Demo
                          </PixelButton>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="backdrop-blur-sm bg-primary/20 p-4 rounded border border-highlight/20">
                    <div className="font-pixel text-xs text-accent mb-2 border-b border-accent/30 pb-1">ABOUT</div>
                    <div className="font-pixel-secondary text-sm mb-4 leading-relaxed">
                      {currentProject.description}
                    </div>
                    
                    <div className="font-pixel text-xs text-accent mb-2 border-b border-accent/30 pb-1">KEY FEATURES</div>
                    <ul className="font-pixel-secondary text-sm space-y-2 mb-4">
                      {currentProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-highlight mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="font-pixel text-xs text-accent mb-2 border-b border-accent/30 pb-1">DEVELOPMENT PERIOD</div>
                    <div className="font-pixel-secondary text-sm">{currentProject.period}</div>
                  </div>
                </div>
              </DialogBox>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* GitHub Stats */}
        <div className="mb-16 max-w-2xl mx-auto">
          <GitHubStats />
        </div>
        
        {/* Enhanced Call-to-action */}
        <div className="flex justify-center mt-16 mb-8 relative">
          {/* Button glow effect */}
          <div className="absolute w-40 h-40 rounded-full bg-gradient-radial from-accent/30 to-transparent animate-pulse-slow"></div>
          
          <PixelButton 
            onClick={() => setCurrentZone('quests')}
            className="relative z-10 text-base px-8 py-4 bg-primary/80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,0,77,0.4)] animate-pulse-slow border-4"
          >
            VISIT QUEST BOARD
          </PixelButton>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsZone;
