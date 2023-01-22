import { Route } from '@angular/router';
import { ArticleDetailsComponent } from '../article-list/article-details/article-details.component';
import { HtmlContentResolver } from '../html-content.resolver';
import { ArticleListComponent } from '../article-list/article-list.component';

export const REFLECTIONS_ROUTES: Route[] = [
{
    path: '',
    component: ArticleListComponent,
    data: { articleType: 'reflections', title:'Reflections', intro: 'Thoughts about certain topics! 🤔' }

},
{
  path: ':fileName',
  component: ArticleDetailsComponent,
  resolve: {articleContent: HtmlContentResolver  },
  data: { articleType: 'reflections' }

},
];
