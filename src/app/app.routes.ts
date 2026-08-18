import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MoltendbTest } from './pages/moltendb-test/moltendb-test';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'moltendb-test',
    component: MoltendbTest
  }
];
