import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Matiere } from 'src/app/models/matiere';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

 private matiere:Matiere=new Matiere();
  private matiereStore:BehaviorSubject<Matiere>=new BehaviorSubject(this.matiere);

  constructor() { }


  updateEtudiant(matiere:Matiere){
    this.matiereStore.next(matiere);
  }

  getValue(){
    return this.matiereStore.value;
  }

  getStore(){
    return this.matiereStore;
  }
}
