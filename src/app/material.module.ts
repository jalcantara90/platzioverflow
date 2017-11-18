import { NgModule } from '@angular/core';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatIconModule, 
  MatToolbarModule,
  MatCardModule
} from '@angular/material';

const modules = [
   MatButtonModule, 
   MatCheckboxModule,
   MatToolbarModule,
   MatIconModule,
   MatCardModule
  ]

@NgModule({
  imports:[modules],
  exports:[modules]
})
export class MaterialModule {}