import { Component, OnInit } from '@angular/core';

import { Book } from '../types/book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService) {}
  books: Book[] = [];

  // cart: Book[] = [];
  // isDisabled: boolean = false;

  //Event handlers
  // changeBtn() {
  //   this.isDisabled = true;
  //   setTimeout(() => {
  //     this.isDisabled = false;
  //   }, 3000);
  // }

  // inputName: string = '';

  // handleInput(event: any) {
  //   this.inputName = event.target.value;
  // }
  isShowing: boolean = true;
  handleBtn() {
    this.isShowing = !this.isShowing;
  }

  // addCart(book: Book) {
  //   console.log(book);
  // }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
}
