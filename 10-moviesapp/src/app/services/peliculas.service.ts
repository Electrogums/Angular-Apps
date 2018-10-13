import { Injectable } from '@angular/core';
import {Jsonp,Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
private apiKey:string="";
private urlMoviedb:string="https://api.themoviedb.org/3";

  constructor(private jsonp:Jsonp, private http:Http) {
   }

getPelicula(id:string){
let url=`${this.urlMoviedb}/movie/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

  return this.jsonp.get(url).map(res=>{
    return res.json();

  })
}
   getPopulares(){
     let url=`${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
     return this.jsonp.get(url).map(res=>{
       return res.json()["results"];
     })

   }
   getPopularesKids(){
     let url=`${this.urlMoviedb}/discover/movie?certification_country=MX&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
     return this.jsonp.get(url).map(res=>{
       return res.json()["results"];
     })

   }

   getInTheTheatres(){
     let fecha= new Date();
     let dd=fecha.getDate();
     let mm=fecha.getMonth();
     let yyyy=fecha.getFullYear();
     let fechaForamtoInicio=`${yyyy}-${mm}-${dd}`;
     let fechaForamtoFin=`${yyyy}-${mm+1}-${dd+2}`;
     let url=`${this.urlMoviedb}/discover/movie?primary_release_date.gte=${fechaForamtoInicio}&primary_release_date.lte=${fechaForamtoFin}?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
     return this.jsonp.get(url).map(res=>{
       return res.json()["results"];

     })
   }
   buscarPelicula(text:string){
     let url=`${this.urlMoviedb}/search/movie?api_key=${this.apiKey}&language=es&query=${text}&callback=JSONP_CALLBACK`;

//https://api.themoviedb.org/3/search/movie?api_key=8577774cbfe8406f195650f957d90efe&language=es&query=tron&callback=JSONP_CALLBACK
     return this.jsonp.get(url).map(res=>{
       return res.json()["results"];
     })


   }
}
