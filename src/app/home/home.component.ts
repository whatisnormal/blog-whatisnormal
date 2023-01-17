import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BASE_URL } from '../inject-tokens';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  readonly siteName :string ="";

  constructor( @Inject(BASE_URL) private baseUrl: string,
  ){
    this.siteName = baseUrl;
  }

  sections = [
    {
      key :"articles",
      title: "Articles",
      description: "Opinion pieces, commentary on existing technologies and some of the stuff that's happening in the world."
    }
  ]

}
