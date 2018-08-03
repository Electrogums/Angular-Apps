import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private ele:ElementRef) {
  console.log("directiva llamada");
    //this.ele.nativeElement.style.backgroundColor="yellow";
   }
@Input("appResaltado") nuevoColor:string;




@HostListener('mouseenter') mouseentro(){
    this.resaltar(this.nuevoColor||"yellow");
}
@HostListener('mouseleave') mouseleve(){
    this.resaltar(this.nuevoColor||null);
}
private resaltar(color :string){
    this.ele.nativeElement.style.backgroundColor=color;
}

}
