import { Component, Input, SimpleChanges } from '@angular/core';
import { Matiere } from 'src/app/models/etudiant';
import { MatiereService } from '../../services/matiere-service.service';

@Component({
  selector: 'app-table-note-matiere',
  templateUrl: './table-note-matiere.component.html',
  styleUrls: ['./table-note-matiere.component.css']
})
export class TableNoteMatiereComponent {



  @Input()currentMatiere:Matiere= new Matiere();

   // thismatiere:Matiere=new Matiere();
//   constructor(public matiereSerivce:MatiereService){
//   }

// subscription:any;
//   ngOnInit(){
//       this.subscription=this.matiereSerivce.getStore().subscribe(mat=>{
//         this.thismatiere=mat;
//       });

//   }
//   ngOnDestroy(){
//     this.subscription.unsubscribe();
//   }


}

