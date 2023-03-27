import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/Security/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public token:TokenStorageService){

  }
}
