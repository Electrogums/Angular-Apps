import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {
loading:boolean;
  constructor(private spotify:SpotifyService) {

  }

artistas:any[]=[];
buscar(termino:string){
if (termino.trim().length>0) {
    this.loading=true;
    this.spotify.getArtistas(termino).subscribe((artistas:any)=>{
      this.artistas=artistas;
      this.loading=false;
    });
      }
}
}
