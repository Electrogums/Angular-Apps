import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { DetallepeliculaComponent } from './components/detallepelicula/detallepelicula.component';

const app_routes: Routes = [
  { path: 'home', component: PeliculasComponent },
  { path: 'buscar', component: BuscarComponent },
    { path: 'buscar/:texto', component: BuscarComponent },
  { path: 'detalle/:id', component: DetallepeliculaComponent },
    { path: 'detalle/:id/:texto', component: DetallepeliculaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
