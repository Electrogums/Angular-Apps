import { Component, OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
template:`<div class="container main-container">
<app-ng-style></app-ng-style>
<app-css></app-css>
<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
<app-clases></app-clases>
<p [appResaltado]="'red'"  >hola mundo</p>
<app-ng-switch></app-ng-switch>
`
})
export class HomeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  constructor() {console.log("constructor"); }

  ngOnDestroy(): void {
  console.log("OnDestroy");
  }
  ngAfterViewChecked(): void {
  console.log("AfterViewChecked");
  }
  ngAfterViewInit(): void {
  console.log("ngAfterViewInit");
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked");
  }
  ngAfterContentInit(): void {
  console.log("ngAfterContentInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }
  ngOnInit() {
    console.log("ngOnInit");
  }
}
