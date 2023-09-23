import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { take, tap } from 'rxjs/operators';

import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {
  category: Category;
  categoryId: string;
  displayedColumns: string[] = ['id', 'question', 'category'];
  isAddChallenge: boolean = true;
  constructor(private categoryService: CategoryService, private router: ActivatedRoute) {
    this.category = new Category();
    this.categoryId = this.router.snapshot.params.id;
  }

  ngOnInit(): void {
    this.categoryService
      .loadCategory(this.categoryId)
      .pipe(
        take(1),
        tap((category: any) => {
          console.log(category);
          this.category = category;
        })
      )
      .subscribe();
  }
  toggleAddChallenge() {
    this.isAddChallenge = !this.isAddChallenge;
  }
}
