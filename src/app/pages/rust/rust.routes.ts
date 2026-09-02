import { Routes } from '@angular/router';
import { BookLayout } from '../../layout/book-layout/book-layout';

export const RUST_ROUTES: Routes = [
  {
    path: '',
    component: BookLayout,
    data: { book: 'rust' },
    children: [
      { path: '', redirectTo: 'getting-started', pathMatch: 'full' },
      {
        path: 'getting-started',
        loadComponent: () =>
          import('./getting-started/getting-started').then((m) => m.RustGettingStarted),
      },
      {
        path: 'data-modeling',
        loadComponent: () => import('./data-modeling/data-modeling').then((m) => m.RustDataModeling),
      },
      {
        path: 'querying',
        loadComponent: () => import('./querying/querying').then((m) => m.RustQuerying),
      },
      {
        path: 'performance-tuning',
        loadComponent: () =>
          import('./performance-tuning/performance-tuning').then((m) => m.RustPerformanceTuning),
      },
      {
        path: 'storage-and-durability',
        loadComponent: () =>
          import('./storage-and-durability/storage-and-durability').then(
            (m) => m.RustStorageAndDurability,
          ),
      },
    ],
  },
];
