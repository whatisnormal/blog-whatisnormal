import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from 'src/app/models';
import { RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-article-preview-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article-preview-card.component.html',
  styleUrls: ['./article-preview-card.component.scss']
})
export class ArticlePreviewCardComponent {

  private artSubj = new BehaviorSubject<Article|undefined>(undefined);
  article$ = this.artSubj.asObservable();

  @Input()
  set article (value: Article){
    this.artSubj.next(value);
  }
}
