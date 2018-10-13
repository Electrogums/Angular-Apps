import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JsonpModule,HttpModule } from '@angular/http';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { APP_ROUTING } from './app-routing.module';
import { DetallepeliculaComponent } from './components/detallepelicula/detallepelicula.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { CoverComponent } from './components/cover/cover.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    BuscarComponent,
    NavbarComponent,
    DetallepeliculaComponent,
    NoimagePipe,
    DomseguroPipe,
    CoverComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    HttpModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
