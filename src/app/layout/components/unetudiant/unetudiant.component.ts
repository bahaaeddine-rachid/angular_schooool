import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'unetudiant',
  templateUrl: './unetudiant.component.html',
  styleUrls: ['./unetudiant.component.css']
})
export class UnetudiantComponent {

  @Input()unetudiant!:Etudiant;

  @Output()selected:EventEmitter<Etudiant>=new EventEmitter();

  constructor(private etudiantService:EtudiantServiceService){

  }

  selectedetudiant(){

    this.etudiantService.updateEtudiant(this.unetudiant)
      // this.selected.emit(this.unetudiant)
  }

}
