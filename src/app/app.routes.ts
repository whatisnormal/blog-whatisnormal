import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SandboxComponent } from './sandbox/sandbox.component';

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
/* {
  path: 'sandbox',
  component: SandboxComponent
}, */
{
  path: 'tutorials',
  loadChildren: () =>
      import('./tutorials/tutorials.routes')
          .then(m => m.TUT_ROUTES)
},

// Option 2: Directly Lazy Loading a Standalone Component
{
  path: 'sandbox',
  loadComponent: () =>
      import('./sandbox/sandbox.component')
          .then(m => m.SandboxComponent)
},
];
