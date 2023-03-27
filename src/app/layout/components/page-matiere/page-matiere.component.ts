import { Component } from '@angular/core';
import { Matiere } from 'src/app/models/matiere';
import { Service_etudiantService } from 'src/app/services/service_etudiant.service';

@Component({
  selector: 'page-matiere',
  templateUrl: './page-matiere.component.html',
  styleUrls: ['./page-matiere.component.css']
})
export class PageMatiereComponent {


  listMatiere!:Matiere[];
  matiere:Matiere= new Matiere();
  constructor(private matiereService:Service_etudiantService){
    this.findAllMatieres();
    // this.getnotebyId();
  }

  // getnotebyId(): void {
  //   this.matiereService.findnotebymatiereid(this.matiere.id)
  //     .subscribe(listMatiere => this.matiere = listMatiere);
  // }
  findAllMatieres(){
    this.matiereService.findAllMatieres().subscribe(resp=>{
      this.listMatiere=resp;
    })
}
selectedMatiere(matiere:Matiere){
  this.matiere=matiere
}
}
