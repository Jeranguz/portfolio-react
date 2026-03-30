// Portfolio Data — Jeremy Andrés Guzmán Vargas

export const personalInfo = {
  name: "Jeremy Guzmán",
  fullName: "Jeremy Andrés Guzmán Vargas",
  role: "Frontend Developer",
  tagline: "Building performant, accessible interfaces — from design handoff to production.",
  location: "Belén, Heredia, Costa Rica",
  email: "Jeremyu4231@gmail.com",
  phone: "+506 6202-5052",
  linkedin: "linkedin.com/in/jeremygzm",
  bio: `Frontend Developer with 2+ years of experience building performant, accessible, and visually consistent web and mobile interfaces in Agile environments. Proficient in React, Angular, and React Native, with a strong sense of component architecture, design system thinking, and UI/UX best practices. Experienced leading frontend teams, enforcing code quality through pull request reviews, and collaborating closely with designers and backend engineers to deliver cohesive user experiences.`
};

export const skills = {
  technical: {
    title: "Technical Skills",
    items: [
      {
        category: "Frontend",
        skills: ["React", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
      },
      {
        category: "JavaScript",
        skills: ["ES6+", "async/await", "Axios", "REST API Integration", "JWT Handling", "State Management"]
      },
      {
        category: "Component Design",
        skills: ["Design Systems", "Component Libraries", "Prop-driven Architecture", "Responsive Layouts"]
      },
      {
        category: "Tooling",
        skills: ["Git", "Docker", "CI/CD (Jenkins, Bitbucket, GitHub Actions)", "Postman"]
      },
      {
        category: "Backend",
        skills: ["Django REST Framework", "Laravel", ".NET", "PostgreSQL", "MySQL"]
      },
      {
        category: "Cloud",
        skills: ["AWS (EC2, S3, DynamoDB, Lambda, Route 53, CloudFront)", "Azure", "Linux", "SSH", "Bash"]
      }
    ]
  },
  soft: {
    title: "Soft Skills",
    items: [
      {
        name: "Communication",
        description: "Clear and effective communication across cross-functional and distributed teams"
      },
      {
        name: "Problem Solving",
        description: "Analytical and detail-oriented approach to development and debugging"
      },
      {
        name: "Initiative",
        description: "Proactive ownership and initiative in feature delivery and team standards"
      },
      {
        name: "Agile Collaboration",
        description: "Experienced in Scrum ceremonies, sprint planning, and cross-team coordination"
      },
      {
        name: "Adaptability",
        description: "Quick to adopt new technologies and thrive in fast-paced environments"
      }
    ]
  }
};

export const experience = [
  {
    id: 1,
    role: "Frontend Lead & Full Stack Developer",
    company: "University of Costa Rica — R&D Team",
    location: "Costa Rica",
    period: "Jul 2024 – Mar 2026",
    type: "Full-time",
    description: "Led frontend development across 3 production platforms, managing a 4-person frontend team, enforcing UI and architectural standards through pull request reviews, and delivering a reusable React component library that reduced duplicated UI code by ~30%.",
    responsibilities: [
      "Managed a 4-person frontend team — assigned tickets, tracked delivery, and enforced standards through PR reviews",
      "Architected and delivered a reusable React component library adopted across all production modules",
      "Defined component structure, naming conventions, and state management patterns for the full team",
      "Implemented Axios interceptors for JWT authentication and automatic token refresh",
      "Collaborated with UI/UX designers to translate wireframes into pixel-accurate responsive interfaces",
      "Worked with backend engineers to define and integrate RESTful API contracts",
      "Participated in Scrum ceremonies as the frontend representative for stakeholder-facing decisions"
    ],
    technologies: ["React", "Axios", "JWT", "Laravel", "Docker", "Jenkins", "PostgreSQL"]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "AyCarta",
    location: "Remote — Mexico & Costa Rica",
    period: "Nov 2024 – Mar 2025",
    type: "Contract",
    description: "Diagnosed and resolved critical frontend authentication bugs reducing login failures to zero, integrated Stripe payment UI flows, and improved CI/CD pipelines to increase deployment confidence across environments.",
    responsibilities: [
      "Resolved critical authentication and user registration bugs, reducing login failures to zero",
      "Collaborated with backend team to integrate Stripe payment UI flows and webhook-driven subscription updates",
      "Refactored Dockerfiles for frontend services ensuring consistent builds across dev and production",
      "Improved Bitbucket CI/CD pipelines for frontend builds, reducing deployment time",
      "Contributed to cross-functional Agile delivery and sprint reviews"
    ],
    technologies: ["React", "Django", "Stripe API", "Docker", "Bitbucket Pipelines", "PostgreSQL"]
  },
  {
    id: 3,
    role: "Frontend & Full Stack Developer",
    company: "Marlin",
    location: "Remote — Costa Rica",
    period: "Jul 2024 – Nov 2024",
    type: "Contract",
    description: "Built responsive web and mobile interfaces using React and React Native, established frontend component conventions, and integrated Django REST API contracts for a consumer-facing prototype.",
    responsibilities: [
      "Built responsive web and mobile UIs using React, React Native, and Tailwind CSS",
      "Translated design mockups into functional interactive components for a consumer-facing prototype",
      "Collaborated with backend engineers to define and consume Django REST API contracts",
      "Established component structure and file organization conventions for the frontend codebase",
      "Integrated Node.js microservices for internal tooling and test automation"
    ],
    technologies: ["React Native", "React", "Tailwind CSS", "Django REST Framework", "Node.js", "AWS"]
  }
];

export const projects = [
  {
    id: 1,
    title: "R&D Management System — UCR",
    category: "Web Application",
    thumbnail: "/projects/ucr-system.jpg",
    year: "2024",
    description: "Multi-module research and development management platform for the University of Costa Rica, built for 3 production teams.",
    problem: "The university needed a centralized platform to manage R&D projects across multiple teams, with complex role-based access control and interconnected modules.",
    solution: "Delivered a modular React application with a reusable component library, JWT-based authentication with automatic token refresh, and a scalable frontend architecture adopted across the full team.",
    results: [
      "~30% reduction in duplicated UI code through the shared component library",
      "Eliminated session interruptions with automatic JWT token refresh via Axios interceptors",
      "Scalable architecture adopted as the standard across all 3 production platforms"
    ],
    role: "Frontend Lead & Full Stack Developer",
    methodology: "Agile (Scrum) · Pull Request Reviews · Component-Driven Development",
    technologies: {
      frontend: ["React", "Axios", "React Router", "CSS Modules"],
      backend: ["Laravel", "PHP", "PostgreSQL"],
      devops: ["Docker", "Jenkins", "Git"]
    },
    responsibilities: [
      "Led and coordinated a 4-person frontend team across multiple production modules",
      "Architected the reusable React component library",
      "Implemented JWT authentication with automatic token refresh",
      "Defined team-wide component structure and naming conventions",
      "Collaborated directly with designers and backend engineers"
    ],
    challenges: [
      "Managing complex shared state across a multi-module application",
      "Implementing reliable automatic token refresh without user disruption",
      "Ensuring visual consistency across teams and modules without a design system"
    ],
    link: null,
    github: null
  },
  {
    id: 2,
    title: "Payment System Migration — AyCarta",
    category: "Payment Integration",
    thumbnail: "/projects/aycarta-payments.jpg",
    year: "2024–2025",
    description: "Full migration of the payment system to Stripe, resolving critical authentication bugs and integrating webhook-driven subscription flows.",
    problem: "The existing payment system had critical frontend bugs causing login failures and an unstable payment flow that blocked user onboarding.",
    solution: "Diagnosed and fixed authentication issues, integrated Stripe's UI payment flows with webhook-driven state synchronization, and refactored the CI/CD pipeline for consistent frontend deployments.",
    results: [
      "Login failure reports reduced to zero after resolving authentication bugs",
      "Stripe payment flow successfully integrated with real-time webhook synchronization",
      "Deployment reliability improved through Bitbucket pipeline refactoring"
    ],
    role: "Full Stack Developer",
    methodology: "Agile · Remote Cross-functional Team",
    technologies: {
      frontend: ["React", "TypeScript"],
      backend: ["Django", "dj-stripe", "PostgreSQL", "Stripe API"],
      devops: ["Docker", "Bitbucket Pipelines"]
    },
    responsibilities: [
      "Diagnosed and resolved critical authentication and registration bugs",
      "Integrated Stripe payment UI flows with the frontend state layer",
      "Coordinated webhook-driven subscription state with the backend team",
      "Refactored Dockerfiles for consistent frontend build environments",
      "Improved Bitbucket CI/CD pipelines and participated in sprint reviews"
    ],
    challenges: [
      "Reproducing and fixing intermittent authentication bugs in production",
      "Synchronizing frontend payment state with webhook-driven backend events",
      "Testing Stripe webhooks reliably in local and staging environments"
    ],
    mainImage: "/projects/ayCarta/landing.png",
    media: [
      {
        description: "Payment alert UI",
        url: "/projects/ayCarta/payment.png"
      },
      {
        description: "Stripe checkout flow",
        url: "/projects/ayCarta/stripe.png"
      },
      {
        description: "Store editor",
        url: "/projects/ayCarta/store.png"
      },
      {
        description: "Product creation",
        url: "/projects/ayCarta/product.png"
      }
    ],
    link: null,
    github: null
  },
  {
    id: 3,
    title: "Cross-Platform App — Marlin",
    category: "Mobile & Web",
    thumbnail: "/projects/marlin-app.jpg",
    year: "2024",
    description: "Consumer-facing cross-platform application built with React and React Native, sharing business logic across web and iOS/Android targets.",
    problem: "The product team needed a consistent user experience across web and mobile with rapid iteration capability for an early-stage consumer prototype.",
    solution: "Built shared UI components with React and React Native, defined Django REST API contracts with the backend team, and established codebase conventions that accelerated onboarding for new contributors.",
    results: [
      "Successful delivery of a functional cross-platform prototype for web, iOS, and Android",
      "Established frontend conventions that improved code readability and contributor onboarding",
      "Clean API contract definition reduced integration friction between frontend and backend layers"
    ],
    role: "Frontend & Full Stack Developer",
    methodology: "Agile · Component-Driven Development",
    technologies: {
      frontend: ["React Native", "React", "Tailwind CSS"],
      backend: ["Django REST Framework", "Node.js", "PostgreSQL"],
      devops: ["AWS", "Docker", "CI/CD"]
    },
    responsibilities: [
      "Built responsive web and mobile UI components using React and React Native",
      "Translated design mockups into interactive, functional components",
      "Collaborated with backend engineers to define and consume REST API contracts",
      "Established component structure and file organization conventions",
      "Integrated Node.js microservices for internal test automation"
    ],
    challenges: [
      "Maintaining UI/UX consistency across web and native mobile platforms",
      "Rapidly iterating on components based on early-stage product feedback",
      "Defining clean API contracts while the backend was still evolving"
    ],
    link: null,
    github: null
  },
  {
    id: 4,
    title: "PyCon Latam 2026 — Conference Platform",
    category: "Web Platform",
    thumbnail: "/projects/pycon-latam-2026.jpg",
    year: "2026",
    description: "Official conference website for PyCon Latam 2026 — a multilingual, high-performance platform for talks, speakers, and community scheduling.",
    problem: "The conference required a modern, maintainable web platform capable of handling high international traffic and presenting dynamic talk and speaker content clearly.",
    solution: "Built a responsive, component-driven React platform with Django REST API integration, supporting multilingual content, dynamic talk listings, and optimized performance for peak traffic.",
    results: [
      "Responsive platform optimized for desktop and mobile across the international audience",
      "Improved discoverability of talks and speakers through structured navigation",
      "High performance and fast load times maintained during conference traffic peaks",
      "Scalable architecture prepared for concurrent user load"
    ],
    role: "Frontend Developer",
    methodology: "Agile · Modular Component Architecture",
    technologies: {
      frontend: ["React", "Tailwind CSS", "React Query"],
      backend: ["Django", "Django REST Framework"],
      devops: ["Docker", "CI/CD"]
    },
    responsibilities: [
      "Developed the conference website frontend with reusable UI components",
      "Integrated backend APIs for talks, speakers, and event schedule data",
      "Ensured performance and accessibility across devices and browsers",
      "Collaborated with conference organizers and the design team",
      "Supported multilingual content structure for the international community"
    ],
    challenges: [
      "Designing scalable components for continuously updated event content",
      "Supporting multilingual content cleanly within the component architecture",
      "Ensuring accessibility and performance for a globally distributed audience"
    ],
    media: [
      {
        description: "PyCon Latam 2026 homepage — talks and navigation overview",
        url: "/projects/pycon-latam-2026-screenshot.jpg"
      },
      {
        description: "Conference platform in use during the event",
        url: "/projects/pycon-latam-2026-attendees.jpg"
      }
    ],
    link: null,
    github: null
  },
  {
  id: 5,
  title: "Cloud Resume Challenge — AWS",
  category: "Cloud & DevOps",
  thumbnail: "/projects/cloud-resume.jpg",
  year: "2025",
  description: "End-to-end cloud-native resume site built on AWS, featuring a serverless visitor counter, Infrastructure as Code, and a fully automated CI/CD pipeline.",
  problem: "Wanted to demonstrate hands-on cloud engineering skills beyond certifications — building, deploying, and maintaining real AWS infrastructure from scratch.",
  solution: "Architected a static frontend on S3 + CloudFront with a custom domain via Route 53, a serverless backend using Lambda, API Gateway, and DynamoDB for a live visitor counter, and automated all deployments with GitHub Actions using OIDC for keyless authentication and Terraform for infrastructure provisioning.",
  results: [
    "Fully deployed personal resume site live at jeremy-guzman.com",
    "Serverless visitor counter with zero-maintenance backend infrastructure",
    "Keyless CI/CD pipeline via GitHub Actions OIDC — no long-lived AWS credentials",
    "100% infrastructure reproducible and version-controlled through Terraform"
  ],
  role: "Cloud & DevOps Engineer",
  methodology: "Infrastructure as Code · GitOps · Serverless Architecture",
  technologies: {
    frontend: ["HTML", "CSS", "JavaScript"],
    backend: ["AWS Lambda", "API Gateway", "DynamoDB"],
    devops: ["AWS S3", "CloudFront", "Route 53", "Terraform", "GitHub Actions", "OIDC"]
  },
  responsibilities: [
    "Hosted static resume site on S3 with CloudFront CDN and HTTPS",
    "Configured custom domain and DNS routing via Route 53",
    "Built a serverless visitor counter with Lambda, API Gateway, and DynamoDB",
    "Provisioned all AWS infrastructure using Terraform",
    "Implemented GitHub Actions CI/CD pipeline with OIDC for secure, keyless deployments"
  ],
  challenges: [
    "Configuring OIDC trust between GitHub Actions and AWS IAM without long-lived credentials",
    "Managing Terraform state and avoiding infrastructure drift across deployments",
    "Setting up CloudFront cache invalidation as part of the automated deployment flow"
  ],
  link: "https://jeremy-guzman.com",
  github: "https://github.com/Jeranguz"
}
];

export const certifications = [
  { title: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", year: "2025" },
  { title: "Business English — C1 Certified", issuer: "CindeJobs", year: "2025" },
  { title: "AWS Academy: Cloud Developing", issuer: "AWS Academy", year: "2025" },
  { title: "AWS Academy: Cloud Architecting", issuer: "AWS Academy", year: "2025" },
  { title: "AWS Academy: Cloud Foundations", issuer: "AWS Academy", year: "2023" },
  { title: "Introduction to Docker", issuer: "University of Costa Rica", year: "2024" }
];

export const education = {
  degree: "Bachelor's in Computer Science & Multimedia Technology",
  institution: "University of Costa Rica",
  period: "Mar 2022 – Expected Dec 2025",
  status: "In progress"
};

export const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/jeremygzm", icon: "linkedin" },
  { name: "GitHub",   url: "https://github.com/Jeranguz",         icon: "github"   },
  { name: "Email",    url: "mailto:Jeremyu4231@gmail.com",         icon: "email"    }
];
