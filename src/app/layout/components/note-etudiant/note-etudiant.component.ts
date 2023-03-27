import { Component, Input } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { Service_etudiantService } from 'src/app/services/service_etudiant.service';

@Component({
  selector: 'app-note-etudiant',
  templateUrl: './note-etudiant.component.html',
  styleUrls: ['./note-etudiant.component.css']
})
export class NoteEtudiantComponent {

  etudiantList!:Etudiant[];
  selectedetudiant:Etudiant= new Etudiant();

  constructor(private etudiantService:Service_etudiantService){
    this.findAllEtudiants();
  }

findAllEtudiants(){
  this.etudiantService.findAllEtudiant().subscribe(resp=>{
    this.etudiantList=resp;
  })
}

selectedEtudiant(etudiant:Etudiant){
  this.selectedetudiant=etudiant
}




}
