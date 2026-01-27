// Portfolio Data - Jeremy Andrés Guzmán Vargas

export const personalInfo = {
  name: "Jeremy Andrés Guzmán Vargas",
  role: "Full Stack Developer",
  tagline: "Building scalable, data-driven web applications with passion for clean code and UX",
  location: "Belén, Heredia, Costa Rica",
  email: "Jeremyu4231@gmail.com",
  phone: "+506 6202-5052",
  linkedin: "linkedin.com/in/jeremygzm",
  bio: `Full Stack Developer with hands-on experience building and supporting scalable, data-driven web applications in Agile environments. Skilled in modern frontend frameworks like React and Angular, RESTful API development, relational databases, and containerized deployments. Experienced collaborating with cross-functional teams and stakeholders to translate business requirements into reliable technical solutions.`,
  story: [
    "Desde 2022, he estado inmerso en el mundo del desarrollo web full stack, trabajando en proyectos que desafían mis habilidades técnicas y creativas.",
    "Mi pasión por la tecnología comenzó con la curiosidad de entender cómo funcionan las aplicaciones que usamos diariamente, y esa curiosidad me llevó a estudiar Informática y Tecnología Multimedia en la Universidad de Costa Rica.",
    "He tenido la oportunidad de trabajar con equipos multifuncionales en entornos ágiles, donde la colaboración y la comunicación son clave para el éxito.",
    "Mi enfoque siempre ha sido crear soluciones que no solo funcionen bien técnicamente, sino que también ofrezcan una experiencia de usuario excepcional."
  ]
};

export const skills = {
  technical: {
    title: "Technical Skills",
    items: [
      {
        category: "Frontend",
        skills: ["React", "Angular", "React Native", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
      },
      {
        category: "Backend",
        skills: ["Django", "Django REST Framework", "Laravel", ".NET", "Python", "PHP", "C#"]
      },
      {
        category: "Database",
        skills: ["PostgreSQL", "MySQL", "SQL", "Relational Modeling", "Query Optimization"]
      },
      {
        category: "DevOps & Cloud",
        skills: ["Docker", "AWS", "Azure", "Git", "CI/CD (Jenkins)", "Linux", "Bash"]
      },
      {
        category: "Architecture & APIs",
        skills: ["RESTful APIs", "Client-Server Architecture", "JWT Authentication", "Microservices"]
      },
      {
        category: "Tools",
        skills: ["Postman", "Axios", "Stripe API", "Debugging", "Performance Troubleshooting"]
      }
    ]
  },
  soft: {
    title: "Soft Skills",
    items: [
      {
        name: "Comunicación Efectiva",
        description: "Comunicación clara y efectiva en equipos multifuncionales y distribuidos"
      },
      {
        name: "Resolución de Problemas",
        description: "Enfoque analítico y detallado en el desarrollo y troubleshooting"
      },
      {
        name: "Proactividad",
        description: "Toma de responsabilidad proactiva e iniciativa en la entrega de proyectos"
      },
      {
        name: "Colaboración Ágil",
        description: "Experiencia en colaboración ágil y gestión de sprints"
      },
      {
        name: "Adaptabilidad",
        description: "Capacidad de adaptación a tecnologías emergentes y entornos dinámicos"
      }
    ]
  }
};

export const experience = [
  {
    id: 1,
    role: "Full Stack Developer & Frontend Lead",
    company: "University of Costa Rica - R&D Team",
    location: "Costa Rica",
    period: "Jul 2024 - Present",
    type: "Full-time",
    description: "Led frontend development and collaborated on backend systems for research projects.",
    responsibilities: [
      "Acted as frontend lead, assigning and tracking tickets, reviewing pull requests",
      "Designed and developed reusable React components",
      "Implemented JWT authentication with Axios interceptors",
      "Developed RESTful APIs using Laravel",
      "Built and maintained Docker images for development and production",
      "Refactored Jenkins CI/CD pipelines"
    ],
    technologies: ["React", "Laravel", "Docker", "Jenkins", "PostgreSQL", "JWT"]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "AyCarta",
    location: "Remote, Mexico & Costa Rica",
    period: "Nov 2024 - Mar 2025",
    type: "Contract",
    description: "Led payment system migration and resolved critical production issues.",
    responsibilities: [
      "Led Stripe payment system migration using Django and dj-stripe",
      "Implemented and maintained Stripe webhooks",
      "Fixed critical user registration and authentication bugs",
      "Diagnosed production deployment failures via SSH",
      "Refactored Dockerfiles for frontend and backend services",
      "Improved Bitbucket CI/CD pipelines"
    ],
    technologies: ["Django", "Stripe API", "Docker", "Bitbucket CI/CD", "React", "PostgreSQL"]
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "Marlin",
    location: "Remote, Costa Rica",
    period: "Jul 2024 - Nov 2024",
    type: "Contract",
    description: "Built mobile and web components with focus on user experience.",
    responsibilities: [
      "Built mobile and web components using React Native and React",
      "Developed Django REST APIs and database schemas",
      "Integrated Node.js microservices for testing automation",
      "Managed cloud deployments and CI/CD pipelines",
      "Collaborated with designers for consistent UX"
    ],
    technologies: ["React Native", "React", "Django", "Node.js", "Tailwind CSS", "AWS"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Sistema de Gestión R&D - UCR",
    category: "Web Application",
    thumbnail: "/projects/ucr-system.jpg",
    year: "2024",
    description: "Sistema de gestión para proyectos de investigación y desarrollo en la Universidad de Costa Rica.",
    problem: "La universidad necesitaba una plataforma centralizada para gestionar proyectos de I+D, con múltiples módulos y roles de usuario complejos.",
    solution: "Desarrollo de una aplicación web modular con React y Laravel, implementando autenticación JWT, gestión de permisos granular y arquitectura escalable.",
    results: [
      "Reducción del 40% en tiempo de gestión de proyectos",
      "Sistema modular reutilizable para futuros proyectos",
      "Mejora en la colaboración entre equipos de investigación"
    ],
    role: "Frontend Lead & Full Stack Developer",
    methodology: "Agile (Scrum), TDD, Code Review",
    technologies: {
      frontend: ["React", "Axios", "React Router", "CSS Modules"],
      backend: ["Laravel", "PHP", "PostgreSQL"],
      devops: ["Docker", "Jenkins", "Git"]
    },
    responsibilities: [
      "Liderazgo del equipo frontend",
      "Diseño de arquitectura de componentes reutilizables",
      "Implementación de autenticación JWT",
      "Desarrollo de APIs RESTful",
      "Configuración de pipelines CI/CD"
    ],
    challenges: [
      "Gestión de estados complejos en aplicación multi-módulo",
      "Implementación de refresh token automático",
      "Optimización de rendimiento con grandes volúmenes de datos"
    ],
    link: null,
    github: null
  },
  {
    id: 2,
    title: "Migración de Sistema de Pagos - AyCarta",
    category: "Payment Integration",
    thumbnail: "/projects/aycarta-payments.jpg",
    year: "2024-2025",
    description: "Migración completa del sistema de pagos a Stripe con sincronización de webhooks.",
    problem: "El sistema de pagos existente era inestable y no cumplía con los estándares de seguridad requeridos.",
    solution: "Implementación de Stripe usando dj-stripe en Django, con webhooks para sincronización en tiempo real y manejo robusto de errores.",
    results: [
      "100% de transacciones exitosas después de la migración",
      "Reducción del 90% en errores de pago",
      "Mejora en la experiencia de usuario durante checkout"
    ],
    role: "Full Stack Developer",
    methodology: "Agile, Test-Driven Development",
    technologies: {
      frontend: ["React", "TypeScript"],
      backend: ["Django", "dj-stripe", "PostgreSQL", "Stripe API"],
      devops: ["Docker", "Bitbucket Pipelines"]
    },
    responsibilities: [
      "Diseño e implementación de integración con Stripe",
      "Desarrollo de sistema de webhooks",
      "Testing exhaustivo de flujos de pago",
      "Resolución de bugs críticos en producción",
      "Documentación técnica del proceso"
    ],
    challenges: [
      "Manejo de edge cases en transacciones",
      "Sincronización de estados entre Stripe y base de datos",
      "Testing de webhooks en ambiente de desarrollo"
    ],
    link: null,
    github: null
  },
  {
    id: 3,
    title: "Aplicación Mobile/Web - Marlin",
    category: "Mobile & Web",
    thumbnail: "/projects/marlin-app.jpg",
    year: "2024",
    description: "Aplicación mobile y web para gestión de productos con arquitectura de microservicios.",
    problem: "Necesidad de una aplicación cross-platform con sincronización en tiempo real entre mobile y web.",
    solution: "Desarrollo con React Native para mobile y React para web, compartiendo lógica de negocio y conectados a microservicios Node.js.",
    results: [
      "Lanzamiento exitoso en iOS y Android",
      "90% de código compartido entre plataformas",
      "Tiempo de respuesta < 300ms en operaciones CRUD"
    ],
    role: "Full Stack Developer",
    methodology: "Agile, Component-Driven Development",
    technologies: {
      frontend: ["React Native", "React", "Tailwind CSS"],
      backend: ["Django REST Framework", "Node.js", "PostgreSQL"],
      devops: ["AWS", "Docker", "CI/CD"]
    },
    responsibilities: [
      "Desarrollo de componentes mobile y web",
      "Implementación de APIs RESTful",
      "Integración de microservicios de testing",
      "Optimización de rendimiento",
      "Deployment en AWS"
    ],
    challenges: [
      "Mantener consistencia UI/UX entre plataformas",
      "Optimización de bundle size para mobile",
      "Gestión de estados offline-first"
    ],
    link: null,
    github: null
  }
];

export const certifications = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    year: "2025"
  },
  {
    title: "Business English - C1 Certified",
    issuer: "CindeJobs",
    year: "2025"
  },
  {
    title: "AWS Academy: Cloud Developing",
    issuer: "AWS Academy",
    year: "2025"
  },
  {
    title: "AWS Academy: Cloud Architecting",
    issuer: "AWS Academy",
    year: "2025"
  },
  {
    title: "AWS Academy: Cloud Foundations",
    issuer: "AWS Academy",
    year: "2023"
  },
  {
    title: "Introduction to Docker",
    issuer: "University of Costa Rica",
    year: "2024"
  }
];

export const education = {
  degree: "Bachelor's Degree in Informatics and Multimedia Technology",
  institution: "University of Costa Rica",
  period: "Mar 2022 - Expected Dec 2025",
  status: "In Progress"
};

export const interests = [
  {
    title: "Open Source",
    description: "Contribuir a proyectos open source y aprender de la comunidad",
    icon: "code"
  },
  {
    title: "UX/UI Design",
    description: "Diseño centrado en el usuario y accesibilidad web",
    icon: "palette"
  },
  {
    title: "Cloud Architecture",
    description: "Arquitecturas escalables y serverless en la nube",
    icon: "cloud"
  },
  {
    title: "DevOps",
    description: "Automatización, CI/CD y mejores prácticas de deployment",
    icon: "settings"
  },
  {
    title: "Continuous Learning",
    description: "Siempre aprendiendo nuevas tecnologías y mejorando habilidades",
    icon: "book"
  },
  {
    title: "Problem Solving",
    description: "Resolver problemas complejos con soluciones elegantes",
    icon: "puzzle"
  }
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/jeremygzm",
    icon: "linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/Jeranguz",
    icon: "github"
  },
  {
    name: "Email",
    url: "mailto:Jeremyu4231@gmail.com",
    icon: "email"
  }
];
