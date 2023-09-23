import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizComponent } from './quiz.component';

const routes: Routes = [
  // { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: '', component: QuizComponent },
  { path: ':id', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizRoutingModule {}
