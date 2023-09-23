import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Challenge } from './challenge.model';

@Injectable({
  providedIn: 'root',
})
export class ChallengeService {
  challengeInfoUpdated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  public addChallenge(challenge: Challenge) {
    return this.http.post('http://localhost:8080/api/challenges', challenge);
  }

  public loadChallenges(categoryId: number, page: number, size: number, sort: string) {
    return this.http.get(
      categoryId
        ? `http://localhost:8080/api/categories/${categoryId}/challenges?page=${page}&size=${size}&sort=${sort}`
        : `http://localhost:8080/api/challenges?page=${page}&size=${size}&sort=${sort}`
    );
  }

  public loadChallenge(id: string) {
    return this.http.get(`http://localhost:8080/api/challenges/${id}`);
  }
}
