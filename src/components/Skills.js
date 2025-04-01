import React, { useState } from "react";
import "../styles.css";

const Skills = ({ id }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const skillsData = {
    programming: [
      { name: "Java", level: 90 },
      { name: "C#", level: 85 },
      { name: "Python", level: 80 },
    ],
    web: [
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
    ],
    tools: [
      { name: "Unreal Engine", level: 75 },
      { name: "Git", level: 90 },
      { name: "VS Code", level: 95 },
    ]
  };
  
  const categories = [
    { id: "all", label: "All Skills" },
    { id: "programming", label: "Programming" },
    { id: "web", label: "Web Development" },
    { id: "tools", label: "Tools & Technologies" }
  ];
  
  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return [
        ...skillsData.programming,
        ...skillsData.web,
        ...skillsData.tools
      ];
    }
    return skillsData[activeCategory] || [];
  };

  return (
    <section id={id} className="skills section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        
        <div className="skill-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="skills-grid">
          {getFilteredSkills().map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar-container">
                <div 
                  className="skill-bar" 
                  style={{ width: `${skill.level}%` }}
                  data-level={`${skill.level}%`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;