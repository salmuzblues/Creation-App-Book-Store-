import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BookStoreService} from '../book-store.service';
import {Location} from '@angular/common';
import {Book} from '../book';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {
// Using Form-Reactive
// var fromGroup
newBookForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router
             , private location: Location, private bookStoreService: BookStoreService) { }

  ngOnInit() {
    this.newBookForm = this.formBuilder.group({
       isbn: ['', Validators.required],
       title: ['', Validators.required],
       authors: ['', Validators.required],
      published: ['', Validators.required],
      description: ['', Validators.required],
      coverImage: ['', Validators.required]
      });
  }
// method save Book
  saveBook() {
    if (this.newBookForm.valid) {
      var book = this.newBookForm.value as Book;
      this.bookStoreService.addBook(book).subscribe(res => this.router.navigate(['/books']));
    }
  }

  goBack() {
    this.location.back();
  }
}
