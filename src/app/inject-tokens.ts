
import { InjectionToken } from '@angular/core';
import { Article } from './models';

export const BASE_URL = new InjectionToken<string>('');
export const ARTICLES = new InjectionToken<Article[]>('');

export const APP_CONFIG = new InjectionToken<any>('');
