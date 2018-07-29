import {Component} from '@angular/core'
@Component({
  selector:'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent{
  mostrar:true;
frase: any={
  mensaje:"un gran poder conlleva una gran responsabilida",
  author:"Ben Parker"
};
personajes:string[]=["mono","ironman","spiderman"];
}
