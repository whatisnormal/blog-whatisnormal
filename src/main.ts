// in the main.ts file
import {bootstrapApplication} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { articles } from './app/repo';
import { APP_CONFIG, ARTICLES, BASE_URL } from './app/inject-tokens';

const CONFIG = {
  title: 'Reflections'
};

bootstrapApplication(AppComponent, {
  providers: [
    { provide: ARTICLES, useValue: articles },
    { provide: BASE_URL, useValue: 'whatisnormal.github.io' },
    { provide: APP_CONFIG, useValue: CONFIG },
    provideHttpClient(withInterceptors([
        (req, next) => {
            // We can use the inject() function inside this function
            // For example: inject(AuthService)
            return next(req);
        },
    ])),
    provideRouter(APP_ROUTES)
    // ...
    ,
    importProvidersFrom(NoopAnimationsModule)
]
});
