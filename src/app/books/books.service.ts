import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  constructor() {}

  getBooks() {
    return [
      {
        name: 'clean code',
        author: 'robert c',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51qX2RGyhhL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount: 200,
      },
      {
        name: 'The Lioness: A Novel Kindle Edition',
        author: 'chris b',
        img: 'https://m.media-amazon.com/images/I/41Olm6iGWVL._SY346_.jpg',
        amount: 300,
      },
      {
        name: 'A Brief History of Time',
        author: 'stephen hawking',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51+GySc8ExL._SY344_BO1,204,203,200_.jpg',
        amount: 150,
      },
      {
        name: 'Diary of a Wimpy Kid, Book 1',
        author: 'jeff kinney',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51znoqd9roL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
        amount: 150,
      },
    ];
  }
}
