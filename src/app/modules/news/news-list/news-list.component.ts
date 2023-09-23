import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { take, tap } from 'rxjs/operators';

import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = ['id', 'title', 'description'];
  totalElements: number = 0;
  size: number = 5;
  page = 0;
  sort = 'title';
  pageSizeOptions: number[] = [5, 25, 100, 200];
  pageNumber = 0;
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    console.log('ngOnInit1');
    this.loadNews();
    console.log('ngOnInit2');
    this.newsService.newsInfoUpdated$.next(true);
  }

  loadNews() {
    this.newsService.newsInfoUpdated$.subscribe((newsInfoUpdated) => {
      if (newsInfoUpdated) {
        console.log('Reload');
        this.newsService
          .loadNews(this.pageNumber, this.size, this.sort)
          .pipe(
            take(1),
            tap((data: any) => {
              console.log(data);
              this.dataSource = data?.newsPage.content; // this.page=0;
              this.totalElements = data?.newsPage.totalElements || 0;
            })
          )
          .subscribe();
        this.newsService.newsInfoUpdated$.next(false);
      }
    });
  }

  handlePageEvent(e: PageEvent) {
    this.size = e.pageSize;
    this.pageNumber = e.pageIndex;
    this.newsService.newsInfoUpdated$.next(true);
  }
}
