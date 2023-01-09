import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit{

  constructor(private route : ActivatedRoute){

  }
  articleContent! : SafeHtml
  ngOnInit(): void {
    console.log("ngOnInit: article-details");
    this.articleContent = this.route.snapshot.data['articleContent'];
  }

}
