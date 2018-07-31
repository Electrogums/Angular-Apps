import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {HeoresService} from "../../service/heroes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
heroe:any={};


  constructor(private activatedRoute:ActivatedRoute,private _heoresservice:HeoresService, private router:Router) {
    this.activatedRoute.params.subscribe(params=>{
      this.heroe=this._heoresservice.getHeroe(params['id']);
    })
   }
   regresar(){
     this.router.navigate(["/heroes"]);
   }
}
