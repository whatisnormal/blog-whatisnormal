import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from 'src/app/models';
import { RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-articles-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './articles-card.component.html',
  styleUrls: ['./articles-card.component.scss']
})
export class ArticlesCardComponent {

  private artSubj = new BehaviorSubject<Article|undefined>(undefined);
  article$ = this.artSubj.asObservable();

  @Input()
  set article (value: Article){
    this.artSubj.next(value);
  }
}
