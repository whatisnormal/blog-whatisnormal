import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "./card/card.component";

@Component({
    selector: 'app-cards-list',
    standalone: true,
    templateUrl: './cards-list.component.html',
    styleUrls: ['./cards-list.component.scss'],
    imports: [CommonModule, CardComponent]
})
export class CardsListComponent {

}
