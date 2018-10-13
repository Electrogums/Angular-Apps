import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { IPelicula } from '../../interfaces/pelicula';
import { PeliculasService } from '../../services/peliculas.service';
import {Router} from '@angular/router';
import { NoimagePipe } from '../../pipes/noimage.pipe';
@Component({
  selector: 'app-detallepelicula',
  templateUrl: './detallepelicula.component.html'
})
export class DetallepeliculaComponent {
loading:boolean;
pelicula:IPelicula;
texto:string;
  constructor(private _act:ActivatedRoute,public _ps:PeliculasService,public _router:Router) {

  this._act.params.subscribe(params=>{
        this.getPelicula(params['id']);
        this.texto=params['texto'];
 });

}
getPelicula(idx:string ){
  this.loading=true;
  this._ps.getPelicula(idx).subscribe(peli=>{
  this.pelicula=peli;
  if (this.pelicula)
      this.pelicula.poster_path = new NoimagePipe().transform(this.pelicula);


  // console.log(this.pelicula);
  // this.pelicula.poster_path=(`url(http://image.tmdb.org/t/p/w500/${this.pelicula.poster_path})`);
  // this.pelicula.backdrop_path=(`url(http://image.tmdb.org/t/p/w500/${this.pelicula.backdrop_path})`);
  this.loading=false;
  });

}
regresa(){
  if (this.texto) {
    this._router.navigate(['/buscar',this.texto]);
}else{
      this._router.navigate(['/home']);
}
}

}
