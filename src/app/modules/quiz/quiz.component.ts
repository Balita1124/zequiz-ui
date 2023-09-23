import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, tap } from 'rxjs/operators';

import { Challenge } from '../challenge/challenge.model';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  isReady: boolean = false;
  quizs: any;
  totalElements: number = 0;
  categoryId: number | null = null;
  constructor(private activatedRoute: ActivatedRoute, private quizService: QuizService) {
    console.log(activatedRoute);
    this.categoryId = this.activatedRoute?.snapshot?.params?.id;
  }
  ngOnInit(): void {
    this.loadQuizes();
  }

  startQuiz() {
    this.isReady = true;
  }
  loadQuizes() {
    this.quizService
      .loadQuiz(this.categoryId)
      .pipe(
        take(1),
        tap((data: Array<Challenge> | any) => {
          console.log(data);
          this.quizs = data;
          this.totalElements = data?.length || 0;
        })
      )
      .subscribe();
  }
}
