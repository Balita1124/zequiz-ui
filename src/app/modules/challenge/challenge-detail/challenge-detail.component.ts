import { Component, Input, OnInit } from '@angular/core';

import { Challenge } from '../challenge.model';

@Component({
  selector: 'app-challenge-detail',
  templateUrl: './challenge-detail.component.html',
  styleUrls: ['./challenge-detail.component.scss'],
})
export class ChallengeDetailComponent implements OnInit {
  showAnswer: boolean = false;
  @Input() challenge: Challenge = new Challenge();
  constructor() {}

  ngOnInit(): void {}

  toggleShowAnswer() {
    this.showAnswer = !this.showAnswer;
  }
}
