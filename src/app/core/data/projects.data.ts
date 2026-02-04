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
    id: 'teampulse',
    name: 'TeamPulse',
    tagline: 'Gestión interna con auth, roles y tareas conectadas a API real.',
    description:
      'App enfocada a producto: login con Sanctum, listado de tareas con filtros y actualización de estado (PATCH), feedback UX (loading/errors) y estructura limpia.',
    stack: ['Angular (standalone)', 'Laravel API', 'Sanctum', 'MySQL/SQLite'],
    highlights: [
      'Auth real + token en interceptor',
      'Tasks: GET + PATCH (optimistic UI)',
      'Orden por fecha + etiquetas “Vence hoy/mañana”',
      'Código limpio para recruiters',
    ],
    role: 'Frontend-focused (con backend API real)',
    links: {
      repo: 'https://github.com/claudia-ma/teampulse-app',
    }
  },
    {
  id: 'minicms',
name: 'MiniCMS',
tagline: 'Panel tipo CMS con CRUD y estructura clara.',
description:
  'Panel administrativo orientado a orden y escalabilidad: CRUD completo con formularios, validación y una estructura modular fácil de mantener. Enfocado a un flujo real de “gestionar contenido/datos” con UX simple.',
stack: ['Angular (standalone)', 'TypeScript', 'Routing', 'Forms', 'CSS (custom)'],
highlights: [
  'CRUD completo (crear, editar, borrar, listar)',
  'Validación de formularios + mensajes de error',
  'Estructura modular y componentes reutilizables',
  'UX limpia: estados vacíos + feedback visual',
],
role: 'Frontend-focused (arquitectura y UX de panel)',
links: {
  repo: 'https://github.com/claudia-ma/minicms'
},
},
  {
  id: 'zimbabwe',
  name: 'Reino Zimbabwe',
  tagline: 'Landing visual e interactiva · UI/UX en evolución',
  description:
    'Proyecto centrado en frontend visual y narrativa: composición cuidada, secciones con identidad y microinteracciones. Actualmente en proceso de mejora y refactorización (2026).',
  stack: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
  highlights: [
    'Diseño visual fuerte + layout responsive',
    'Microinteracciones (hover y animaciones)',
    'Narrativa por secciones y jerarquía visual clara',
    'Proyecto en mejora y refactorización (2026)',
  ],
  role: 'Frontend UI (diseño + implementación)',
  links: {},
},
];