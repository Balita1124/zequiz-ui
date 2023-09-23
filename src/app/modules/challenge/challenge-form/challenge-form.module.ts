import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { ChallengeFormComponent } from './challenge-form.component';

@NgModule({
  declarations: [ChallengeFormComponent],
  exports: [ChallengeFormComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class ChallengeFormModule {}
