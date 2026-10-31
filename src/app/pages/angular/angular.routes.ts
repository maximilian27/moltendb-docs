import { Routes } from '@angular/router';
import { BookLayout } from '../../layout/book-layout/book-layout';

export const ANGULAR_ROUTES: Routes = [
  {
    path: '',
    component: BookLayout,
    data: { book: 'angular' },
    children: [
      { path: '', redirectTo: 'getting-started', pathMatch: 'full' },
      {
        path: 'getting-started',
        loadComponent: () =>
          import('./getting-started/getting-started').then((m) => m.AngularGettingStarted),
      },
      {
        path: 'signals-and-reactivity',
        loadComponent: () =>
          import('./signals-and-reactivity/signals-and-reactivity').then(
            (m) => m.AngularSignalsAndReactivity,
          ),
      },
      {
        path: 'ssr-and-prerendering',
        loadComponent: () =>
          import('./ssr-and-prerendering/ssr-and-prerendering').then(
            (m) => m.AngularSsrAndPrerendering,
          ),
      },
      {
        path: 'replacing-state-management',
        loadComponent: () =>
          import('./replacing-state-management/replacing-state-management').then(
            (m) => m.AngularReplacingStateManagement,
          ),
      },
      {
        path: 'multi-tab-sync',
        loadComponent: () =>
          import('./multi-tab-sync/multi-tab-sync').then((m) => m.AngularMultiTabSync),
      },
    ],
  },
];
