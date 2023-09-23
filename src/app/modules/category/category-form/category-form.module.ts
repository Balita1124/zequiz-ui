import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { CategoryRoutingModule } from '../category-routing.module';
import { CategoryFormComponent } from './category-form.component';

@NgModule({
  declarations: [CategoryFormComponent],
  exports: [CategoryFormComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, CategoryRoutingModule],
})
export class CategoryFormModule {}
