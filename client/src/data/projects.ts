export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  period: string;
  githubUrl: string;
  demoUrl: string | null;
}

export const projects: Project[] = [
  {
    id: "maestramind",
    title: "MaestraMind: AI-Powered Learning App",
    shortTitle: "MAESTRAMIND",
    description: "A solo-developer-friendly adaptive learning web application that analyzes user-uploaded notes to generate personalized curricula.",
    image: "/assets/projects/maestramind.svg",
    technologies: ["React.js", "Firebase", "Google Gemini API", "JavaScript"],
    features: [
      "Upload Multiple Notes (text input or file)",
      "Gemini AI-Powered Note Analysis",
      "Auto-Generated Courses and Topics",
      "Personalized Adaptive Learning Paths",
      "Real-Time Progress Tracking",
      "AI-Generated Summaries, Flashcards, and Quizzes",
      "Smart Recommendations based on user behavior",
      "Firebase Google Authentication and Firestore Integration"
    ],
    period: "November 2024 - Present",
    githubUrl: "https://github.com/ChristopherJoshy/MaestraMind",
    demoUrl: "https://christopherjoshy.github.io/KKNotesV2/"
  },
  {
    id: "kknotes",
    title: "KKNotes: Educational Resource Platform",
    shortTitle: "KKNOTESV2",
    description: "A comprehensive study resource platform for KTU Computer Science Engineering students with organized notes, videos, and downloadable materials.",
    image: "/assets/projects/kknotes.svg",
    technologies: ["JavaScript", "React", "HTML/CSS", "Firebase"],
    features: [
      "Created a comprehensive study resource platform for KTU CSE students",
      "Designed and implemented a responsive UI with intuitive navigation",
      "Developed a system for organizing and presenting high-quality notes and tutorials",
      "Implemented content categorization and search functionality",
      "Optimized the platform for multiple devices, increasing mobile engagement by 35%"
    ],
    period: "June 2023 - October 2023",
    githubUrl: "https://github.com/ChristopherJoshy/KKNotesV2",
    demoUrl: "https://christopherjoshy.github.io/KKNotesV2/"
  },
  {
    id: "sonarsight",
    title: "SonarSight: AI-Powered Text Analysis Extension",
    shortTitle: "SONARSIGHT",
    description: "A Chrome extension that provides AI-powered insights and analysis for any text you select on the web using Google's Gemini API and Perplexity's Sonar API.",
    image: "/assets/projects/sonarsight.svg",
    technologies: ["JavaScript", "Chrome Extensions API", "Google Gemini API", "Perplexity API"],
    features: [
      "AI-powered text analysis with multiple providers (Google Gemini & Perplexity)",
      "Intelligent follow-up question suggestions based on content analysis",
      "Citations with source links for fact-checking",
      "Notebook functionality to save important insights",
      "History tracking of all your queries",
      "Customizable settings with your own API keys",
      "Light and dark theme support",
      "Keyboard shortcuts for quick access"
    ],
    period: "January 2025 - March 2025",
    githubUrl: "https://github.com/ChristopherJoshy/SonarSight",
    demoUrl: null
  },
  {
    id: "quiz-website",
    title: "Simple Quiz Website",
    shortTitle: "QUIZ APP",
    description: "Interactive quiz application with dynamic question loading, timer functionality, and instant score feedback.",
    image: "/assets/projects/quiz-website.svg",
    technologies: ["JavaScript", "HTML", "CSS"],
    features: [
      "Dynamic question loading from JSON",
      "Timer functionality for each question",
      "Score tracking and instant feedback",
      "Responsive design for all devices",
      "Progress indicator for quiz completion"
    ],
    period: "May 2023 - June 2023",
    githubUrl: "https://github.com/ChristopherJoshy/Simple-Quiz-Website",
    demoUrl: "https://github.com/ChristopherJoshy/Simple-Quiz-Website"
  },
  {
    id: "hexinox",
    title: "Hexinox-MakeIT",
    shortTitle: "HEXINOX",
    description: "Mobile application developed for the Hexinox MakeIT initiative with intuitive UI and cross-platform compatibility.",
    image: "/assets/projects/hexinox.svg",
    technologies: ["Dart", "Flutter"],
    features: [
      "Cross-platform mobile application",
      "Intuitive user interface",
      "Real-time data synchronization",
      "Offline capability",
      "Responsive design"
    ],
    period: "August 2023 - September 2023",
    githubUrl: "https://github.com/ChristopherJoshy/Hexinox-MakeIT",
    demoUrl: null
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    shortTitle: "EXPENSE",
    description: "Command-line expense management tool with file-based storage, category tracking, and reporting features.",
    image: "/assets/projects/expense-tracker.svg",
    technologies: ["C"],
    features: [
      "File-based data storage",
      "Category-based expense tracking",
      "Monthly and yearly expense reports",
      "Budget setting and alerts",
      "Simple command-line interface"
    ],
    period: "February 2023 - March 2023",
    githubUrl: "https://github.com/ChristopherJoshy/ExpenseTracker",
    demoUrl: null
  }
];
