import { Route } from '@angular/router';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { TutorialsComponent } from './tutorials.component';

export const TUT_ROUTES: Route[] = [
{
    path: '',
    component: TutorialsComponent
},
{
  path: ':id',
  component: TutorialDetailsComponent
},
];
