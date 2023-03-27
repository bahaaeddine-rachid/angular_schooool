import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/Security/services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {


  constructor(private token:TokenStorageService,
    private router:Router){

  }
  canActivate(){
    if(!this.token.isLogged()){
      this.router.navigateByUrl("/login")
      return false;
    }
    return true;
  }

}
