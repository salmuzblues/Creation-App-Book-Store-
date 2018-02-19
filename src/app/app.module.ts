import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookStoreService } from './book-store.service';
import { BooksListComponent } from './books/books-list/books-list.component';
import { NewBookComponent } from './books/new-book/new-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    BooksListComponent,
    NewBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BookStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
