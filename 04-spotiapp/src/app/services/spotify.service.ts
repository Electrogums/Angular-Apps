import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
   }
getQuery(query:string){
  const url=`https://api.spotify.com/v1/${query}`;
  const headers = new HttpHeaders({
    'Authorization':'Bearer BQCCvJ5PmNWJ_UTg9AIRqnmKA4BZXy7b57YQhniB8UPWmTHdOe57inXZzBKlFi81o05iU3W3vD4cc6BZKdA'});
    return this.http.get(url,{headers});
}
   getNewReleases(){
     return this.getQuery('browse/new-releases?limit=20')
         .pipe(map(data=>data['albums'].items));
   }
   getArtistas(termino:string){
          return this.getQuery(`search?query=${termino}&type=artist&market=MX&offset=0&limit=15`)
            .pipe(map(data=>data['artists'].items));
   }
   getArtista(idx:string){
          return this.getQuery(`artists/${idx}`);
   }
   getTopTracks(idx:string){
     //	https://api.spotify.com/v1/artists/{id}/top-tracks
          return this.getQuery(`artists/${idx}/top-tracks?country=us`)
            .pipe(map(data=>data['tracks']));
   }
}
