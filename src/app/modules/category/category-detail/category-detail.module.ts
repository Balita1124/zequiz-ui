import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { ChallengeFormModule } from '../../challenge/challenge-form/challenge-form.module';
import { ChallengeListModule } from '../../challenge/challenge-list/challenge-list.module';
import { CategoryRoutingModule } from '../category-routing.module';
import { CategoryDetailComponent } from './category-detail.component';

@NgModule({
  declarations: [CategoryDetailComponent],
  exports: [CategoryDetailComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MaterialModule,
    ChallengeFormModule,
    ChallengeListModule,
  ],
})
export class CategoryDetailModule {}
