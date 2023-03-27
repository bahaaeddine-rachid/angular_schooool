import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Service_etudiantService } from 'src/app/services/service_etudiant.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User= new User();
  constructor(private userService:Service_etudiantService,
     private tokenStorage:TokenStorageService,
     private router:Router
     ){

  }


logout(){
  localStorage.clear();
}


createUser(){
  this.userService.createUser(this.user).subscribe(resp=>{
    this.userService=resp
  });
}

login(){
  this.userService.login(this.user).subscribe(resp=>{
    console.log(resp)
    this.tokenStorage.saveToken(resp.accessToken)
    this.router.navigateByUrl('/')
  })
}


}
