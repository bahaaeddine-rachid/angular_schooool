import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Etudiant, Note } from 'src/app/models/etudiant';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-unenote',
  templateUrl: './unenote.component.html',
  styleUrls: ['./unenote.component.css']
})
export class UnenoteComponent {


  @Input()idetudiant!:Etudiant;

  @Output()selected:EventEmitter<Etudiant>=new EventEmitter();

  constructor(private noteService:EtudiantServiceService){

  }

  selectedetudiant(){

    console.log(this.idetudiant)
    this.noteService.updateEtudiant(this.idetudiant)
      // this.selected.emit(this.idetudiant)
  }



}
