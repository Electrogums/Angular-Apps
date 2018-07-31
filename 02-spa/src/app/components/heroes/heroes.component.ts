import { Component, OnInit } from '@angular/core';
import {HeoresService,IHeroe} from '../../service/heroes.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:IHeroe[]=[];
  constructor(private _heroesService:HeoresService,private router:Router) {

  }

  ngOnInit() {
    this.heroes=this._heroesService.getHeroes();
  }
  verHeroe(idx:number){
   this.router.navigate(["/heroe",idx]);
  }
}
