import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { NewsListComponent } from './news-list.component';

@NgModule({
  declarations: [NewsListComponent],
  exports: [NewsListComponent],
  imports: [CommonModule, MaterialModule],
})
export class NewsListModule {}
