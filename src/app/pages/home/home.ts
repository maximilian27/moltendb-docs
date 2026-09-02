import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BOOKS } from '../../nav-config';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly books = BOOKS;
}
