import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { Book, getBookById } from '../../nav-config';

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
}
