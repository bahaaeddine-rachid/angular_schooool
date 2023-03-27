import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Etudiant, Note } from 'src/app/models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

 private note:Note=new Note();
  private noteStore:BehaviorSubject<Note>=new BehaviorSubject(this.note);

  constructor() { }


  updateEtudiant(note:Note){
    this.noteStore.next(note);
  }

  getValue(){
    return this.noteStore.value;
  }

  getStore(){
    return this.noteStore;
  }
}
