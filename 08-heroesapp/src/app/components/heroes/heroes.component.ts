import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent {
heroes:any[]=[];
loading:boolean=true;
  constructor(private _heroeService:HeroesService) {
    this._heroeService.getHeroes().subscribe(heroes=>{

        console.log(this.heroes);
        this.heroes=heroes;
        this.loading=false;
        // setTimeout(()=>{ this.loading=false,
        //                  this.heroes=heroes},3000);
    })
  }

borraHeroe(key:string){

this._heroeService.borrarHeroe(key).subscribe(resp=>{
  console.log(resp);

  if (resp) {
      console.error(resp);
  }else{

    delete this.heroes[key];
  }
});

}
}
