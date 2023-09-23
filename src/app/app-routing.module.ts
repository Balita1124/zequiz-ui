import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from './modules/base/base.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BaseComponent },
  {
    path: 'news',
    loadChildren: () => import('./modules/news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./modules/category/category.module').then((m) => m.CategoryModule),
  },
  {
    path: 'challenges',
    loadChildren: () =>
      import('./modules/challenge/challenge.module').then((m) => m.ChallengeModule),
  },
  {
    path: 'quizs',
    loadChildren: () => import('./modules/quiz/quiz.module').then((m) => m.QuizModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
