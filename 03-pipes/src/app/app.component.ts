import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Erick';
  arreglo=[1,2,3,4,5,6,7,8,9,10];
  PI=Math.PI;
  a:number=0.234;
  salario=1234.5;
  heroe={
    nombre:"logan",
    clave:"Wolverin",
    edad:500,
    direccion:{
      calle:"Primera",
      casa:"19"
    }
  };

  valorDePromesa= new Promise((resolve,reject)=>{
    setTimeout( ()=>resolve("llego la data"),3500);
  });

  fecha=new Date();
  nombre2="erickK franciSSco llaNOos PPatiÑÑo";
  video="jNQXAC9IVRw";
  activar:boolean=true;
}
