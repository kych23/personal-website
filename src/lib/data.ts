export const personalInfo = {
  name: "Kyle Chu",
  location: "Williston Park, NY",
  email: "kyleghchu@gmail.com",
  github: "https://github.com/kych23",
  linkedin: "https://www.linkedin.com/in/kych2204/",
  instagram: "https://www.instagram.com/kych2204/",
  facebook: "https://www.facebook.com/kyle.chu.506698/",
  profilePicture: "/profile.png",
  heroDescription:
    "Computer Science student at Cornell University with a passion for AI engineering and software development. I specialize in building scalable web applications and AI-powered solutions that solve real-world problems. With experience in both startup environments and academic research, I bring a unique blend of technical expertise and innovative thinking to every project.",
};

export const workExperience = [
  {
    company: "Spect AI",
    location: "San Francisco, CA (Remote)",
    position: "Software Engineering Intern",
    period: "June 2025 - August 2025",
    achievements: [
      "Developed a node-based AI workflow builder to enable 15+ AEC companies to automate LLM and agent pipelines to reduce workflow execution times with FastAPI, React, LangChain, and PostgreSQL.",
      "Engineered OCR document parsing and structured data extraction pipelines to cut manual document parsing time by 70% using AWS Textract, Pydantic, and PyMuPDF.",
      "Created submittal/due diligence tools to reduced compliance errors by 63% through automated PDF comparison and annotation using Next.js and AWS S3.",
    ],
  },
  {
    company: "Cornell Pi Delta Psi Fraternity, Inc.",
    location: "Ithaca, NY",
    position: "Frontend Developer",
    period: "March 2024 - Present",
    achievements: [
      "Launched a web platform to streamline updates and boost alumni engagement, increasing viewership by 200% and raising $4,000 using React.js and TypeScript.",
      "Optimized site performance and SEO to improve traffic by 85% through Next.js and efficient asset management.",
      "Delivered a production-quality web app with CI/CD on Vercel, enabling reliable content updates and consistent UX.",
    ],
  },
];

export const education = [
  {
    institution: "Cornell University",
    location: "Ithaca, NY",
    major: "Bachelor of Science in Computer Science",
    minor: "Minor in Artificial Intelligence",
    period: "Aug 2023 - Expected May 2027",
    achievements: [
      "Relevant Coursework: Data Structures, Algorithms Analysis, Machine Learning, Artificial Intelligence, Systems Programming, Computer Vision, Computer Networks, Robotics",
      "Pi Delta Psi Fraternity Web Developer",
      "Cornell iGem Member",
      "Cornell University Sustainable Design",
      "Cornell Chinese Student Association",
      "Cornell Korean American Student Association",
    ],
  },
];
export const skills = {
  programmingLanguages: [
    "Python",
    "JavaScript/TypeScript",
    "Java",
    "C",
    "SQL",
    "OCaml",
    "HTML/CSS",
  ],
  frameworksAndTools: [
    "React.js",
    "Next.js",
    "Node.js/Express.js",
    "Flask",
    "FastAPI",
    "Tailwind CSS",
    "Docker",
    "AWS S3",
    "GCP",
    "Vercel",
  ],
  databasesAndStorage: [
    "PostgreSQL",
    "MongoDB",
    "Redis",
  ],
  librariesAndAPIs: [
    "PyTorch",
    "Scikit-learn",
    "LangChain",
    "NumPy",
    "Pydantic",
    "React Redux",
    "ReactFlow",
    "PyMuPDF/PyPDF",
  ],
};

export const projects = [
  {
    title: "Syllaparse",
    github: "https://github.com/kych23/syllaparse",
    description: [
      "Built and deployed a full-stack web platform used by over 100 students that automatically extracts lecture schedules and exam dates from PDFs by leveraging OpenAI GPT-5 and PyMuPDF for text extraction.",
      "Designed and implemented a PostgreSQL database with Redis caching and Google Cloud Storage, enabling efficient data management and faster query performance.",
      "Reduced manual calendar event entry times by 92% through Google Authentication and Calendar API integration, streamlining academic planning for students.",
    ],
  },
  {
    title: "Sentiment Text Analysis",
    github: "https://github.com/kych23/sentiment-analysis",
    description: [
      "Created a multi-class text classifier to predict 28 emotions, processing 15,000 samples to build a robust dataset using Python and Scikit-learn.",
      "Engineered feature extraction pipeline with lemmatization, stopword removal, and TF-IDF vectorization to improve model generalization.",
      "Implemented a stacked classifier combining ridge regression and neural networks to boost prediction accuracy by 74%.",
    ],
  },
  {
    title: "Latte Link",
    github: "https://github.com/kych23/latte-link",
    description: [
      "Architected a scalable backend database and REST APIs for user data management using SQLite and Python.",
      "Integrated SendGrid email API to enable automated user communications and notifications.",
      "Containerized and deployed on Google Cloud Platform with Docker, delivering a production-ready backend.",
    ],
  },
];

