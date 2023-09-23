import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { News } from './news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  newsInfoUpdated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  public addNews(news: News) {
    return this.http.post('http://localhost:8080/api/newss', news);
  }

  public loadNews(page: number, size: number, sort: string) {
    return this.http.get(
      `http://localhost:8080/api/newss?page=${page}&size=${size}&sort=${sort}`
    );
  }
}
