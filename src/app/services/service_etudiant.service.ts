import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant, Filiere, FiliereMatiere, Note,Matiere } from '../models/etudiant';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class Service_etudiantService {
  getStore() {
    throw new Error('Method not implemented.');
  }

  url:string="http://localhost:8080/"
constructor(private http:HttpClient) { }

public findAllEtudiant(){
  return this.http.get<Etudiant[]>(this.url+"etudiant/findAllEtudiants");
}

public deleteEtudiant (id:String):Observable<number>{

  return this.http.delete<number>(this.url+"etudiant/deleteEtudiant?id="+id);
}

public findAllMatieres(){
  return this.http.get<Matiere[]>(this.url+"matiere/findAllMatieres");
}
findEtudiantById(id: number): Observable<Etudiant> {
  const url = `${this.url}etudiant/findEtudiantById?id=${id}`;
  return this.http.get<Etudiant>(url);
}

findnotebymatiereid(id: number): Observable<Note> {
  const url = `${this.url}note/findnoteetudiantbymatiereId?id=${id}`;
  return this.http.get<Note>(url);
}

findmatiere(id: number, niveau:number): Observable<FiliereMatiere> {
  const url = `${this.url}filierematiere/findmatierebyfiliere?id=${id}&niveau=${niveau}`;
  return this.http.get<FiliereMatiere>(url);
}
saveEtudiant(etudiant:Etudiant): Observable<any> {

  return this.http.post(this.url+"etudiant/saveEtudiant",etudiant)
}

login(user:User):Observable<any>{
  return this.http.post<User>(this.url+"user/login",user);
}
findAllFilieres(){
  return this.http.get<Filiere[]>(this.url+"filiere/findAllFilieres");
}

updateEtudiant(id:String){
  return this.http.put<Etudiant[]>(this.url+"etudiant/editEtudiant/{id}",id)

}

createUser(user:User): Observable<any>{
  return this.http.post(this.url+"user/saveUser",user)

}

}
