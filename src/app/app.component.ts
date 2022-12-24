import { Component } from '@angular/core';
import { PhotoGalleryComponent } from "./photos/photo-gallery.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet,
      RouterLinkWithHref,

      NavbarComponent]
})
export class AppComponent {
  title = 'angular-tests';
}
