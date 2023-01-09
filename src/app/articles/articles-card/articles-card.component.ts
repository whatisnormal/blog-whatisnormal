import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from 'src/app/models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-articles-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './articles-card.component.html',
  styleUrls: ['./articles-card.component.scss']
})
export class ArticlesCardComponent {

  @Input()
  article!: Article
}
