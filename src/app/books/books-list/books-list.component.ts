import {Component, HostBinding, OnInit} from '@angular/core';
import { Book } from '../book';
import { BookStoreService } from '../book-store.service';
import {slideInOutAnimation} from '../../animations';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  animations: [slideInOutAnimation]
})
export class BooksListComponent implements OnInit {

  //  Var
  booksList: Book [];
  // this is for animations
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  constructor(private bookStoreService: BookStoreService) { }

  ngOnInit() {
    this.getBooksList();
  }

  getBooksList() {
    this.bookStoreService.getBooks().subscribe(books => this.booksList = books);
  }

}
