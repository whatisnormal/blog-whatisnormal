import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Meta, SafeHtml } from '@angular/platform-browser';
import { Article } from 'src/app/models';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit{

  constructor(private route : ActivatedRoute,private meta: Meta){
  }

  articleData! : {article: Article, content: SafeHtml}

  ngOnInit(): void {
    this.articleData = this.route.snapshot.data['articleContent'];
    this.meta.updateTag({name:'keywords', content:  (this.articleData.article.tags as string[]).join(',')})
  }

}
