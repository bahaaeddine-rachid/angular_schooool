import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarServiceService {

  constructor(private snackbar:MatSnackBar) { }
  openSnackBar(message:string, action:string){
    this.snackbar.open(message,action,
      {
        horizontalPosition: "end",
        verticalPosition: "top",
        duration:5000
      });

  }
}
