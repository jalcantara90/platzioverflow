import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AnswerFormComponent } from './answer/answer-form.component';
import { SignInScreenComponent } from './auth/signin-screen.component';
import { SignUpScreenComponent } from './auth/signup-screen.component';
import { QuestionScreenComponent } from './question/question-screen.component';

import { QUESTIONS_ROUTES } from './question/question.routing';

const APP_ROUTES: Routes = [
  { path: '', component: QuestionScreenComponent, pathMatch:'full' },
  { path: 'signin', component: SignInScreenComponent },
  { path: 'signup', component: SignUpScreenComponent },
  { path: 'questions', children: QUESTIONS_ROUTES },
  { path: '**', pathMatch:'full', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
