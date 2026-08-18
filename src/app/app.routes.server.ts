import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    // MoltenDb runs a WASM worker backed by OPFS, both browser-only APIs, so this
    // route must be rendered on the client instead of prerendered/SSR'd.
    path: 'moltendb-test',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
