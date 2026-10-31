import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BOOKS } from '../../nav-config';

@Component({
  selector: 'app-top-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './top-nav.html',
  styleUrl: './top-nav.scss',
})
export class TopNav {
  protected readonly books = BOOKS;
}
