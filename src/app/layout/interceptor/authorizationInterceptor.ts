import { HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { TokenStorageService } from "src/app/Security/services/token-storage.service";
import { SnackBarServiceService } from "src/app/services/snack-bar-service.service";
import {catchError,throwError} from 'rxjs'
export const AuthorizationInterceptorFn = (req:HttpRequest<any>,
  next:HttpHandlerFn)=>{

    const loaderService=inject(TokenStorageService)

    const snackBar=inject(SnackBarServiceService)

    if(loaderService.isLogged()){
      let header=new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + loaderService.getToken()
      })
      const cloned=req.clone({headers:header})
      return next(cloned).pipe(
        catchError(err=>{
          snackBar.openSnackBar(err.error.message,"fermer")
          return throwError(err.error.message)
        }))


    }


    return next(req)
  }
