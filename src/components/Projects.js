import React, { useState } from "react";
import "../styles.css";

const Projects = ({ id }) => {
  const [activeProject, setActiveProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "3D Car World",
      icon: "🎮",
      tech: "Three.js, React, JavaScript",
      description: "An interactive 3D environment where users can customize and drive various vehicles through a realistic world.",
      features: ["Realistic physics", "Multiple car models", "Day/night cycle", "Custom terrain generation"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/example/3d-car-world"
    },
    {
      id: 2,
      title: "AI Password Generator",
      icon: "🤖",
      tech: "Python, TensorFlow, Flask",
      description: "A secure password generator that uses machine learning to create strong, memorable passwords based on user preferences.",
      features: ["ML-based generation", "Strength analyzer", "Password vault", "Browser extension"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/example/ai-password-generator"
    },
    {
      id: 3,
      title: "Study Timetable Website",
      icon: "📚",
      tech: "React, Node.js, MongoDB",
      description: "A comprehensive study planning tool that helps students organize their study sessions with smart scheduling and reminders.",
      features: ["Smart scheduling", "Progress tracking", "Pomodoro timer", "Collaborative study groups"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/example/study-timetable"
    },
    {
      id: 4,
      title: "YouTube Video Downloader",
      icon: "📺",
      tech: "Python, PyQt, youtube-dl",
      description: "A desktop application that allows users to download videos and audio from YouTube with various quality options.",
      features: ["Multi-format support", "Batch downloading", "Playlist support", "Automatic metadata"],
      demoLink: "https://example.com/demo",
      codeLink: "https://github.com/example/yt-downloader"
    }
  ];

  const toggleProjectDetails = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id={id} className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A selection of my recent work</p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div 
              key={project.id} 
              className={`project-card ${activeProject === project.id ? "active" : ""}`}
              onClick={() => toggleProjectDetails(project.id)}
            >
              <div className="project-header">
                <span className="project-icon">{project.icon}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>
              
              <div className="project-tech">{project.tech}</div>
              
              <div className="project-details">
                <p className="project-description">{project.description}</p>
                
                <h4>Key Features:</h4>
                <ul className="project-features">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <div className="project-links">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={(e) => e.stopPropagation()}>
                    Live Demo
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" onClick={(e) => e.stopPropagation()}>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;