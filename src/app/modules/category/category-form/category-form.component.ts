import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  public formGroup: FormGroup;
  code: FormControl;
  label: FormControl;
  description: FormControl;
  website: FormControl;
  category: Category;

  constructor(private form: FormBuilder, private categoryService: CategoryService) {
    this.category = new Category();
    this.formGroup = this.form.group({
      code: ['', Validators.required],
      label: ['', Validators.required],
      description: [],
      website: [],
    });
    this.code = this.formGroup.get('code') as FormControl;
    this.label = this.formGroup.get('label') as FormControl;
    this.description = this.formGroup.get('description') as FormControl;
    this.website = this.formGroup.get('website') as FormControl;
  }

  ngOnInit(): void {}

  addCategory() {
    if (this.formGroup.valid) {
      this.category = new Category()
        .setCode(this.code.value)
        .setLabel(this.label.value)
        .setDescription(this.description.value)
        .setWebsite(this.website.value);
      this.categoryService
        .addCategory(this.category)
        .pipe(
          tap(() => {
            this.categoryService.categoryInfoUpdated$.next(true);
            this.reset();
          })
        )
        .subscribe();
    }
  }
  reset() {
    this.formGroup.reset({
      code: '',
      label: '',
      description: '',
      website: '',
    });
  }
}
