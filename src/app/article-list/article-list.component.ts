import { Component, Inject, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import { reflections } from '../repo';
import { Article } from '../models';
import { forkJoin, from, mergeMap } from 'rxjs';
import { ArticlePreviewCardComponent } from "./article-preview-card/article-preview-card.component";
import { ARTICLES, BASE_URL } from '../inject-tokens';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
    selector: 'app-article-list',
    standalone: true,
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.scss'],
    imports: [CommonModule, ArticlePreviewCardComponent]
})
export class ArticleListComponent implements OnInit{

  sanitizer = inject(DomSanitizer);

  publicArticles :Article[] = [];
  articleType : string = '';
  title: string = '';
  intro: string = '';

  constructor( @Inject(BASE_URL) public baseUrl: string,
              @Inject(ARTICLES) private articles:Article[],
              private route: ActivatedRoute){
      }
  ngOnInit(): void {
    this.title = this.route.snapshot.data['title'];
    this.intro = this.route.snapshot.data['intro'];
    this.articleType = this.route.snapshot.data['articleType'];
    this.publicArticles = this.articles.filter((article: Article) => article.articleType === this.articleType);

  }

}
