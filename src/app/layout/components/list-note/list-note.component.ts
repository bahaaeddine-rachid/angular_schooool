import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  Etudiant, Note } from 'src/app/models/etudiant';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.css']
})
export class ListNoteComponent {
  @Input()etudiantList!:Etudiant[];

  selectedEtudiant(note:Etudiant){
    console.log(note)
    this.selected.emit(note)
  }


  @Output()selected:EventEmitter<Etudiant>=new EventEmitter();
}
