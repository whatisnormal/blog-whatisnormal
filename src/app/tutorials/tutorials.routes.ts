import { Route } from '@angular/router';
import { ArticleDetailsComponent } from '../article-list/article-details/article-details.component';
import { HtmlContentResolver } from '../html-content.resolver';
import { ArticleListComponent } from '../article-list/article-list.component';

export const TUTORIALS_ROUTES: Route[] = [
{
    path: '',
    component: ArticleListComponent,
    data: { articleType: 'tutorials', title:'Tutorials', intro: 'Quick bytes of knowledge on how to do something, usually small 😁.' }

},
{
  path: ':fileName',
  component: ArticleDetailsComponent,
  resolve: {articleContent: HtmlContentResolver  },

},
];
