import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SandboxGuard } from './sandbox.guard';
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
{
  path: 'articles',
  loadChildren: () =>
      import('./articles/articles.routes')
          .then(m => m.ARTICLES_ROUTES)
},

// Option 2: Directly Lazy Loading a Standalone Component
// {
//   path: 'sandbox',
//   loadComponent: () =>
//       import('./sandbox/sandbox.component')
//           .then(m => m.SandboxComponent)
// },
{
  path: 'sandbox',
  loadChildren: () =>
      import('./sandbox/sandbox.routes')
          .then(m => m.SANDBOX_ROUTES),
          canActivate: [SandboxGuard]

},

];
