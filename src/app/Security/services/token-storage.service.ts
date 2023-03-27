import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { ignoreElements } from 'rxjs';
const TOKEN_KEY :string="test-token";

interface token{
  sub:string;
  authorities:any[];
  iat:string;
  exp:string;

}

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  public logout(){
    localStorage.clear();
    this.router.navigateByUrl("/login")
  }

  public saveToken(token:string){
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);

  }
  public getToken(){
    let token:string | null=localStorage.getItem(TOKEN_KEY);
    return token!=null?token:"";
  }
  public getUser():string{
    const user:token=decode(this.getToken());
  return user.sub;
  }

  getauthorities():string[]{
    const auth:token=decode(this.getToken());

    return auth.authorities;
  }


  getTokenExpirationDate(token:string):any{
    const decoded:token=decode(token);

    if(decoded.exp===undefined)return undefined;

    const date =new Date();
    date.setUTCSeconds(parseInt(decoded.exp));

    return date;
  }

  public isLogged(){
    const token=localStorage.getItem(TOKEN_KEY);
    if(token!=null){

      if(this.isTokenExpired(token)){
        this.logout();
        return false;
      }
      return true;
    }
    console.log(token)
    return false;
  }

  isTokenExpired(token?:string): boolean{
    if(token==null) token=this.getToken();
    if(token==null) return true;


    const date :Date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf()>new Date().valueOf());
  }

  hasAuthorities(authorities:string[]){
    return this.getauthorities().some(r=>authorities.indexOf(r)>=0)

  }
  hasAuthority(authorities:string){
    return this.getauthorities()
    .filter(r=>r==authorities)
    .length>0

  }
  constructor(private router:Router) { }

}
