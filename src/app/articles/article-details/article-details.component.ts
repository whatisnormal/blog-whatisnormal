import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SafeHtml } from '@angular/platform-browser';
import { MatChipsModule } from '@angular/material/chips';
import { Article } from 'src/app/models';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit{

  constructor(private route : ActivatedRoute){
  }

  articleData! : {article: Article, content: SafeHtml}

  ngOnInit(): void {
    console.log("ngOnInit: article-details");
    this.articleData = this.route.snapshot.data['articleContent'];
  }

}
