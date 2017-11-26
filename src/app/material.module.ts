import { NgModule } from '@angular/core';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatIconModule, 
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatGridListModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatSnackBarModule
} from '@angular/material';

const modules = [
   MatButtonModule, 
   MatCheckboxModule,
   MatToolbarModule,
   MatIconModule,
   MatCardModule,
   MatInputModule,
   MatFormFieldModule,
   MatListModule,
   MatGridListModule,
   MatRadioModule,
   MatProgressSpinnerModule,
   MatMenuModule,
   MatSnackBarModule
  ]

@NgModule({
  imports:[modules],
  exports:[modules]
})
export class MaterialModule {}