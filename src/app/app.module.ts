import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { BooksModule} from './books/books.module';
import { AppComponent } from './app.component';

import { Safe } from './safe';
import {AppRouting} from './app-routing';
import { DashboardComponent } from './dashboard.component';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    Safe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    BooksModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
