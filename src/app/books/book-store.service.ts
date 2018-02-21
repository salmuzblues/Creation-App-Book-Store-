import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Book } from './book';

@Injectable()
export class BookStoreService {

  baseUrl: string = 'http://localhost:4567';
  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getBook(id: number): Observable<Book> {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.get(url)
      .map(response => response.json() as Book);
  }

  getBooks(): Observable<Book[]> {
    const url = `${this.baseUrl}/books`;
    return this.http.get(url)
      .map(response => response.json() as Book[]);
  }

  deleteBook(id: number) {
    const url = `${this.baseUrl}/books/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .map(response => response.json());
  }
  addBook( book: Book) {
  const url = `${this.baseUrl}/books`;
  /* The JSON.stringify() method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified, or optionally
  including only the specified properties if a replacer array is specified.
  The Map operator applies a function of your choosing to each item emitted by the source Observable,
   and returns an Observable that emits the results of these function applications. */
  const body = JSON.stringify(book);
  return this.http.post(url, body, {headers: this.headers}).map(response => response.json());
  }
}
