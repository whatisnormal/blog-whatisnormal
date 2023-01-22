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
      key :"reflections",
      title: "Reflections",
      description: "Opinion pieces, commentary on a plethora of topics happening. Technology? My Country? Society? Probably will be here"
    },
    {
      key :"tutorials",
      title: "Tutorials",
      description: "Quick bytes of knowledge on how to do something, usually small 😁."
    }
  ]

}
