import { Component,OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { IPelicula } from '../../interfaces/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html'
})
export class PeliculasComponent implements OnInit {
  peliculasPopulares:IPelicula[]=[];
  peliculasEnCines:IPelicula[]=[];
  peliculasKids:IPelicula[]=[];
  cargando:boolean;
  titulo:string="";
    constructor( public _ps:PeliculasService) {
  }
  ngOnInit(): void {
    this.cargando=true;
     this.loadInTheTheathre();
     this.loadPopulares();
     this.loadPopularesKids();
    this.cargando=false;
  }

  loadPopularesKids(){
    this._ps.getPopularesKids().subscribe((kids=>{
        this.peliculasKids=kids;
        this.peliculasKids.forEach((res)=>res.poster_path=`url(http://image.tmdb.org/t/p/w300/${res.poster_path})`);
        this.peliculasKids.forEach((res)=>res.backdrop_path=`url(http://image.tmdb.org/t/p/w300/${res.backdrop_path})`);
}));

  }
  loadInTheTheathre(){

    this._ps.getInTheTheatres().subscribe((recientes=>{
             this.peliculasEnCines=recientes;
             this.peliculasEnCines.forEach((res)=>res.poster_path=`url(http://image.tmdb.org/t/p/w300/${res.poster_path})`);
             this.peliculasEnCines.forEach((res)=>res.backdrop_path=`url(http://image.tmdb.org/t/p/w300/${res.backdrop_path})`);

    }));

  }
  loadPopulares(){

    this._ps.getPopulares().subscribe((peliculas)=>{
            this.peliculasPopulares=peliculas;
            this.peliculasPopulares.forEach((res)=>res.poster_path=`url(http://image.tmdb.org/t/p/w300/${res.poster_path})`);
            this.peliculasPopulares.forEach((res)=>res.backdrop_path=`url(http://image.tmdb.org/t/p/w300/${res.backdrop_path})`);

    })
  }
getUrl(posicion:number,tipoPeli:string){

if (this.peliculasPopulares[posicion] && this.peliculasEnCines[posicion]){
   let cadena:string="";
    if (tipoPeli==="P") {
        cadena=`url(http://image.tmdb.org/t/p/w300/${this.peliculasPopulares[posicion].poster_path})`;
    }else if (tipoPeli==="C") {
        cadena=`url(http://image.tmdb.org/t/p/w300/${this.peliculasEnCines[posicion].poster_path})`;
    }else if (tipoPeli==="PK") {
        cadena=`url(http://image.tmdb.org/t/p/w300/${this.peliculasKids[posicion].poster_path})`;
    }
     return  cadena;
  }
else
  return  `url(/assets/img/no-image.png)`;

}



}
