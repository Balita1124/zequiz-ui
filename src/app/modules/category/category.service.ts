import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Category } from './category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categoryInfoUpdated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  public addCategory(category: Category) {
    return this.http.post('http://localhost:8080/api/categories', category);
  }

  public loadCategories(page: number, size: number, sort: string) {
    return this.http.get(
      `http://localhost:8080/api/categories?page=${page}&size=${size}&sort=${sort}`
    );
  }

  public loadCategory(id: string) {
    return this.http.get(`http://localhost:8080/api/categories/${id}`);
  }
}
