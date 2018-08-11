import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
    `]
})
export class TemplateComponent {
usuario:Object={
  nombre:null,
  apellido:null,
  correo:null,
  paises:"",
  sexo:"Hombre",
  acepta:false

};
paises=[{
  codigo:"MEX",
  nombre:"México"
},
{  codigo:"ES",
  nombre:"España"},
  {  codigo:"COL",
     nombre:"Colombia"},
];

sexos:string[]=["Hombre","Mujer","sin definir"];
  constructor() { }

  guardar(forma:NgForm){
    console.log("ngForm ",forma);
    console.log("valor forma",forma.value);
    console.log("usuario",this.usuario);
  }

}
