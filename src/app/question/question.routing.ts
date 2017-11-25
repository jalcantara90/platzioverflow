import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from './question-list.component';
import { QuestionDetailComponent } from './question-detail.component';
import { QuestionFormComponent } from './question-form.component';

export const QUESTIONS_ROUTES: Routes = [
  { path: '', component: QuestionListComponent, pathMatch:'full' },
  { path: 'new', component: QuestionFormComponent},
  { path: ':id', component: QuestionDetailComponent },
];
