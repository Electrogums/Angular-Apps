import { Component,Input} from '@angular/core';
import { IPelicula } from '../../interfaces/pelicula';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html'
})
export class CoverComponent {
  @Input()
  texto:string;
  @Input()
  peliculas:IPelicula[]=[];
  constructor(public _router:Router) { }

  verPelicula(pelicula:IPelicula){
  if (this.texto) {
    
  this._router.navigate(['/detalle',pelicula.id,this.texto]);
}else{
      this._router.navigate(['/detalle',pelicula.id]);
}
  }


}
