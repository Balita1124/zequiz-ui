import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { ChallengeListComponent } from './challenge-list.component';

@NgModule({
  declarations: [ChallengeListComponent],
  exports: [ChallengeListComponent],
  imports: [CommonModule, MaterialModule],
})
export class ChallengeListModule {}
