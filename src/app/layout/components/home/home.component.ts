import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/Security/services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public token:TokenStorageService){}

}
