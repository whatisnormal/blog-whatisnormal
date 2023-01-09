// in the main.ts file
import {bootstrapApplication} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { Article } from './app/models';
import { articles } from './app/articles/repo';



bootstrapApplication(AppComponent, {
  providers: [
    {provide: 'articles', useValue: articles},
    {provide: "BACKEND_URL", useValue: 'https://photoapp.looknongmodules.com/api'},
    provideHttpClient(
      withInterceptors([
       (req, next) => {
          // We can use the inject() function inside this function
          // For example: inject(AuthService)
          return next(req);
        },
      ])
    ),
    provideRouter(
      APP_ROUTES,
      withDebugTracing(),
    )
    // ...
  ]
});
