import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookStoreService } from '../book-store.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  //  Var
  booksList: Book [];
  constructor(private bookStoreService: BookStoreService) { }

  ngOnInit() {
    this.getBooksList();
  }

  getBooksList() {
    this.bookStoreService.getBooks().subscribe(books => this.booksList = books);
  }

}
