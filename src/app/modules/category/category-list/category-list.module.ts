import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { CategoryRoutingModule } from '../category-routing.module';
import { CategoryListComponent } from './category-list.component';

@NgModule({
  declarations: [CategoryListComponent],
  exports: [CategoryListComponent],
  imports: [CommonModule, MaterialModule, CategoryRoutingModule],
})
export class CategoryListModule {}
