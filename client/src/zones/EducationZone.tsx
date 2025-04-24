import { motion } from "framer-motion";
import ItemCard from "@/components/ui/item-card";
import XPBar from "@/components/ui/xp-bar";
import PixelButton from "@/components/ui/pixel-button";
import { useGameStore } from "@/store/gameStore";

const EducationZone = () => {
  const { setCurrentZone } = useGameStore();

  return (
    <motion.div 
      id="education" 
      className="zone min-h-screen p-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-medieval-auto z-0">
        <div className="absolute inset-0 bg-background opacity-70"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="font-pixel text-lg md:text-2xl text-highlight text-center mb-8">THE ARCHIVES</h1>
        <p className="font-pixel-secondary text-sm md:text-base text-center mb-12">Knowledge collected through quests and training...</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education section */}
          <ItemCard className="p-5 transform transition hover:scale-105">
            <div className="flex items-center mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" className="w-12 h-12 mr-4 pixelated">
                <rect x="8" y="8" width="32" height="32" fill="#5d275d" />
                <rect x="12" y="12" width="24" height="24" fill="#1a1c2c" />
                <rect x="16" y="16" width="16" height="2" fill="#c2c3c7" />
                <rect x="16" y="20" width="16" height="2" fill="#c2c3c7" />
                <rect x="16" y="24" width="16" height="2" fill="#c2c3c7" />
                <rect x="16" y="28" width="16" height="2" fill="#c2c3c7" />
                <rect x="16" y="32" width="16" height="2" fill="#c2c3c7" />
              </svg>
              <h2 className="font-pixel text-base text-highlight">EDUCATION SCROLL</h2>
            </div>
            <div className="h-px bg-primary mb-4"></div>
            
            <div className="mb-6">
              <div className="font-pixel text-xs text-accent mb-1">B.Tech</div>
              <div className="font-pixel-secondary text-sm mb-2">Computer Science Engineering</div>
              <div className="font-pixel-secondary text-xs mb-1">St. Joseph's College of Engineering and Technology, Palai</div>
              <div className="font-pixel-secondary text-xs text-highlight">2023 - Present</div>
              <XPBar level={65} className="mt-3" />
              <div className="font-pixel-secondary text-xs text-right mt-1">65% Complete</div>
            </div>
            
            <div className="mb-6">
              <div className="font-pixel text-xs text-accent mb-1">ONGOING SPECIALIZATIONS</div>
              <ul className="list-disc list-inside font-pixel-secondary text-xs space-y-2 mt-2">
                <li>C# & Advanced Web Development</li>
                <li>AI/ML concepts and best practices</li>
                <li>3D Graphics with Three.js</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="font-pixel text-xs text-highlight mb-2">GITHUB STATS</div>
              <div className="grid grid-cols-2 gap-2 text-center mb-2">
                <div>
                  <div className="font-pixel text-xs text-accent">Stars</div>
                  <div className="font-pixel-secondary text-sm">24</div>
                </div>
                <div>
                  <div className="font-pixel text-xs text-accent">Commits</div>
                  <div className="font-pixel-secondary text-sm">271</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div>
                  <div className="font-pixel text-xs text-accent">PRs</div>
                  <div className="font-pixel-secondary text-sm">1</div>
                </div>
                <div>
                  <div className="font-pixel text-xs text-accent">Issues</div>
                  <div className="font-pixel-secondary text-sm">1</div>
                </div>
              </div>
            </div>
          </ItemCard>
          
          {/* Technical Competencies */}
          <ItemCard className="p-5 transform transition hover:scale-105">
            <div className="flex items-center mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" className="w-12 h-12 mr-4 pixelated">
                <rect x="8" y="4" width="32" height="40" fill="#5d275d" />
                <rect x="12" y="8" width="24" height="32" fill="#1a1c2c" />
                <rect x="14" y="12" width="20" height="2" fill="#ff004d" />
                <rect x="14" y="16" width="20" height="2" fill="#ff004d" />
                <rect x="14" y="20" width="20" height="2" fill="#ff004d" />
                <rect x="14" y="24" width="20" height="2" fill="#ff004d" />
                <rect x="14" y="28" width="20" height="2" fill="#ff004d" />
                <rect x="14" y="32" width="20" height="2" fill="#ff004d" />
              </svg>
              <h2 className="font-pixel text-base text-highlight">COMPETENCY TOME</h2>
            </div>
            <div className="h-px bg-primary mb-4"></div>
            
            <div className="space-y-4">
              <div>
                <div className="font-pixel text-xs text-accent mb-1">Frontend Development</div>
                <div className="font-pixel-secondary text-xs">Proficient in React.js, HTML5, CSS3, and JavaScript ES6+, creating responsive and interactive user interfaces.</div>
              </div>
              
              <div>
                <div className="font-pixel text-xs text-accent mb-1">Backend Development</div>
                <div className="font-pixel-secondary text-xs">Experience with Node.js, Express, and Firebase for building scalable server-side applications.</div>
              </div>
              
              <div>
                <div className="font-pixel text-xs text-accent mb-1">AI Integration</div>
                <div className="font-pixel-secondary text-xs">Skilled in implementing AI services (Google Gemini API) into web applications for enhanced functionality.</div>
              </div>
              
              <div>
                <div className="font-pixel text-xs text-accent mb-1">3D Visualization</div>
                <div className="font-pixel-secondary text-xs">Experience with Three.js for creating interactive 3D graphics and animations on the web.</div>
              </div>
              
              <div>
                <div className="font-pixel text-xs text-accent mb-1">Prompt Engineering</div>
                <div className="font-pixel-secondary text-xs">Expertise with AI models like Claude, GPT, and Gemini for generating high-quality content and responses.</div>
              </div>
              
              <div>
                <div className="font-pixel text-xs text-accent mb-1">Version Control</div>
                <div className="font-pixel-secondary text-xs">Proficient with Git and GitHub for collaboration and code management.</div>
              </div>
            </div>
          </ItemCard>
        </div>
        
        <div className="mt-8 flex justify-center">
          <ItemCard className="p-5 transform transition hover:scale-105 max-w-xl w-full">
            <div className="flex items-center mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48" className="w-12 h-12 mr-4 pixelated">
                <rect x="8" y="8" width="32" height="32" fill="#29adff" />
                <rect x="12" y="12" width="24" height="24" fill="#1a1c2c" />
                <rect x="18" y="16" width="12" height="2" fill="#c2c3c7" />
                <rect x="16" y="20" width="16" height="2" fill="#c2c3c7" />
                <rect x="14" y="24" width="20" height="2" fill="#c2c3c7" />
                <rect x="12" y="28" width="24" height="2" fill="#c2c3c7" />
                <rect x="16" y="32" width="16" height="2" fill="#c2c3c7" />
              </svg>
              <h2 className="font-pixel text-base text-highlight">SPECIAL INTERESTS</h2>
            </div>
            <div className="h-px bg-primary mb-4"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="font-pixel text-xs text-accent mb-1">HOBBIES</div>
                <ul className="list-disc list-inside font-pixel-secondary text-xs space-y-1">
                  <li>Building web applications and tools</li>
                  <li>Exploring new technologies and programming languages</li>
                  <li>Contributing to open-source projects</li>
                  <li>Creating educational content for fellow developers</li>
                </ul>
              </div>
              
              <div>
                <div className="font-pixel text-xs text-accent mb-1">PASSIONS</div>
                <ul className="list-disc list-inside font-pixel-secondary text-xs space-y-1">
                  <li>Clean code and intuitive design</li>
                  <li>Game development and interactive experiences</li>
                  <li>AI/ML integration in practical applications</li>
                  <li>Solving complex problems with elegant solutions</li>
                </ul>
              </div>
            </div>
          </ItemCard>
        </div>
        
        <div className="flex justify-center mt-12">
          <PixelButton onClick={() => setCurrentZone('projects')}>
            ENTER THE FORGE
          </PixelButton>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationZone;
