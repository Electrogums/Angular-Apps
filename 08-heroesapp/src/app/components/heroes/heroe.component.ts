import { Component, OnInit } from '@angular/core';
import {NgForm} from   '@angular/forms';
import {IHeroe } from '../../interfaces/heroe.interface';
import {HeroesService } from '../../services/heroes.service';
import {Router,ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
heroe:IHeroe ={
  nombre:"",
  bio:"",
  casa:""
}
creando:boolean=false;
id:string="";
  constructor(private _heroeService:HeroesService,private _router:Router,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      parametros=>{
        console.log(parametros);
        this.id=parametros["id"];
        if (this.id!="nuevo") {
            this._heroeService.getHeroe(this.id).subscribe(heroe=>{this.heroe=heroe;})
        }
      }
    );
  }

  ngOnInit() {
  }
guardar(){

  //insertar
  console.log(this.heroe);
  if (this.id=="nuevo") {
       this._heroeService.nuevoHeroe(this.heroe).subscribe( res=>{
       this._router.navigate(['/heroe',res.name])
    },
      error=>console.error(error));
//actualizar
  }else{
     this._heroeService.actualizarHeroe(this.heroe,this.id).subscribe( res=>{
     console.log(res.name);},
     error=>console.error(error));
      }
}
 agregarNuevo(form:NgForm){
  this._router.navigate(['/heroe','nuevo']);
  form.reset({
    casa:"Marvel",
  });

 }

}
