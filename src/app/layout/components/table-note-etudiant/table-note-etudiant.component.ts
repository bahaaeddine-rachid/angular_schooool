import { Component, Input } from '@angular/core';
import { Etudiant, Note } from 'src/app/models/etudiant';
import { Service_etudiantService } from 'src/app/services/service_etudiant.service';
import { EtudiantServiceService } from '../../services/etudiant-service.service';
import { NoteService } from '../../services/note-service.service';

@Component({
  selector: 'app-table-note-etudiant',
  templateUrl: './table-note-etudiant.component.html',
  styleUrls: ['./table-note-etudiant.component.css']
})
export class TableNoteEtudiantComponent {


  @Input()currentNote:Note= new Note();

  etudiants:Etudiant[]=[];
  etudiantId:Etudiant= new Etudiant();
  thisnote:Note=new Note();
  constructor(public noteService:EtudiantServiceService,private notesService:Service_etudiantService){
  }

subscription:any;
  ngOnInit(){
      this.subscription=this.noteService.getStore().subscribe(not=>{
        // this.thisnote=not;
        this.getnotebyId(not.id)
      });

  }

  getnotebyId(id:number){
    this.notesService.findnotebymatiereid(id)
      .subscribe(resp =>{
        console.log(resp)
      })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
