import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Etudiant } from 'src/app/models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantServiceService {

 private etudiant:Etudiant=new Etudiant();
  private etudiantStore:BehaviorSubject<Etudiant>=new BehaviorSubject(this.etudiant);

  constructor() { }


  updateEtudiant(etudiant:Etudiant){
    this.etudiantStore.next(etudiant);
    console.log(this.etudiantStore.value)
  }

  getValue(){
    return this.etudiantStore.value;
  }

  getStore(){
    return this.etudiantStore;
  }
}
