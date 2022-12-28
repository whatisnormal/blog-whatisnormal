import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../cards-list/card/card.component";
import { CardsListComponent } from "../cards-list/cards-list.component";

@Component({
    selector: 'app-articles',
    standalone: true,
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss'],
    imports: [CommonModule, CardsListComponent]
})
export class ArticlesComponent {

}
