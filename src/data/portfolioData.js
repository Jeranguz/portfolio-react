// Portfolio Data - Jeremy Andrés Guzmán Vargas

export const personalInfo = {
  name: "Jeremy Andrés Guzmán Vargas",
  role: "Full Stack Developer",
  tagline: "Construyendo aplicaciones web escalables y orientadas a datos con pasión por el código limpio y la UX",
  location: "Belén, Heredia, Costa Rica",
  email: "Jeremyu4231@gmail.com",
  phone: "+506 6202-5052",
  linkedin: "linkedin.com/in/jeremygzm",
  bio: `Desarrollador Full Stack con experiencia práctica en la construcción y soporte de aplicaciones web escalables y orientadas a datos en entornos Ágiles. Hábil en frameworks frontend modernos como React y Angular, desarrollo de APIs RESTful, bases de datos relacionales y despliegues contenerizados. Experimentado en colaboración con equipos multifuncionales y stakeholders para traducir requerimientos de negocio en soluciones técnicas confiables.`,
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
    role: "Desarrollador Full Stack y Líder Frontend",
    company: "Universidad de Costa Rica - Equipo de I+D",
    location: "Costa Rica",
    period: "Jul 2024 - Presente",
    type: "Tiempo completo",
    description: "Lideré el desarrollo frontend y colaboré en sistemas backend para proyectos de investigación.",
    responsibilities: [
      "Actué como líder frontend, asignando y rastreando tickets, revisando pull requests",
      "Diseñé y desarrollé componentes React reutilizables",
      "Implementé autenticación JWT con interceptores de Axios",
      "Desarrollé APIs RESTful usando Laravel",
      "Construí y mantení imágenes Docker para desarrollo y producción",
      "Refactoricé pipelines CI/CD de Jenkins"
    ],
    technologies: ["React", "Laravel", "Docker", "Jenkins", "PostgreSQL", "JWT"]
  },
  {
    id: 2,
    role: "Desarrollador Full Stack",
    company: "AyCarta",
    location: "Remoto, México y Costa Rica",
    period: "Nov 2024 - Mar 2025",
    type: "Contrato",
    description: "Lideré la migración del sistema de pagos y resolví problemas críticos en producción.",
    responsibilities: [
      "Lideré la migración del sistema de pagos Stripe usando Django y dj-stripe",
      "Implementé y mantení webhooks de Stripe",
      "Solucioné bugs críticos de registro y autenticación de usuarios",
      "Diagnostiqué fallos de despliegue en producción vía SSH",
      "Refactoricé Dockerfiles para servicios frontend y backend",
      "Mejoré pipelines CI/CD de Bitbucket"
    ],
    technologies: ["Django", "Stripe API", "Docker", "Bitbucket CI/CD", "React", "PostgreSQL"]
  },
  {
    id: 3,
    role: "Desarrollador Full Stack",
    company: "Marlin",
    location: "Remoto, Costa Rica",
    period: "Jul 2024 - Nov 2024",
    type: "Contrato",
    description: "Construí componentes mobile y web con enfoque en la experiencia de usuario.",
    responsibilities: [
      "Construí componentes mobile y web usando React Native y React",
      "Desarrollé APIs REST de Django y esquemas de base de datos",
      "Integré microservicios Node.js para automatización de pruebas",
      "Administré despliegues en la nube y pipelines CI/CD",
      "Colaboré con diseñadores para UX consistente"
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
  degree: "Licenciatura en Informática y Tecnología Multimedia",
  institution: "Universidad de Costa Rica",
  period: "Mar 2022 - Graduación esperada Dic 2025",
  status: "En progreso"
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
