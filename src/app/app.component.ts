import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet,
      RouterLinkWithHref,

      NavbarComponent]
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta,
              private titleService: Title,
              @Inject(PLATFORM_ID) private platformId: object
    ){

  }
  ngOnInit(): void {
    this.titleService.setTitle('Whatisnormal reflections');
    this.meta.addTag({name: 'author',content: 'whatisnormal'});
    this.meta.addTag({name: 'description',content: 'Thoughts about the world or even quick bytes on how to do something.'});
    this.meta.addTag({name: 'keywords',content: 'Tutorials, Reflections'});
  }
}
