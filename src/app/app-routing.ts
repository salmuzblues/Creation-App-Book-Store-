
import { RouterModule, Routes} from '@angular/router';
import { BooksListComponent, BookDetailsComponent, NewBookComponent} from './books';
import {NgModule} from '@angular/core';


const  routes: Routes = [
  /* Si miramos nuestra primer route, la propiedad path está vacía; especificamos la
propiedad redirectTo. Cada vez que iniciemos la aplicación comenzamos con /,
redireccionará a la ruta del books */
  { path: '', redirectTo: 'books', pathMatch: 'full'},
  { path: 'books', component: BooksListComponent },
  { path: 'books/new', component: NewBookComponent },
  { path: 'books/:id', component: BookDetailsComponent }
];
// ngModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRouting {
}
