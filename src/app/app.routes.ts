import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MoltendbTest } from './pages/moltendb-test/moltendb-test';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'rust',
    loadChildren: () => import('./pages/rust/rust.routes').then((m) => m.RUST_ROUTES)
  },
  {
    path: 'web',
    loadChildren: () => import('./pages/web/web.routes').then((m) => m.WEB_ROUTES)
  },
  {
    path: 'angular',
    loadChildren: () => import('./pages/angular/angular.routes').then((m) => m.ANGULAR_ROUTES)
  },
  {
    path: 'react',
    loadChildren: () => import('./pages/react/react.routes').then((m) => m.REACT_ROUTES)
  },
  {
    path: 'moltendb-test',
    component: MoltendbTest
  }
];
