// Portfolio Data — Jeremy Andrés Guzmán Vargas

export const personalInfo = {
  name: "Jeremy Guzmán",
  fullName: "Jeremy Andrés Guzmán Vargas",
  role: "Full Stack Developer",
  tagline: "Building performant, accessible interfaces — from design handoff to production.",
  location: "Belén, Heredia, Costa Rica",
  email: "Jeremyu4231@gmail.com",
  phone: "+506 6202-5052",
  linkedin: "linkedin.com/in/jeremygzm",
  bio: `Full Stack Developer with 2+ years of hands-on experience designing, building, and deploying scalable web applications across the full stack in Agile environments. Proficient in modern frontend frameworks (such as React), RESTful API development (Django, Laravel), relational databases, and containerized deployments with Docker. Experienced leading frontend development, collaborating with cross-functional teams, and owning CI/CD pipelines from development to production. Passionate about clean, maintainable code, system reliability, and cloud-native technologies.`
};

export const skills = {
  technical: {
    title: "Technical Skills",
    items: [
      {
        category: "Languages",
        skills: ["JavaScript (ES6+)", "Python", "PHP", "SQL", "Bash", "C#"]
      },
      {
        category: "Frontend",
        skills: ["React", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"]
      },
      {
        category: "Backend",
        skills: ["Django", "Django REST Framework", "Laravel", ".NET"]
      },
      {
        category: "Databases",
        skills: ["PostgreSQL", "MySQL", "Relational Modeling", "Query Optimization", "Transactions"]
      },
      {
        category: "DevOps & Cloud",
        skills: ["Docker", "Docker Compose", "AWS (EC2, S3, CloudWatch, CloudFront, DynamoDB, Lambda, Route 53, API Gateway)", "Azure Fundamentals", "Jenkins", "Bitbucket Pipelines", "GitHub Actions", "Linux/Unix"]
      },
      {
        category: "Architecture & APIs",
        skills: ["RESTful API Design", "Client–Server Architecture", "JWT Authentication", "Stripe API", "Webhooks"]
      },
      {
        category: "Tools & Practices",
        skills: ["Git", "Postman", "Axios", "Agile/Scrum", "CI/CD", "SSH", "Log Analysis", "Debugging & Performance Troubleshooting"]
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
    role: "Full Stack Developer & Frontend Lead",
    company: "University of Costa Rica — R&D Team",
    location: "Costa Rica",
    period: "Jul 2024 – Mar 2026",
    type: "Full-time",
    description: "Led frontend development across 3 production platforms for a 4-person team, delivered a reusable React component library cutting duplicated code by ~30%, built RESTful APIs with Laravel for 500+ active users, and owned Docker and Jenkins CI/CD pipelines end-to-end.",
    responsibilities: [
      "Led frontend development across 3 production platforms — assigned tickets, reviewed pull requests, and enforced UI/architectural standards for a 4-person team",
      "Designed and delivered a reusable React component library, reducing duplicated code by ~30% and accelerating feature delivery across modules",
      "Implemented Axios interceptors for JWT authentication and automatic token refresh, hardening session security and eliminating manual re-login failures",
      "Developed RESTful APIs for multiple system modules using Laravel, integrating authentication, error handling, and monitoring endpoints for 500+ active users",
      "Collaborated on relational database design (PostgreSQL/MySQL), ensuring correct data modeling and reliable transactional behavior",
      "Built and maintained Docker images for frontend and backend environments, ensuring environment parity and reducing \"works on my machine\" incidents",
      "Refactored Jenkins CI/CD pipelines, cutting build failures and improving deployment stability across staging and production",
      "Monitored Linux servers and application logs to detect anomalies and resolve incidents proactively before user impact",
      "Collaborated with designers, backend engineers, and stakeholders in Scrum sprints"
    ],
    technologies: ["React", "Laravel", "Axios", "JWT", "Docker", "Jenkins", "PostgreSQL", "MySQL", "Linux"]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "AyCarta",
    location: "Remote — Mexico & Costa Rica",
    period: "Nov 2024 – Mar 2025",
    type: "Contract",
    description: "Led the payment system migration to Stripe using Django and dj-stripe, resolved critical authentication bugs reducing login failures to zero, and diagnosed production deployment failures that reduced recurring incidents by 35%.",
    responsibilities: [
      "Led the payment system migration to Stripe using Django and dj-stripe, delivering secure and compliant transaction handling for a SaaS platform",
      "Implemented and maintained Stripe webhooks to synchronize payment events and subscription state with backend services in real time",
      "Diagnosed and resolved critical authentication and registration bugs, improving account creation reliability and reducing login failure reports to zero",
      "Diagnosed production deployment failures via SSH log analysis and container inspection; applied permanent fixes that reduced recurring incidents by 35%",
      "Refactored Dockerfiles and Docker Compose configurations for frontend and backend services, eliminating build crashes and ensuring environment consistency",
      "Improved Bitbucket CI/CD pipelines, reducing deployment time and increasing release reliability across staging and production"
    ],
    technologies: ["Django", "dj-stripe", "Stripe API", "Webhooks", "Docker", "Docker Compose", "Bitbucket Pipelines", "PostgreSQL", "SSH"]
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "Marlin",
    location: "Remote — Costa Rica",
    period: "Jul 2024 – Nov 2024",
    type: "Contract",
    description: "Built responsive web and mobile interfaces using React, React Native, and Tailwind CSS, developed Django REST APIs with 2 database schemas, optimized backend query performance by 20%, and improved CI build times by 10% through pipeline refactoring.",
    responsibilities: [
      "Built responsive mobile and web interfaces using React Native, React, and Tailwind CSS, improving usability and product presentation for early-stage testing",
      "Developed Django REST APIs and designed 2 database schemas for product and user management, enabling real-time CRUD operations in testing environments",
      "Integrated Node.js microservices for internal testing automation, improving development workflow and deployment consistency across QA environments",
      "Optimized backend query performance by 20% through database query tuning and selective caching strategies",
      "Improved CI build and validation times by 10% through pipeline refactoring and test parallelization"
    ],
    technologies: ["React Native", "React", "Tailwind CSS", "Django REST Framework", "Node.js", "PostgreSQL", "Docker"]
  }
];

export const projects = [
  {
    id: 1,
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
    mainImage: "/projects/pylatam2026/main.png",
    media: [
      {
        description: "Register",
        url: "/projects/pylatam2026/register.png"
      },
      {
        description: "Call for papers",
        url: "/projects/pylatam2026/cfp.png"
      },
      {
        description: "User profile",
        url: "/projects/pylatam2026/profile.png"
      },
      {
        description: "Talk form",
        url: "/projects/pylatam2026/talk-form.png"
      },
      {
        description: "Sponsors page",
        url: "/projects/pylatam2026/sponsor.png"
      },
      {
        description: "Lodging information",
        url: "/projects/pylatam2026/lodging.png"
      }
    ],
    link: "https://pylatam.org/",
    github: null
  },
  {
    id: 2,
    title: "Cloud Resume Challenge — AWS",
    category: "Cloud & DevOps",
    thumbnail: "/projects/cloud-resume.jpg",
    year: "2026",
    description: "End-to-end cloud-native resume site built on AWS, featuring a serverless visitor counter, Infrastructure as Code, and a fully automated CI/CD pipeline.",
    problem: "Wanted to demonstrate hands-on cloud engineering skills beyond certifications, building, deploying, and maintaining real AWS infrastructure from scratch.",
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
    mainImage: "/projects/cloud-resume/resume-ui.png",
    media: [
      {
        description: "Lambda function in action with API Gateway integration",
        url: "/projects/cloud-resume/lambda-function.png"
      },
      {
        description: "Resume architectural diagram — AWS services and interactions",
        url: "/projects/cloud-resume/architecture.jpg"
      },
      {
        description: "GitHub Actions workflows",
        url: "/projects/cloud-resume/workflows.png"
      }
    ],
    link: "https://jeremy-guzman.com",
    github: "https://github.com/Jeranguz"
  },
  {
    id: 3,
    title: "gitai — AI-Powered Commit Messages",
    category: "CLI Tool / Open Source",
    thumbnail: "/projects/gitai.jpg",
    year: "2025",
    description: "Open source CLI tool that reads staged git changes and uses AI to suggest meaningful, Conventional Commits-formatted commit messages. Supports Ollama, OpenAI, and Anthropic.",
    problem: "Developers waste time writing generic or inconsistent commit messages. There was no lightweight CLI tool that could analyze actual staged diffs and propose specific, professional commit messages using local or cloud AI.",
    solution: "Built a Python CLI with Typer and litellm that reads git staged diffs, validates them for meaningful content, and sends a structured prompt to the configured AI provider — returning three interactive suggestions the user can pick from or override.",
    results: [
      "Supports three AI providers (Ollama, OpenAI, Anthropic) with zero code changes via litellm",
      "Prevents AI hallucinations on empty diffs through a custom diff validation layer",
      "Fully configurable via ~/.gitai.toml with sensible defaults — works out of the box",
      "Cross-platform compatible including Windows UTF-8 encoding edge cases"
    ],
    role: "Author & Maintainer",
    methodology: "Open Source · CLI-First Design · Conventional Commits",
    technologies: {
      frontend: [],
      backend: ["Python", "Typer", "litellm", "Rich", "questionary", "GitPython"],
      devops: ["PyPI", "Git", "Ollama", "OpenAI API", "Anthropic API"]
    },
    responsibilities: [
      "Designed and built the full CLI architecture across 5 focused modules",
      "Implemented git diff reading and meaningful content validation",
      "Integrated litellm for unified multi-provider AI support",
      "Built interactive commit message picker with questionary",
      "Handled cross-platform edge cases including Windows encoding bugs",
      "Designed TOML-based config system with automatic first-run initialization"
    ],
    challenges: [
      "Preventing AI hallucinations when staged diffs had no meaningful content",
      "Normalizing AI provider interfaces without locking users to a single model",
      "Handling Windows UTF-8 encoding errors from subprocess git output",
      "Designing a single-command Typer app without subcommand routing conflicts"
    ],
    mainImage: "/projects/gitai/repo.png",
    link: null,
    github: "https://github.com/Jeranguz/gitai"
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
  { name: "GitHub", url: "https://github.com/Jeranguz", icon: "github" },
  { name: "Email", url: "mailto:Jeremyu4231@gmail.com", icon: "email" }
];
