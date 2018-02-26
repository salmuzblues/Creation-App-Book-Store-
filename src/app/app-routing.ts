import { RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {AboutComponent} from './about.component';


const  routes: Routes = [
  /* Si miramos nuestra primer route, la propiedad path está vacía; especificamos la
propiedad redirectTo. Cada vez que iniciemos la aplicación comenzamos con /,
redireccionará a la ruta del books */
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent }

];
// ngModule
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRouting {
}
