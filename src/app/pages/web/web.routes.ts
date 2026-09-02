import { Routes } from '@angular/router';
import { BookLayout } from '../../layout/book-layout/book-layout';

export const WEB_ROUTES: Routes = [
  {
    path: '',
    component: BookLayout,
    data: { book: 'web' },
    children: [
      { path: '', redirectTo: 'getting-started', pathMatch: 'full' },
      {
        path: 'getting-started',
        loadComponent: () =>
          import('./getting-started/getting-started').then((m) => m.WebGettingStarted),
      },
      {
        path: 'nodejs-engine',
        loadComponent: () => import('./nodejs-engine/nodejs-engine').then((m) => m.WebNodejsEngine),
      },
      {
        path: 'browser-engine',
        loadComponent: () => import('./browser-engine/browser-engine').then((m) => m.WebBrowserEngine),
      },
      {
        path: 'core-api',
        loadComponent: () => import('./core-api/core-api').then((m) => m.WebCoreApi),
      },
      {
        path: 'materialized-indexes',
        loadComponent: () =>
          import('./materialized-indexes/materialized-indexes').then(
            (m) => m.WebMaterializedIndexes,
          ),
      },
    ],
  },
];
