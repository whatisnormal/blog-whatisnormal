import { Route } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticlesComponent } from './articles.component';

export const ARTICLES_ROUTES: Route[] = [
{
    path: '',
    component: ArticlesComponent
},
{
  path: ':id',
  component: ArticleDetailsComponent
},
];
