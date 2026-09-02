export interface DocLink {
  path: string;
  label: string;
}

export interface Book {
  id: string;
  title: string;
  icon: string;
  basePath: string;
  audience: string;
  description: string;
  links: DocLink[];
}

export const BOOKS: Book[] = [
  {
    id: 'rust',
    title: 'Rust Core',
    icon: '🦀',
    basePath: '/rust',
    audience: 'Backend engineers building high-throughput systems.',
    description: 'The native Rust crate powering MoltenDB, built for raw speed and safety.',
    links: [
      { path: 'getting-started', label: 'Getting Started' },
      { path: 'data-modeling', label: 'Data Modeling' },
      { path: 'querying', label: 'Querying' },
      { path: 'performance-tuning', label: 'Performance Tuning' },
      { path: 'storage-and-durability', label: 'Storage & Durability' },
    ],
  },
  {
    id: 'web',
    title: 'Web & Node.js',
    icon: '🟨',
    basePath: '/web',
    audience: 'Full-stack TS developers and Node backend engineers.',
    description:
      'The isomorphic TypeScript/WASM package that runs the same engine in the browser and on the server.',
    links: [
      { path: 'getting-started', label: 'Getting Started' },
      { path: 'nodejs-engine', label: 'Node.js Engine' },
      { path: 'browser-engine', label: 'Browser Engine' },
      { path: 'core-api', label: 'Core API' },
      { path: 'materialized-indexes', label: 'Materialized Indexes' },
    ],
  },
  {
    id: 'angular',
    title: 'Angular Integration',
    icon: '🅰️',
    basePath: '/angular',
    audience: 'Frontend developers looking for an SSR-safe reactive store.',
    description: 'Signal-based bindings that make MoltenDB feel like a native part of Angular.',
    links: [
      { path: 'getting-started', label: 'Getting Started' },
      { path: 'signals-and-reactivity', label: 'Signals & Reactivity' },
      { path: 'ssr-and-prerendering', label: 'SSR & Prerendering' },
      { path: 'replacing-state-management', label: 'Replacing State Management' },
      { path: 'multi-tab-sync', label: 'Multi-Tab Sync' },
    ],
  },
  {
    id: 'react',
    title: 'React Integration',
    icon: '⚛️',
    basePath: '/react',
    audience: 'React/Next.js developers needing a fast client-side database.',
    description: 'Hooks and providers that bring MoltenDB into any React or Next.js app.',
    links: [
      { path: 'getting-started', label: 'Getting Started' },
      { path: 'hooks-and-reactivity', label: 'Hooks & Reactivity' },
      { path: 'ssr-and-nextjs', label: 'SSR & Next.js' },
      { path: 'replacing-state-management', label: 'Replacing State Management' },
      { path: 'multi-tab-sync', label: 'Multi-Tab Sync' },
    ],
  },
];

export function getBookById(id: string): Book | undefined {
  return BOOKS.find((book) => book.id === id);
}
