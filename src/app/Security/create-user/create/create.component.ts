import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { Service_etudiantService } from 'src/app/services/service_etudiant.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  user:User= new User();


  constructor(private userService:Service_etudiantService){

  }

createUser(){
  this.userService.createUser(this.user).subscribe(resp=>{
    this.userService=resp
  });
}

}
