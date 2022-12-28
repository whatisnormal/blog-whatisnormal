import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  readonly siteName :string ="whatisnormal.github.io";

  sections = [
    {
      key :"articles",
      title: "Articles",
      description: "Opinion pieces, commentary on existing technologies and some of the stuff that's happening in the world."
    }
  ]

}
