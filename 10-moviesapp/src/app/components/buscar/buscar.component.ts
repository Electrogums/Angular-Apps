import { Component, OnInit } from '@angular/core';
import { IPelicula } from '../../interfaces/pelicula';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { NoimagePipe } from '../../pipes/noimage.pipe';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {
peliculas:IPelicula[]=[];
 texto:string;
  constructor(public _ps:PeliculasService,private _act:ActivatedRoute) {

    this._act.params.subscribe(params=>{
          this.texto=params['texto'];
          console.log(params['texto']);
          if (this.texto) {
              this.buscar();
          }
   });
 }

  ngOnInit() {
  }
buscar(){
    if (this.texto) {
      this._ps.buscarPelicula(this.texto).subscribe(res=>{
      this.peliculas=res;
      for (let i = 0; i < this.peliculas.length; i++) {
            if (this.peliculas[i]){
                this.peliculas[i].poster_path = new NoimagePipe().transform(this.peliculas[i]);
              }
          }
      })
  }
}

}
