import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantsComponent } from './components/etudiants/etudiants.component';
import { HomeComponent } from './components/home/home.component';
import { NoteEtudiantComponent } from './components/note-etudiant/note-etudiant.component';
import { PageMatiereComponent } from './components/page-matiere/page-matiere.component';
import { PageNoteComponent } from './components/page-note/page-note.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
 {path:'etudiants',component:EtudiantsComponent,canActivate:[AuthGuard]},
 {path:'',component:HomeComponent},
 {path:'notes',component:NoteEtudiantComponent,canActivate:[RoleGuard],data:{expectedAuthorities:["role_test2"]}},
 {path:'notebymatiere',component:PageMatiereComponent},
 {path:'page-note',component:PageNoteComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
