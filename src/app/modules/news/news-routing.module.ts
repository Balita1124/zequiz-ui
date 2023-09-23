import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsFormComponent } from './news-form/news-form.component';
import { NewsComponent } from './news.component';

const routes: Routes = [
  // { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: '', component: NewsComponent },
  { path: 'news/add', component: NewsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
