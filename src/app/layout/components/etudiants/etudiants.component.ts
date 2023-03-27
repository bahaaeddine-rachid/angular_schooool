import { Component,Inject,OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Etudiant, Filiere, FiliereMatiere , Niveau} from 'src/app/models/etudiant';
import { Service_etudiantService } from 'src/app/services/service_etudiant.service';
import { EtudiantDialogComponent } from '../etudiant-dialog/etudiant-dialog.component';


@Component({
  selector: 'etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})

export class EtudiantsComponent implements OnInit {



  ngOnInit(): void  {

}

note: any;
getnotebyId(): void {
  this.etudiantService.findnotebymatiereid(this.etudiant.id)
    .subscribe(note => this.note = note);
}



matiere: any;
getmatierebyfiliereetniveau(): void {
  this.etudiantService.findmatiere(this.filiere.id,this.niveau.niveau)

    .subscribe(matiere => this.matiere = matiere);

}



  filiere: Filiere= new Filiere();
  niveau:Niveau=new Niveau();
  etudiant: Etudiant= new Etudiant();
  niveaus:Niveau[]=[];
  filietematiere:FiliereMatiere=new FiliereMatiere();
  filietematieres:FiliereMatiere[]=[];
  filieres:Filiere[]=[];
  etudiants:Etudiant[]=[];
  paginatedetudiant:Etudiant[]=[];
  datasource= new MatTableDataSource(this.etudiants);
  displayedColumns: string[] = ['id', 'nom', 'prenom', 'datedenaissance','sexe','filiereId','delete'];

  pageIndex=0;
  pageSizeOptions= [5,10,25,50];
  pageSize=this.pageSizeOptions[0];


  paginatedetudiants(){
    let index= this.pageSize*this.pageIndex;
    let array:any[]=this.etudiants.slice(index,this.pageSize+index);
    this.datasource= new MatTableDataSource(array);

  }


  constructor(private etudiantService:Service_etudiantService,private filiereService:Service_etudiantService,public dialog: MatDialog) {
this.findAllEtudiants();
this.findAllFilieres();
   }



findAllEtudiants(){
  this.etudiantService.findAllEtudiant().subscribe(response=>{
    this.etudiants=response;
    this.paginatedetudiants()
    console.log(this.etudiants)
  });

}

createEtudiant(): void {
  const dialogRef = this.dialog.open(EtudiantDialogComponent, {
    data: {etudiant:new Etudiant()},

  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(dialogRef.componentInstance.saved)
    this.findAllEtudiants()
  });
}

editEtudiant(etudiant:Etudiant){
  const dialogRef = this.dialog.open(EtudiantDialogComponent, {
    data: {etudiant:etudiant},
  });
}
paginate(event:PageEvent){
  if(this.pageSize!=event.pageSize){
    this.pageSize=event.pageSize
    this.pageIndex=0;

  }else{
    this.pageIndex=event.pageIndex;
  }
  this.paginatedetudiants();


}

findAllFilieres(){

  this.filiereService.findAllFilieres().subscribe(response=>{
    this.filieres=response;
    console.warn(this.filieres)
  });
}

deleteEtudiant(id: any){
  this.etudiantService.deleteEtudiant(id).subscribe(data=>{
    console.log(data)
    this.etudiants = this.etudiants.filter(item => item.id !== id)
    this.findAllEtudiants();
  });

}

saveEtudiant(){

  // let newEtudiant= {
  //   "id":this.etudiant.id,
  //   "nom":this.etudiant.nom,
  //   "prenom":this.etudiant.prenom,
  //   "datedenaissance":this.etudiant.datedenaissance,
  //   "sexe":this.etudiant.sexe,
  //   "filiereId":1
  // }
  this.etudiantService.saveEtudiant(this.etudiant).subscribe((res) =>{
    console.warn(res);
    this.findAllEtudiants();
  });

}



}

