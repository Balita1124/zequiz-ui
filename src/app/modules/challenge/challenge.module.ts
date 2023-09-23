import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { ChallengeListModule } from './challenge-list/challenge-list.module';
import { ChallengeRoutingModule } from './challenge-routing.module';
import { ChallengeComponent } from './challenge.component';

@NgModule({
  declarations: [ChallengeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ChallengeRoutingModule,
    HttpClientModule,
    ChallengeListModule,
  ],
})
export class ChallengeModule {}
