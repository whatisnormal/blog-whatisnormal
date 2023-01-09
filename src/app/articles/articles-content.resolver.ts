import { HttpClient } from '@angular/common/http';
import { Injectable, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleContentResolver implements Resolve<SafeHtml> {


  constructor(private httpClient : HttpClient, private sanitizer : DomSanitizer){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SafeHtml> {
    const fileName = route.paramMap.get('fileName');
    const relativeFileName = `../assets/articles/${fileName}.html`;
    return this.httpClient.get(relativeFileName,{responseType:'text'}).pipe(
      map((html : string)=>this.sanitizer.bypassSecurityTrustHtml(html))
    );
  }
}
