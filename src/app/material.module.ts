import { NgModule } from '@angular/core';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatIconModule, 
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

const modules = [
   MatButtonModule, 
   MatCheckboxModule,
   MatToolbarModule,
   MatIconModule,
   MatCardModule,
   MatInputModule,
   MatFormFieldModule
  ]

@NgModule({
  imports:[modules],
  exports:[modules]
})
export class MaterialModule {}