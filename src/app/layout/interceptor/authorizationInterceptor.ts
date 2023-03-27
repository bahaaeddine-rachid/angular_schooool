import { HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { TokenStorageService } from "src/app/Security/services/token-storage.service";

export const AuthorizationInterceptorFn = (req:HttpRequest<any>,
  next:HttpHandlerFn)=>{

    const loaderService=inject(TokenStorageService)

    console.log("intercepted")
    if(loaderService.isLogged()){
      let header=new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + loaderService.getToken()
      })
      const cloned=req.clone({headers:header})
      console.log(cloned)
      return next(cloned);
    }


    return next(req)
  }
