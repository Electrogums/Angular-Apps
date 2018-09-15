import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection,AngularFirestore } from 'angularfire2/firestore';
import { IMensaje } from '../interface/mensaje.interface';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
 private itemsCollection: AngularFirestoreCollection<IMensaje>;
 public chats:IMensaje[]=[];
 public usuario:any={};
  constructor(private afs: AngularFirestore,public afAuth: AngularFireAuth ) {
  afAuth.authState.subscribe(user=>{
    console.log('estado del usuario',user);
      if (!user) {
        return;
      }
      this.usuario.nombre=user.displayName;
      this.usuario.uid=user.uid;

  });
   }

  login(provedor:string) {
    if (provedor=="google") {
          this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }else{
          this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
     }
    }
  logout() {
      this.usuario={};
      this.afAuth.auth.signOut();
   }

  cargarMensajes(){
    this.itemsCollection=this.afs.collection<IMensaje>('chats',ref=>ref.orderBy('fecha','desc')
                                                                                .limit(5) );
    return this.itemsCollection.valueChanges().pipe(map((mensajes:IMensaje[])=>{
      console.log(mensajes);
      this.chats=[];
      for (let mensaje of mensajes) {
          this.chats.unshift(mensaje);
      }
      return mensajes;
      // this.chats=mensajes;
    }))
  }

  agregarMensaje(text:string){
let mensaje:IMensaje={
  nombre:this.usuario.nombre,
  mensaje:text,
  fecha:new Date().getTime(),
  uid:this.usuario.uid

}
return this.itemsCollection.add(mensaje);

  }
}
