import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot,RouterStateSnapshot,CanActivate } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(next);
if (this.auth.isAuthenticated()) {
    console.log("paso el guard");
    return true;
}else{
    console.log("bloqueado por el guard");
    return false;
}

  }
  constructor(private auth:AuthService) {
  }
}
