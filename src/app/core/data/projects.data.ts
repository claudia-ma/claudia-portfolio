export type ProjectId = 'teampulse' | 'minicms' | 'zimbabwe';

export type Project = {
  id: ProjectId;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  role: string;
  image?: string;
  screens?: string[];
  problem?: string;
  solution?: string;
  technicalDecisions?: string[];
  links?: {
    repo?: string;
    live?: string;
  };
  status?: 'in-progress';
};

export const PROJECTS: Project[] = [
  {
    id: "teampulse",
    name: "TeamPulse",
    tagline:
      "SaaS-style internal task management with real authentication and API integration.",
    description:
      "Product-oriented internal dashboard featuring Laravel Sanctum authentication, protected routes, full task CRUD with filters, reactive state management, and strong UX handling for loading and error states.",
    stack: [
      "Angular (Standalone)",
      "TypeScript",
      "RxJS",
      "Laravel API",
      "Sanctum",
      "MySQL/SQLite",
    ],
    highlights: [
      "Real authentication with token persistence (localStorage)",
      "HTTP interceptor injecting Bearer token",
      "Route protection via Auth Guard",
      "Task management: CRUD + filters + status updates (PATCH) with optimistic UI",
      "Fully responsive mobile experience (topbar + touch-friendly controls)",
    ],
    role: "Frontend-focused developer responsible for building the UI, handling state management, and integrating a real backend API with authentication and protected routes",
    problem: "Small teams often rely on task management tools that are either too complex or disconnected from real backend workflows. I wanted to build a focused solution that reflects how a real product handles authentication, protected data, and user interaction without unnecessary complexity.",
    solution: "I designed and developed a simplified internal dashboard that replicates a real SaaS workflow, including authentication, protected routes, task management with filtering and status updates, and clear UX states for loading and error handling.",
    technicalDecisions: [
    "Structured the frontend using Angular standalone components to improve modularity and scalability.",
    "Integrated a Laravel API secured with Sanctum to simulate a real authentication flow.",
    "Implemented token persistence using localStorage to maintain user sessions.",
    "Developed an HTTP interceptor to automatically attach Bearer tokens to protected requests.",
    "Focused on UX details such as loading states, error handling, and responsive design to make the product feel production-ready."
    ],
    image: '/images/teampulse/login.png',
    screens: [
    '/images/teampulse/login.png',
    '/images/teampulse/dashboard.png',
    '/images/teampulse/tasks.png'
    ],
    links: {
      repo: "https://github.com/claudia-ma/teampulse",
    },
  },

  {
  id: "minicms",

  name: "ContentHub — Mini CMS",

  tagline: "Production-ready full-stack editorial management platform.",

  description:
    "A modern editorial content management platform built with React, Laravel and PostgreSQL. Designed to simulate real-world editorial workflows with CRUD operations, content status management, REST API integration and a deployed full-stack production architecture.",

  image: "/images/minicms/dashboard-overview.png",

  screens: [
    "/images/minicms/dashboard-overview.png",
    "/images/minicms/content-cards.png",
    "/images/minicms/create-content.png",
  ],

  stack: [
    "React",
    "Laravel",
    "PostgreSQL",
    "REST APIs",
    "Vercel",
    "Render",
  ],

  highlights: [
    "Complete CRUD operations for editorial content management",
    "Content publishing workflow and status management",
    "REST API integration between React frontend and Laravel backend",
    "Production deployment architecture using Vercel + Render + PostgreSQL",
    "Structured validation flows and error handling",
    "Responsive dashboard UI with clean UX feedback patterns",
  ],

  role:
    "Full-stack developer focused on frontend architecture, dashboard UX, API integration and deployment workflow.",
    problem:
      "Small editorial teams and independent creators often rely on fragmented tools to manage drafts, publishing states and editorial workflows. The goal was to centralize content management inside a clean and scalable dashboard experience.",

    solution:
      "Built a full-stack editorial CMS with React, Laravel and PostgreSQL supporting content CRUD operations, status management and live API communication through a production-ready deployment architecture.",

    technicalDecisions: [
      "Built the frontend using reusable React components and modular page architecture",
      "Developed a Laravel REST API for content operations and backend logic",
      "Integrated PostgreSQL for persistent production data storage",
      "Separated frontend and backend deployment architecture using Vercel and Render",
      "Configured secure environment variables across production services",
      "Implemented structured validation handling and UX feedback patterns",
    ],
  links: {
    live: "https://minicms-psi.vercel.app",
    repo: "https://github.com/claudia-ma/minicms",
  },
},

  {
    id: "zimbabwe",
    name: "Reino Zimbabwe",
    tagline: "Client-oriented landing page with strong UI structure and visual consistency.",
    description:
      "Frontend project developed as a real client-style landing page: clear information hierarchy, polished UI, full responsiveness, and maintainable code structure. Designed to demonstrate visual judgment and execution quality.",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Real-world client-style landing structure",
      "Fully responsive design with clear visual hierarchy",
      "Consistent UI components and section architecture",
      "Clean and maintainable frontend code",
    ],
    role: "Frontend UI development (design implementation and structure).",
    links: {
      repo: "https://github.com/claudia-ma/reino-zimbabwe",
    },
  },
];