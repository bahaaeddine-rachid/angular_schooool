import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { Matiere } from 'src/app/models/etudiant';
import { EtudiantServiceService } from '../../services/etudiant-service.service';
import { MatiereService } from '../../services/matiere-service.service';

@Component({
  selector: 'app-unematiere',
  templateUrl: './unematiere.component.html',
  styleUrls: ['./unematiere.component.css']
})
export class UnematiereComponent {

  @Input()unematiere!:Matiere;


    @Output()selected:EventEmitter<Matiere>=new EventEmitter();

    selectedMatiere(){
      this.selected.emit(this.unematiere)
    }

    // constructor(private matiereSerive:MatiereService){

    // }

    // selectedMatiere(){

    //   this.matiereSerive.updateEtudiant(this.unematiere)
    // }
}
