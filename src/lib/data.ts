export const personalInfo = {
  name: "Kyle Chu",
  location: "Williston Park, NY",
  email: "kyleghchu@gmail.com",
  phone: "(917) 656-9383",
  github: "https://github.com/kych23",
  linkedin: "https://www.linkedin.com/in/kych2204/",
  instagram: "https://www.instagram.com/kych2204/",
  facebook: "https://www.facebook.com/kyle.chu.506698/",
  profilePicture: "/profile.png",
  resume: "/Kyle_Chu_Resume.pdf",
  heroDescription:
    "Hi! I'm Kyle, a Computer Science student at Cornell University who loves tackling challenging problems through innovative solutions. I'm passionate about building software that makes a real difference in people's lives, whether it's streamlining workflows or solving everyday problems. I enjoy the challenge of solving complex problems and learning new technologies along the way. With hands-on experience in full-stack development and AI engineering, I'm excited to bring my curiosity, creativity, and collaborative spirit to meaningful projects where I can continue growing as a software engineer.",
};

export const workExperience = [
  // {
  //   company: "Cornell University Sustainable Design",
  //   location: "Ithaca, NY",
  //   position: "Web Advisor for Marketing and Communications",
  //   period: "October 2025 - Present",
  //   projectLink: "https://www.cusd.cornell.edu/index.html",
  //   logo: "/logos/cusd_logo.jpeg",
  //   achievements: [
  //     "Designed and implemented a responsive website for Cornell University Sustainable Design, improving user engagement and information accessibility with React.js and TypeScript",
  //     "Optimized site performance and SEO to improve traffic by 85% through Next.js and efficient asset management",
  //     "Delivered a production-quality web app with CI/CD on Vercel, enabling reliable content updates and consistent UX",
  //   ],
  // },
  // {
  //   company: "Handshake AI",
  //   location: "San Francisco, CA (Remote)",
  //   position: "Handshake AI Fellowship",
  //   period: "October 2025 - Present",
  //   projectLink: "https://joinhandshake.com/ai",
  //   logo: "/logos/handshakeai_logo.png",
  //   achievements: [
  //     "Conducted comprehensive AI model evaluation and data labeling using a 4-axis framework (Instruction Following, Image Consistency, Quality, AI-ness/Naturalness) to optimize training datasets for computer vision and generative AI models",
  //     "Performed quantitative assessment of AI-generated image outputs using 7-point Likert scale scoring system, generating detailed annotations and feedback to improve model performance metrics and reduce hallucination rates",
  //     "Analyzed 200+ AI-generated images using machine learning evaluation methodologies, identifying algorithmic patterns and providing actionable insights for neural network optimization and model fine-tuning",
  //     "Established standardized data annotation protocols and evaluation criteria for AI research teams, ensuring consistent model assessment across multimodal AI systems and diverse computer vision applications",
  //   ],
  // },
  {
    company: "Cornell Ann S. Bowers College of Computing and Information Science",
    location: "Ithaca, NY",
    position: "Teaching Assistant",
    period: "January 2026 - Present",
    projectLink: "https://www.cs.cornell.edu/",
    logo: "/logos/bowerscis_logo.jpeg",
    achievements: [
      "Served as Teaching Assistant for CS 4670: Introduction to Computer Vision, leading discussion sections and providing guidance to students",
      "Assisted with the development of assignments, grading guides, and course materials to enhance curriculum quality and student comprehension",
      "Held regular office hours to provide one-on-one support, clarify course concepts, and help students with computer vision projects",
    ],
  },
  {
    company: "Nonlinear",
    location: "San Francisco, CA (Remote)",
    position: "Software Engineering Intern",
    period: "June 2025 - August 2025",
    projectLink: "https://www.nonlinear.build/",
    logo: "/logos/nonlinear_logo.jpeg",
    achievements: [
      "Developed a node-based AI workflow builder to enable 15+ AEC companies to automate LLM and agent pipelines to reduce workflow execution times with FastAPI, React, LangChain, and PostgreSQL",
      "Engineered OCR document parsing and structured data extraction pipelines to cut manual document parsing time by 70% using AWS Textract, Pydantic, and PyMuPDF",
      "Created submittal/due diligence tools to reduced compliance errors by 63% through automated PDF comparison and annotation using Next.js and AWS S3",
    ],
  },
  {
    company: "Cornell Pi Delta Psi Fraternity, Inc.",
    location: "Ithaca, NY",
    position: "Frontend Developer",
    period: "March 2024 - Present",
    projectLink: "https://www.cornellpdp.com/",
    logo: "/logos/pdp_logo.png",
    achievements: [
      "Launched a web platform to streamline updates and boost alumni engagement, increasing viewership by 200% and raising $4,000 using React.js and TypeScript",
      "Optimized site performance and SEO to improve traffic by 85% through Next.js and efficient asset management",
      "Delivered a production-quality web app with CI/CD on Vercel, enabling reliable content updates and consistent UX",
    ],
  },
  {
    company: "Cornell iGem",
    location: "Ithaca, NY",
    position: "Frontend Developer",
    period: "October 2023 - May 2025",
    projectLink: "https://2024.igem.wiki/cornell/",
    logo: "/logos/igem_logo.jpeg",
    achievements: [
      "Designed and implemented the Oncurex website for Cornell iGEM team using Figma for UI/UX design, HTML, CSS, and JavaScript, creating responsive web interfaces",
      "Developed interactive educational gaming application with custom graphics and animations using JavaScript and p5.js library, implementing game mechanics and user interaction systems for STEM education",
      "Achieved gold medal and \"Best Presentation\" nomination at iGEM Jamboree 2024, representing Cornell University in international synthetic biology competition with 75,000+ participants and 460 teams worldwide",
    ],
  }
];

export const education = [
  {
    institution: "Cornell University",
    location: "Ithaca, NY",
    major: "Bachelor of Science in Computer Science",
    minor: "Minor in Artificial Intelligence",
    period: "Aug 2023 - Expected May 2027",
    logo: "/logos/cornell_logo.svg",
    activities: [
      "Pi Delta Psi Fraternity",
      "Cornell iGem",
      "Cornell University Sustainable Design",
      "Cornell Chinese Student Association",
      "Cornell Korean American Student Association",
    ],
  },
];

export const coursework = [
  {
    short_name: "Data Structures",
    course: {
      number: "CS 2110",
      title: "Object-Oriented Programming and Data Structures",
      description: "Intermediate programming in a high-level language and introduction to computer science. Topics include object-oriented programming (classes, objects, subclasses, types), graphical user interfaces, algorithm analysis (asymptotic complexity, big \"O\" notation), recursion, testing, program correctness (loop invariants), searching/sorting, data structures (lists, trees, stacks, queues, heaps, search trees, hash tables, graphs), graph algorithms. Java is the principal programming language."
    }
  },
  {
    short_name: "Algorithms Analysis",
    course: {
      number: "CS 4820",
      title: "Introduction to Analysis of Algorithms",
      description: "Develops techniques used in the design and analysis of algorithms, with an emphasis on problems arising in computing applications. Example applications are drawn from systems and networks, artificial intelligence, computer vision, data mining, and computational biology. This course covers four major algorithm design techniques (greedy algorithms, divide-and-conquer, dynamic programming, and network flow), undecidability and NP-completeness, and algorithmic techniques for intractable problems (including identification of structured special cases , approximation algorithms, local search heuristics, and online algorithms)."
    }
  },
  {
    short_name: "Machine Learning",
    course: {
      number: "CS 3780",
      title: "Introduction to Machine Learning",
      description: "The course provides an introduction to machine learning, focusing on supervised learning and its theoretical foundations. Topics include regularized linear models, boosting, kernels, deep networks, generative models, online learning, and ethical questions arising in ML applications."
    }
  },
  {
    short_name: "Artificial Intelligence",
    course: {
      number: "CS 3700",
      title: "Foundations of AI Reasoning and Decision-Making",
      description: "Introduction to major topics in artificial intelligence, including heuristic search, game-playing, knowledge representation and reasoning, planning, probabilistic inference, sequential decision-making and reinforcement learning."
    }
  },
  {
    short_name: "Operating Systems",
    course: {
      number: "CS 4410",
      title: "Operating Systems",
      description: "Introduction to the design of systems programs, with emphasis on multiprogrammed operating systems. Topics include concurrency, synchronization, deadlocks, memory management, protection, input-output methods, networking, file systems and security. The impact of network and distributed computing environments on operating systems is also discussed."
    }
  },
  {
    short_name: "Systems Programming",
    course: {
      number: "CS 3410",
      title: "Computer System Organization and Programming",
      description: "Introduction to computer organization, systems programming and the hardware/ software interface. Topics include instruction sets, computer arithmetic, datapath design, data formats, addressing modes, memory hierarchies including caches and virtual memory, I/O devices, bus-based I/O systems, and multicore architectures. Students learn assembly language programming and design a pipelined RISC processor."
    }
  },
  {
    short_name: "Computer Vision",
    course: {
      number: "CS 4670",
      title: "Introduction to Computer Vision",
      description: "An in-depth introduction to computer vision. The goal of computer vision is to compute properties of our world-the 3D shape of an environment, the motion of objects, the names of people or things-through analysis of digital images or videos.  The course covers a range of topics, including 3D reconstruction, image segmentation, object recognition, and vision algorithms fro the Internet, as well as key algorithmic, optimization, and machine learning techniques, such as graph cuts, non-linear least squares, and deep learning.  This course emphasizes hands-on experience with computer vision, and several large programming projects."
    }
  },
  {
    short_name: "Data Science",
    course: {
      number: "ECE 2720",
      title: "Data Science for Engineers",
      description: "An introduction to data science for engineers. The data science workflow: acquisition and cleansing, exploration and modeling, prediction and decision making, visualization and presentation. Tools for data science including numerical optimization, the Discrete Fourier Transform, Principal Component Analysis, and probability with a focus on statistical inference and correlation methods. Techniques for different steps in the workflow including outlier detection, filtering, regression, classification, and techniques for avoiding overfitting. Methods for combining domain-agnostic data analysis tools with the types of domain-specific knowledge that are common in engineering. Ethical considerations. Optional topics include classification via neural networks, outlier detection, and Markov chains. Programming projects in Python."
    }
  },
  {
    short_name: "Functional Programming",
    course: {
      number: "CS 3110",
      title: "Data Structures and Functional Programming",
      description: "Advanced programming course that emphasizes functional programming techniques and data structures. Programming topics include recursive and higher-order procedures, models of programming language evaluation and compilation, type systems, and polymorphism. Data structures and algorithms covered include graph algorithms, balanced trees, memory heaps, and garbage collection. Also covers techniques for analyzing program performance and correctness."
    }
  },
  {
    short_name: "Computer Networks",
    course: {
      number: "CS 4450",
      title: "Introduction to Computer Networks",
      description: "This course introduces the basic architectural and design principles of computer networking including the design of communication protocols, congestion control, routing and switching, Internet, data center networks and wireless networks."
    }
  },
  {
    short_name: "Discrete Structures",
    course: {
      number: "CS 2800",
      title: "Discrete Structures",
      description: "Covers the mathematics that underlies most of computer science. Topics include mathematical induction; logical proof; propositional and predicate calculus; combinatorics and discrete mathematics; some basic elements of basic probability theory; basic number theory; sets, functions, and relations; graphs; and finite-state machines. These topics are discussed in the context of applications to many areas of computer science, such as the RSA cryptosystem and web searching."
    }
  },
  {
    short_name: "Robotics",
    course: {
      number: "CS 4750",
      title: "Foundations of Robotics",
      description: "Robotics is interdisciplinary and draws inspiration from many different fields towards solving a variety of tasks in real-world environments using physical systems. This course is a challenging introduction to basic computational concepts used broadly in robotics. By the end of this course, students should have a fundamental understanding of how the different sub-fields of robotics such as kinematics, state-estimation, motion planning, and controls come together to develop intelligent behaviors in physical robotic systems. The mathematical basis of each area will be emphasized, and concepts will be motivated using common robotics applications. Students will be evaluated using a mixture of theoretical and programming exercises throughout the semester."
    }
  },
  {
    short_name: "Text Mining",
    course: {
      number: "INFO 3350",
      title: "Text Mining History and Literature",
      description: "The class will introduce methods for computer-assisted analysis of historical and literary text collections. It will cover corpus curation, representing text as data, building statistical models from text, and interpreting quantitative results. The class will also reflect on how computational methods fit with existing practices in the humanities, and how we can use models as complements to our own interpretations. Following the course, students will be able to assist faculty in quantitative and computational humanities scholarship."
    }
  },
  {
    short_name: "Deep Learning",
    course: {
      number: "CS 4782",
      title: "Introduction to Deep Learning",
      description: "This class is an introductory course to deep learning. It covers the fundamental principles behind training and inference of deep networks, the specific architecture design choices applicable for different data modalities, discriminative and generative settings, and the ethical and societal implications of such models."
    }
  }
];
export const skills = {
  coreLanguages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "SQL",
    "HTML/CSS",
    "C",
    "OCaml",
  ],
  frontendDevelopment: [
    "React.js",
    "Next.js",
    "Astro",
    "Tailwind CSS",
    "React Redux",
    "ReactFlow",
  ],
  backendDevelopment: [
    "Node.js/Express.js",
    "FastAPI",
    "Flask",
    "Pydantic",
  ],
  cloudAndDevOps: [
    "AWS",
    "GCP",
    "Docker",
    "Vercel",
    "Render",
    "Git"
  ],
  databasesAndStorage: [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS S3",
    "Google Cloud Storage",
    "SQLite",
    "Supabase"
  ],
  aiAndDataScience: [
    "NumPy",
    "PyTorch",
    "Scikit-learn",
    "LangChain",
  ],
};

export const projects = [
  {
    title: "Video Game Reviews Analysis",
    github: "https://github.com/kych23/r6-reviews-sentiment-analysis",
    description: "Computational text analysis project investigating linguistic differences between negative game reviews that recommend versus don't recommend, using NLP and statistical modeling",
    technologies: ["Python", "Pandas", "NumPy", "NLTK", "spaCy", "Scikit-learn", "Jupyter", "Matplotlib", "Seaborn", "Kaggle"],
    achievements: [
      "Processed 371K Steam reviews using VADER sentiment analysis, filtered to 18,898 balanced negative reviews for classification",
      "Engineered lexicon-based features and applied LDA topic modeling with 7 topics on 5,000-word vocabulary to extract linguistic patterns",
      "Identified significant predictors and found that monetization mentions 19% less frequent in recommended reviews (OR: 0.82), gameplay topics 8.4x more likely"
    ],
  },
  {
    title: "FantasyForecast",
    github: "https://github.com/kych23/ff_predictors",
    description: "Full-stack app for weekly NFL fantasy point projections",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Vercel", "FastAPI", "PostgreSQL", "Supabase", "Jupyter"],
    achievements: [
      "Built an end to end ML pipeline with a PostgreSQL feature store and per-position XGBoost models validated with expanding timeseries CV and hyperparameter search",
      "Processed 12+ years of NFL data with automated ETL, feature selection and engineering in Python with Pandas and NumPy",
      "Outperformed major public fantasy projection systems by achieving up to 45% within ±3 points accuracy and reducing average prediction error by 25% across 12 years of NFL data."
    ]
  },
  {
    title: "Syllaparse",
    github: "https://github.com/khoanguyentran/syllaparse",
    description: "A full-stack web platform that automatically extracts lecture schedules and exam dates from PDF syllabi, streamlining academic planning for students.",
    technologies: ["React.js", "Next.js", "PostgreSQL", "Redis", "OpenAI API", "PyMuPDF", "Google Cloud Storage", "Google Calendar/OAuth API"],
    achievements: [
      "Used by over 100 students across multiple universities",
      "Reduced manual calendar entry time by 92%",
      "Implemented efficient caching with Redis for faster query performance"
    ],
  },
  {
    title: "Sentiment Text Analysis",
    github: "https://github.com/kych23/sentiment-text-analysis",
    description: "A multi-class text classifier that predicts 28 different emotions from text input, built using advanced machine learning techniques.",
    technologies: ["Python", "Scikit-learn", "NumPy", "Pandas"],
    achievements: [
      "Processed 15,000+ text samples to build robust dataset",
      "Boosted prediction accuracy by 74% using stacked classifiers",
      "Engineered feature extraction pipeline with lemmatization and stopword removal"
    ],
  },
  {
    title: "CUDorms",
    github: "https://github.com/aliu04/CUDorms",
    description: "A full-stack web application for Cornell students to learn more about the dorms and its amenities on campus with a blog section",
    technologies: ["React.js", "MongoDB", "Node.js", "Express.js"],
    achievements: [
      "Built full-stack MERN application with real-time data updates",
      "Implemented state management with React Redux for responsive UI",
      "Developed JWT authentication for secure user data"
    ],
  },
  {
    title: "Latte Link",
    github: "https://github.com/kych23/FA23-Cornell-AppDev-Hack-Challenge",
    description: "A mobile app that allows Cornell students to schedule coffee chats with all Cornell clubs that supports calendar events, messaging, and email notifications.",
    technologies: ["Python", "SQLite", "SendGrid API", "Docker", "Google Cloud Platform", "Flask"],
    achievements: [
      "Architected scalable backend with SQLite and REST APIs",
      "Integrated SendGrid API for automated notifications",
      "Containerized and deployed production backend with Docker and Google Cloud Platform"
    ],
  },
];

