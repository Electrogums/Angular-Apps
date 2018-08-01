import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent  {
toptracks:any[]=[];
artista:any={};
loading:boolean;

constructor(private _router:ActivatedRoute, private _spotify:SpotifyService) {
    this._router.params.subscribe(params=>{
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }
getArtista(idx:string ){
  this.loading=true;
  this._spotify.getArtista(idx).subscribe(artista=>{
  this.artista=artista
      this.loading=false;
  });
}
getTopTracks(idx:string){

this._spotify.getTopTracks(idx).subscribe((topTracks:any[])=>{
  this.toptracks=topTracks;
    this.loading=false;
  console.log(this.toptracks);
});

}

}
