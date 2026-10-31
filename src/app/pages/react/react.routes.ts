import { Routes } from '@angular/router';
import { BookLayout } from '../../layout/book-layout/book-layout';

export const REACT_ROUTES: Routes = [
  {
    path: '',
    component: BookLayout,
    data: { book: 'react' },
    children: [
      { path: '', redirectTo: 'getting-started', pathMatch: 'full' },
      {
        path: 'getting-started',
        loadComponent: () =>
          import('./getting-started/getting-started').then((m) => m.ReactGettingStarted),
      },
      {
        path: 'hooks-and-reactivity',
        loadComponent: () =>
          import('./hooks-and-reactivity/hooks-and-reactivity').then(
            (m) => m.ReactHooksAndReactivity,
          ),
      },
      {
        path: 'ssr-and-nextjs',
        loadComponent: () => import('./ssr-and-nextjs/ssr-and-nextjs').then((m) => m.ReactSsrAndNextjs),
      },
      {
        path: 'replacing-state-management',
        loadComponent: () =>
          import('./replacing-state-management/replacing-state-management').then(
            (m) => m.ReactReplacingStateManagement,
          ),
      },
      {
        path: 'multi-tab-sync',
        loadComponent: () =>
          import('./multi-tab-sync/multi-tab-sync').then((m) => m.ReactMultiTabSync),
      },
    ],
  },
];
