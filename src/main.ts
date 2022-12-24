// in the main.ts file
import {bootstrapApplication} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';



bootstrapApplication(AppComponent, {
  providers: [
    {provide: "BACKEND_URL", useValue: 'https://photoapp.looknongmodules.com/api'},
    provideRouter(
      APP_ROUTES,
      withDebugTracing(),
    )
    // ...
  ]
});
