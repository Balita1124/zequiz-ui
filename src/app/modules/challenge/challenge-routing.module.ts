import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChallengeDetailComponent } from './challenge-detail/challenge-detail.component';
import { ChallengeFormComponent } from './challenge-form/challenge-form.component';
import { ChallengeComponent } from './challenge.component';

const routes: Routes = [
  // { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: '', component: ChallengeComponent },
  { path: 'add', component: ChallengeFormComponent },
  { path: ':id', component: ChallengeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengeRoutingModule {}
