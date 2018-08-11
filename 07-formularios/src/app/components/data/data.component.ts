import { Component } from '@angular/core';
import {FormGroup,FormControl ,Validators} from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent  {
forma:FormGroup;
usuario:Object={
  nombreCompleto:{
    nombre:"erick",
    apellido:"llanos"
  },
  correo:"erickllanos30@gmail.com",
//  pasatiempos:["correr","dormir","comer"]
}

  constructor() {

    console.log(this.usuario);
   this.forma= new FormGroup({
     'nombreCompleto': new FormGroup({
       'nombre':new FormControl('',   [Validators.required,
                                      Validators.minLength(3)]),
       'apellido':new FormControl('',[Validators.required,
       this.noLlanos])
     }),

     'correo':new FormControl('',    [
                                    Validators.required,
                                    Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    'pasatiempos': new FormArray([
      new FormControl('Correr' ,Validators.required)
    ]),
    'username':new FormControl('',Validators.required,this.existeUsuario),
    'password1': new FormControl('',Validators.required),
    'password2': new FormControl()
   })
   this.forma.controls['password2'].setValidators([
     Validators.required,
     this.noIgual.bind(this.forma)
   ])
   // this.forma.setValue(this.usuario);

   this.forma.controls['username'].statusChanges
   .subscribe(data=>{
     console.log("suscribimos al status "+data)
   });


 //nos subscribimos a el usuario
   this.forma.controls['username'].valueChanges
   .subscribe(data=>{
     console.log("cambio en username"+data)
   });

   //detectar cualquier cambio en el form
   this.forma.valueChanges
   .subscribe(data=>{
     console.log(data);
   })
 };

agregarPasatiempo(){
  (<FormArray>this.forma.controls["pasatiempos"]).push(
    new FormControl('',Validators.required)
  )
}
noIgual(control:FormControl):{[s:string]:boolean}{
  let forma:any=this;
  if (control.value !==forma.controls['password1'].value) {
    return {
      noiguales:true
    }
  }
    return null;
}

existeUsuario(control:FormControl):Promise<any>|Observable<any>{
 let promesa= new Promise(
   (resolve,reject)=>{
     setTimeout(()=>{
       if (control.value==="ellanos") {
          resolve({existe:true})
       }else {
         resolve(null)
       }
     },3000)
   }
 );
 console.log(promesa);
 return promesa;
}

noLlanos(control:FormControl):{[s:string]:boolean}{
  if (control.value==="llanos") {
    return {
      noLlanos:true
    }
  }
    return null;
}
guardarCambios(){
  console.log(this.forma.value);
    console.log(this.forma);
    // this.forma.reset({
    //   nombreCompleto:{
    //     nombre:"",
    //     apellido:""
    //   },
    //   correo:""
    // });
}

}
