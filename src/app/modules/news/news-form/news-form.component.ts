import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

import { News } from '../news.model';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss'],
})
export class NewsFormComponent implements OnInit {
  public formGroup: FormGroup;
  title: FormControl;
  description: FormControl;
  news: News;

  constructor(private form: FormBuilder, private newsService: NewsService) {
    this.news = new News();
    this.formGroup = this.form.group({
      title: ['', Validators.required],
      description: [],
    });
    this.description = this.formGroup.get('description') as FormControl;
    this.title = this.formGroup.get('title') as FormControl;
  }

  ngOnInit(): void {}

  addNews() {
    if (this.formGroup.valid) {
      this.news = new News()
        .setDescription(this.description.value)
        .setTitle(this.title.value);
      this.newsService
        .addNews(this.news)
        .pipe(
          tap(() => {
            this.newsService.newsInfoUpdated$.next(true);
            this.reset();
          })
        )
        .subscribe();
    }
  }
  reset() {
    this.formGroup.reset({
      title: '',
      description: '',
    });
  }
}
