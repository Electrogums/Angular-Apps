import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { IHeroe } from '../interfaces/heroe.interface';
import   'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
fireUrl="https://url/heroes.json";
heroeUrl="https://url/heroes/";

  constructor(private http:Http ) { }
//post
  nuevoHeroe(heroe:IHeroe){
    let body=JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type':'application/json'});

      return this.http.post(this.fireUrl,body,{headers})
      .map(res=>{
        console.log(res.json());
      return res.json();
      })
}

//put
  actualizarHeroe(heroe:IHeroe,key$:string){
    let body=JSON.stringify(heroe);
    let headers = new Headers({'Content-Type':'application/json'});
    let url= this.heroeUrl+`/${key$}.json`;

      return this.http.put(url,body,{headers})
      .map(res=>{
        console.log(res.json());
      return res.json();
      })
}
getHeroe(key$:string){
 let url = `${this.heroeUrl}/${key$}.json`;
 return this.http.get(url).map(res=>res.json());
}
getHeroes(){
 return this.http.get(this.fireUrl).map(res=>res.json());
}

borrarHeroe(key:string){
let url=`${this.heroeUrl}/${key}.json`;
return this.http.delete(url).map(resp=>{resp.json();});
}

}
