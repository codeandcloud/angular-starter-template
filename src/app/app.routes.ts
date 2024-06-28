import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.routes').then((mod) => mod.PAGE_ROUTES),
  },
  { path: '**', component: PageNotFoundComponent, title: 'Page Not Found' },
];
