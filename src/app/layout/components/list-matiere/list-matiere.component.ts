import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Matiere } from 'src/app/models/matiere';

@Component({
  selector: 'list-matiere',
  templateUrl: './list-matiere.component.html',
  styleUrls: ['./list-matiere.component.css']
})
export class ListMatiereComponent {

@Input()listMatiere!:Matiere[];


selectedMatiere(matiere:Matiere){
  console.log(matiere)
  this.selected.emit(matiere)
}
@Output()selected:EventEmitter<Matiere>=new EventEmitter();



}
