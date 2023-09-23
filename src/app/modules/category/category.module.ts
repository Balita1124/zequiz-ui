import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { CategoryDetailModule } from './category-detail/category-detail.module';
import { CategoryFormModule } from './category-form/category-form.module';
import { CategoryListModule } from './category-list/category-list.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    CategoryRoutingModule,
    CategoryListModule,
    CategoryFormModule,
    CategoryDetailModule,
  ],
})
export class CategoryModule {}
