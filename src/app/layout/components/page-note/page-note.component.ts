import { Component } from '@angular/core';
import { Etudiant, Note } from 'src/app/models/etudiant';
import { Service_etudiantService } from 'src/app/services/service_etudiant.service';

@Component({
  selector: 'app-page-note',
  templateUrl: './page-note.component.html',
  styleUrls: ['./page-note.component.css']
})
export class PageNoteComponent {


  etudiant:Etudiant=new Etudiant();
  constructor(private noteService:Service_etudiantService,private etudiantService:Service_etudiantService){
    // this.getnotebyId();
    this.findAllEtudiants();
  }



getnotebyId(){
  this.noteService.findnotebymatiereid(this.etudiant.id)
    .subscribe(resp =>{
      this.note = resp;
    })
}

note:Note=new Note();

etudiantListt!:Etudiant[];

findAllEtudiants(){
  this.etudiantService.findAllEtudiant().subscribe(resp=>{
    this.etudiantListt=resp;
  })
}

selectedEtudiant(note:Etudiant){
  // this.note=note
  console.log(note)
}


}
