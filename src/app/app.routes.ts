import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'fepi',
    loadComponent: () => import('./universidades/fepi/fepi.page').then( m => m.FepiPage)
  },
];
