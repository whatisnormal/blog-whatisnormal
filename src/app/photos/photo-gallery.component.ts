import { Component } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'photo-gallery',
  // an existing module is imported directly into a standalone component
  imports: [MatButtonModule],
  template: `
    <button mat-raised-button>Next Page</button>
  `,
})
export class PhotoGalleryComponent {
  // logic
}
