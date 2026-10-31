import { Component, afterNextRender, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { Book, getBookById } from '../../nav-config';

// Keep in sync with `$breakpoint-tablet` in `src/styles/sizes.scss`.
const MOBILE_BREAKPOINT_QUERY = '(max-width: 859px)';

@Component({
  selector: 'app-book-layout',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './book-layout.html',
  styleUrl: './book-layout.scss',
})
export class BookLayout {
  private readonly route = inject(ActivatedRoute);

  protected readonly book: Book = (() => {
    const id = this.route.snapshot.data['book'] as string;
    const book = getBookById(id);
    if (!book) {
      throw new Error(`Unknown book id "${id}" in route data.`);
    }
    return book;
  })();

  protected readonly sidebarOpen = signal(true);

  constructor() {
    // The sidebar starts open on desktop (content push) but collapsed on
    // mobile (overlay) so the docs aren't obscured on first load. `window`
    // is only available in the browser, so this defers the check until
    // after the first render instead of running during SSR/prerendering.
    afterNextRender(() => {
      if (window.matchMedia(MOBILE_BREAKPOINT_QUERY).matches) {
        this.sidebarOpen.set(false);
      }
    });
  }

  protected toggleSidebar(): void {
    this.sidebarOpen.update((open) => !open);
  }

  protected closeSidebar(): void {
    this.sidebarOpen.set(false);
  }
}
