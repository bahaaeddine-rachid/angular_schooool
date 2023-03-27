export class Etudiant{
  id:number=0;
  nom:string="";
  prenom:string="";
  datedenaissance:Date=new Date();
  sexe:string="";
  filiere:Filiere=new Filiere();
  filiereId:number=0;
}
export class Matiere{
  id:number=0;
  nommatiere:string="";
}


export class Filiere{
  id:number=0;
  nomfiliere:string="";
  abreviation:string="";
}

export class Note{
  id:number=0;
  controle:any;
  examen:any;
  tp:any;

}

export class Niveau{
  id:number=0;
  niveau:any;

}

export class FiliereMatiere{
  id:number=0;
  niveau:any;

}
