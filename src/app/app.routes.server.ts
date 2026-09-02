import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    // MoltenDb runs a WASM worker backed by OPFS, both browser-only APIs. As of
    // @moltendb-web/angular 2.4.0, MoltenDbService guards against SSR internally
    // (stubs on the server, moltenDbResource() resolves to its initialValue with
    // no crash), so this is now a recommendation for a better first paint rather
    // than a requirement to avoid a build/SSR crash.
    path: 'moltendb-test',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
