import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent {


  @Input()etudiantList!:Etudiant[];


selectedEtudiant(etudiant:Etudiant){
    console.log(etudiant)
    this.selected.emit(etudiant)
  }


  @Output()selected:EventEmitter<Etudiant>=new EventEmitter();

  // selectedetudiant(){
  //     this.selected.emit(this.unetudiant)
  // }
}
