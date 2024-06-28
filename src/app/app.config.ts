import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { TemplatePageTitleStrategy } from './services/title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
      BrowserAnimationsModule
    ),
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy,
    },
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
};
