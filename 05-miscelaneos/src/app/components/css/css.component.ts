import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: ` <p>hola mundo </p> `,
  styles: [`
    p {
  
    font-size:30px; }
     ` ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
