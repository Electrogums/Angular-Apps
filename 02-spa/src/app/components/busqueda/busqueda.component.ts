import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeoresService,IHeroe} from "../../service/heroes.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {
 //let heroesArr:IHeroe[]=[];
heroes:IHeroe[];
termino:string;
  constructor(private activatedRoute:ActivatedRoute,private _heroeServicio:HeoresService) {
  }

  ngOnInit() {
    //busqueda
    this.activatedRoute.params.subscribe(params=>{
    this.heroes=this._heroeServicio.buscarHeroe(params['termino']);
    this.termino=params['termino'];
  })
  }

}
