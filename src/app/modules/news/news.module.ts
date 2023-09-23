import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { NewsFormModule } from './news-form/news-form.module';
import { NewsListModule } from './news-list/news-list.module';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NewsRoutingModule,
    NewsListModule,
    NewsFormModule,
    MaterialModule,
  ],
})
export class NewsModule {}
