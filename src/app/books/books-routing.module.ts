
import { RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NewBookComponent } from './new-book/new-book.component';


const  routes: Routes = [
  /* Si miramos nuestra primer route, la propiedad path está vacía; especificamos la
propiedad redirectTo. Cada vez que iniciemos la aplicación comenzamos con /,
redireccionará a la ruta del books
  { path: '', redirectTo: 'books', pathMatch: 'full'}, */
  { path: 'books', component: BooksListComponent },
  { path: 'books/new', component: NewBookComponent },
  { path: 'books/:id', component: BookDetailsComponent }
];
// ngModule
@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class BooksRoutingModule {
}
