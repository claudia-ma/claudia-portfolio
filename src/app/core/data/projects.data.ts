export type ProjectId = 'teampulse' | 'minicms' | 'zimbabwe';

export type Project = {
  id: ProjectId;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  role: string;
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
    role: "Frontend-focused developer integrating with a real backend API.",
    links: {
      repo: "https://github.com/claudia-ma/teampulse",
    },
  },

  {
    id: "minicms",
    name: "MiniCMS",
    tagline: "Admin dashboard with full CRUD and a scalable modular architecture.",
    description:
      "Administrative panel built with scalability and maintainability in mind: full CRUD operations, structured routing, reusable components, and clear UX patterns for managing structured content and data.",
    stack: ["Angular (Standalone)", "TypeScript", "Routing", "Forms", "Custom CSS"],
    highlights: [
      "Complete CRUD operations (create, read, update, delete)",
      "Form validation with structured error handling",
      "Modular architecture with reusable components",
      "Clean UX: empty states and visual feedback patterns",
    ],
    role: "Frontend-focused (dashboard architecture and user experience design).",
    links: {
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