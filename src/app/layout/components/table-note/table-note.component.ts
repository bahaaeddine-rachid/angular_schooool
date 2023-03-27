import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Etudiant, Filiere } from 'src/app/models/etudiant';
import { Service_etudiantService } from 'src/app/services/service_etudiant.service';
import { EtudiantServiceService } from '../../services/etudiant-service.service';
@Component({
  selector: 'app-table-note',
  templateUrl: './table-note.component.html',
  styleUrls: ['./table-note.component.css']
})
export class TableNoteComponent {

  _currentEtudiant:Etudiant=new Etudiant();
  filiere:Filiere=new Filiere();
  // @Input()set currentEtudiant(value:Etudiant){
  //   console.log(value)
  // }
  @Input()currentEtudiant:Etudiant= new Etudiant();

  constructor(public etudiantService:EtudiantServiceService){

  }
  // ngOnChanges(changes:SimpleChanges){
  //   console.log(changes["currentEtudiant"].currentValue)
  // }
subscription:any;
  ngOnInit(){
      this.subscription=this.etudiantService.getStore().subscribe(etu=>{
        this._currentEtudiant=etu;
      });

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
