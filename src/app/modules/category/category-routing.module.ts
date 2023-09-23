import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  // { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: '', component: CategoryComponent },
  { path: 'add', component: CategoryFormComponent },
  { path: ':id', component: CategoryDetailComponent },
  { path: ':id/quiz', component: CategoryDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
