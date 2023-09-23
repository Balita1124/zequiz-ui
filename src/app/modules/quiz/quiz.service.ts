import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  loadQuiz(categoryId: number | null) {
    return this.http.get(
      !categoryId
        ? 'http://localhost:8080/api/quizs'
        : `http://localhost:8080/api/quizs/${categoryId}`
    );
  }
}
