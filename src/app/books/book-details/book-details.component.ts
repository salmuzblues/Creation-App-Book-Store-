import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Location } from '@angular/common';

import { Book } from '../book';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BookStoreService} from '../book-store.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit{

book: Book;

constructor(private route: ActivatedRoute, private router: Router, private location: Location
            , private bookStoreServices: BookStoreService) {}
            /*usaremos ActivatedRoute para acceder a los
  parámetros de ruta usando la propiedad Params, que es un Observable.
 Estamos usando el operador switchMap() en los Params Observable para recibir los últimos parámetros, y
luego invocamos el BookStoreService y pasamos el id como parámetro al método
getBook() usando +params['id'].
Params es un Observable, y recibirá los nuevos valores y los emitirá
El operador switchMap() siempre se suscribe al último
Observable, y siempre usará los valores más recientes y ejecutará el código. En nuestro caso,
obtiene los datos del servicio utilizando el parámetro id.*/
ngOnInit(): void {
this.route.params.switchMap((params: Params) => this.bookStoreServices.getBook(+params['id'])).subscribe(
  book => this.book = book);
}
// method delete book
  /* Tan pronto recibamos la respuesta del servicio,
usamos el métodonavigate() del objeto Router para volver a BooksListComponent */
  deleteBook(id: number) {
  this.bookStoreServices.deleteBook(id).subscribe(res => this.router.navigate(['/books']));
  }
/*También estamos utilizando el método back() del objeto Location para volver a la ruta
anterior; El objeto Location utiliza el historial del navegador para navegar hacia atrás y
hacia adelante.   */
  goBack() {
  this.location.back();
  }
}
