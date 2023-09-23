import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { NewsRoutingModule } from '../news-routing.module';
import { NewsFormComponent } from './news-form.component';

@NgModule({
  declarations: [NewsFormComponent],
  exports: [NewsFormComponent],
  imports: [CommonModule, ReactiveFormsModule, NewsRoutingModule, MaterialModule],
})
export class NewsFormModule {}
