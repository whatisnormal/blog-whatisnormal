import { Component, Inject, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import { articles } from './repo';
import { Article } from '../models';
import { forkJoin, from, mergeMap } from 'rxjs';
import { ArticlesCardComponent } from "./articles-card/articles-card.component";

@Component({
    selector: 'app-articles',
    standalone: true,
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss'],
    imports: [CommonModule, ArticlesCardComponent]
})
export class ArticlesComponent implements OnInit{
  name = 'Kissht';
  KisshtHtml!: SafeHtml;
  sanitizer = inject(DomSanitizer);

  publicArticles :Article[] = [];
  constructor(@Inject('articles') private articles:Article[] ,private http:HttpClient){
    this.publicArticles = this.articles;
  }
  ngOnInit(): void {
    // from(articles).pipe(
    //   mergeMap((articles : Article[])=> forkJoin(articles.map()) )
    // );
    // articles.forEach((article: Article)=>{

    // });
    // this.http.get('../assets/articles/test-article.html',{responseType:'text'}).subscribe(res=>{
    //   this.KisshtHtml = this.sanitizer.bypassSecurityTrustHtml(res);
    // })
  }

}
