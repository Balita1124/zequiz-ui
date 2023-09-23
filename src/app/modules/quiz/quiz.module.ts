import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { ChallengeDetailModule } from '../challenge/challenge-detail/challenge-detail.module';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';

@NgModule({
  declarations: [QuizComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    QuizRoutingModule,
    ChallengeDetailModule,
  ],
})
export class QuizModule {}
