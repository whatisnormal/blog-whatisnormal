import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SandboxGuard } from './sandbox.guard';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
},
{
    path: 'home',
    component: HomeComponent
},
{
  path: 'reflections',
  loadChildren: () =>
      import('./reflections/reflections.routes')
          .then(m => m.REFLECTIONS_ROUTES)
},
{
  path: 'tutorials',
  loadChildren: () =>
      import('./tutorials/tutorials.routes')
          .then(m => m.TUTORIALS_ROUTES)
},

];
