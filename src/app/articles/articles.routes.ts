import { Route } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleContentResolver } from './articles-content.resolver';
import { ArticlesComponent } from './articles.component';

export const ARTICLES_ROUTES: Route[] = [
{
    path: '',
    component: ArticlesComponent
},
{
  path: ':fileName',
  component: ArticleDetailsComponent,
  resolve: {articleContent: ArticleContentResolver  }
},
];
