import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseModule } from './modules/base/base.module';
import { CategoryModule } from './modules/category/category.module';
import { ChallengeModule } from './modules/challenge/challenge.module';
import { NewsModule } from './modules/news/news.module';
import { QuizModule } from './modules/quiz/quiz.module';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BaseModule,
    NewsModule,
    CategoryModule,
    ChallengeModule,
    QuizModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
