import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Etudiant, Filiere } from 'src/app/models/etudiant';
import { Service_etudiantService } from 'src/app/services/service_etudiant.service';

@Component({
  selector: 'app-etudiant-dialog',
  templateUrl: './etudiant-dialog.component.html',
  styleUrls: ['./etudiant-dialog.component.css']
})
export class EtudiantDialogComponent implements OnInit{
  etudiant:Etudiant=new Etudiant()
  filieres:Filiere[]=[];
  saved:boolean=false;
  filiere:Filiere=new Filiere()
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private filiereService:Service_etudiantService,private dialogRef:MatDialogRef<EtudiantDialogComponent>){
    if(data.etudiant.id!=0){
        this.etudiant=data.etudiant;
      }

  }

  ngOnInit(){

    this.filiereService.findAllFilieres().subscribe(response=>{
      this.filieres=response;
    })
  }

  saveEtudiant(){
    this.filiereService.saveEtudiant(this.etudiant).subscribe(resp=>{
      this.dialogRef.close();
      this.saved=true;
    },()=>console.log("error"),()=>console.log("completed"))

  }
  onNoClick(){
    this.dialogRef.close();
  }
}
