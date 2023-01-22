import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { ARTICLES } from './inject-tokens';
import { Article } from './models';

@Injectable({
  providedIn: 'root'
})
export class HtmlContentResolver implements Resolve<SafeHtml> {


  constructor(private httpClient : HttpClient, private sanitizer : DomSanitizer,@Inject(ARTICLES) private articles: Article[],
  ){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{article: Article,content: SafeHtml}> {
    const articleType = route.data['articleType'];
    const fileName = route.paramMap.get('fileName');

    const article : Article= this.articles.find((article: Article)=> article.fileName === fileName) as Article;
    const relativeFileName = `../assets/${articleType}/${fileName}.html`;

    return this.httpClient.get(relativeFileName,{responseType:'text'}).pipe(
      map((html : string)=> {
         return {
          article,
          content: this.sanitizer.bypassSecurityTrustHtml(html)
        }
        })
    );
  }
}
