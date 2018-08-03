import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: '<h2>usuario nuevo </h2>'
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
      this.route.parent.params.subscribe(param=>{
        console.log("ruta hija");
        console.log(param);
      })
   }
  ngOnInit() {
  }

}
