import { Route } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SandboxComponent } from './sandbox.component';


export const SANDBOX_ROUTES: Route[] = [
{
    path: '',
    component: SandboxComponent
},
{
  path: 'rxjs',
  component: RxjsComponent,
},
];
