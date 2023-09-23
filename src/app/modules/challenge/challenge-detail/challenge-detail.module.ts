import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { ChallengeDetailComponent } from './challenge-detail.component';

@NgModule({
  declarations: [ChallengeDetailComponent],
  exports: [ChallengeDetailComponent],
  imports: [CommonModule, MaterialModule],
})
export class ChallengeDetailModule {}
