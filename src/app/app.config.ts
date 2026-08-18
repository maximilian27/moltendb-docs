import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {provideMoltenDb} from "@moltendb-web/angular";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideMoltenDb({
      name: 'docs_db',
      maxBodySize: 100 * 1024 * 1024,
      maxKeysPerRequest: 25000
    })
  ]
};
