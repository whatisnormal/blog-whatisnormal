import { Route } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
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
{
  path: 'forms',
  component: FormsComponent,
},
];
