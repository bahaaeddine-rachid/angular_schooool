import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { EtudiantsComponent } from './components/etudiants/etudiants.component';
import { EtudiantDialogComponent } from './components/etudiant-dialog/etudiant-dialog.component';
import { HomeComponent } from './components/home/home.component';
import { NoteEtudiantComponent } from './components/note-etudiant/note-etudiant.component';
import { ListEtudiantComponent } from './components/list-etudiant/list-etudiant.component';
import { UnetudiantComponent } from './components/unetudiant/unetudiant.component';
import { TableNoteComponent } from './components/table-note/table-note.component';
import { ListMatiereComponent } from './components/list-matiere/list-matiere.component';
import { PageMatiereComponent } from './components/page-matiere/page-matiere.component';
import { UnematiereComponent } from './components/unematiere/unematiere.component';
import { TableNoteMatiereComponent } from './components/table-note-matiere/table-note-matiere.component';
import { PageNoteComponent } from './components/page-note/page-note.component';
import { UnenoteComponent } from './components/unenote/unenote.component';
import { ListNoteComponent } from './components/list-note/list-note.component';
import { TableNoteEtudiantComponent } from './components/table-note-etudiant/table-note-etudiant.component';




@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        EtudiantsComponent,
        EtudiantDialogComponent,
        HomeComponent,
        NoteEtudiantComponent,
        ListEtudiantComponent,
        UnetudiantComponent,
        TableNoteComponent,
        ListMatiereComponent,
        PageMatiereComponent,
        UnematiereComponent,
        TableNoteMatiereComponent,
        PageNoteComponent,
        UnenoteComponent,
        ListNoteComponent,
        TableNoteEtudiantComponent

    ],
    imports: [
        CommonModule,
        MaterialModule,
        LayoutRoutingModule,
        FormsModule,

    ]
})
export class LayoutModule { }
