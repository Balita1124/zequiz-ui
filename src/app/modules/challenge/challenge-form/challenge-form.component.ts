import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { take, tap } from 'rxjs/operators';

import { Category } from '../../category/category.model';
import { CategoryService } from '../../category/category.service';
import { Challenge } from '../challenge.model';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-challenge-form',
  templateUrl: './challenge-form.component.html',
  styleUrls: ['./challenge-form.component.scss'],
})
export class ChallengeFormComponent implements OnInit, OnChanges {
  public formGroup: FormGroup;
  question: FormControl = new FormControl();
  answer: FormControl = new FormControl();
  categoryId: FormControl = new FormControl();
  level: FormControl = new FormControl();
  challenge: Challenge;
  categoryList: any;
  @Input() category: Category = new Category();

  constructor(
    private form: FormBuilder,
    private challengeService: ChallengeService,
    private categoryService: CategoryService
  ) {
    this.challenge = new Challenge();
    this.formGroup = this.form.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
      categoryId: [this.category.id],
      level: [],
    });
    this.question = this.formGroup.get('question') as FormControl;
    this.answer = this.formGroup.get('answer') as FormControl;
    this.categoryId = this.formGroup.get('categoryId') as FormControl;
    this.level = this.formGroup.get('level') as FormControl;
  }

  ngOnInit(): void {
    this.categoryService
      .loadCategories(0, 100, 'code')
      .pipe(
        take(1),
        tap((data: any) => {
          this.categoryList = data.categoriesPage.content;
          console.log(data);
        })
      )
      .subscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.categoryId.setValue(this.category.id);
  }

  addChallenge() {
    if (this.formGroup.valid) {
      this.challenge = new Challenge()
        .setQuestion(this.question.value)
        .setAnswer(this.answer.value)
        .setCategoryId(this.categoryId.value)
        .setLevel(this.level.value);
      console.log(this.challenge);
      this.challengeService
        .addChallenge(this.challenge)
        .pipe(
          take(1),
          tap(() => {
            this.challengeService.challengeInfoUpdated$.next(true);
            this.reset();
          })
        )
        .subscribe();
    }
  }
  reset() {
    this.formGroup.reset({
      id: '',
      question: '',
      answer: '',
      categoryId: this.category.id,
      level: '',
    });
  }
}
