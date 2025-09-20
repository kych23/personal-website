export const personalInfo = {
  name: "Kyle Chu",
  location: "Williston Park, NY",
  email: "kyleghchu@gmail.com",
  github: "https://github.com/kych23",
  linkedin: "https://www.linkedin.com/in/kych2204/",
  instagram: "https://www.instagram.com/kych2204/",
  facebook: "https://www.facebook.com/kyle.chu.506698/",
  profilePicture: "/profile.png",
  resume: "/Kyle_Chu_Resume.pdf",
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
    achievements: [
      "Designed and implemented the competition website using Figma, HTML, and CSS",
      "Integrated SendGrid email API to enable automated user communications and notifications.",
      "Containerized and deployed on Google Cloud Platform with Docker, delivering a production-ready backend.",
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
    activities: [
      "Pi Delta Psi Fraternity",
      "Cornell iGem",
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
  }
];
export const skills = {
  programmingLanguages: [
    "Python",
    "Java",
    "JavaScript/TypeScript",
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
    "AWS",
    "GCP",
    "Astro",
    "Render",
    "Vercel",
  ],
  databasesAndStorage: [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS S3",
    "Google Cloud Storage",
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

