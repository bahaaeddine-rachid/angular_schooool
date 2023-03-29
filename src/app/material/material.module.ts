import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
