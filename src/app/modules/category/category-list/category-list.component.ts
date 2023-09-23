import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { take, tap } from 'rxjs/operators';

import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['id', 'code', 'label', 'description', 'website'];
  totalElements: number = 0;
  size: number = 10;
  page = 0;
  sort = 'code';
  pageSizeOptions: number[] = [5, 25, 100, 200];
  pageNumber = 0;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategory();
    this.categoryService.categoryInfoUpdated$.next(true);
  }

  loadCategory() {
    this.categoryService.categoryInfoUpdated$.subscribe((categoryInfoUpdated) => {
      if (categoryInfoUpdated) {
        this.categoryService
          .loadCategories(this.pageNumber, this.size, this.sort)
          .pipe(
            take(1),
            tap((data: any) => {
              this.dataSource = data?.categoriesPage?.content;
              this.totalElements = data?.categoriesPage?.totalElements || 0;
            })
          )
          .subscribe();
        this.categoryService.categoryInfoUpdated$.next(false);
      }
    });
  }

  handlePageEvent(e: PageEvent) {
    this.size = e.pageSize;
    this.pageNumber = e.pageIndex;
    this.categoryService.categoryInfoUpdated$.next(true);
  }
}
