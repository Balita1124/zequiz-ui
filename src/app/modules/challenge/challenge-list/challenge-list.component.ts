import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { take, tap } from 'rxjs/operators';

import { Category } from '../../category/category.model';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss'],
})
export class ChallengeListComponent implements OnInit {
  // dataSource: any;
  displayedColumns: string[] = ['id', 'question', 'level'];
  totalElements: number = 0;
  size: number = 10;
  page = 0;
  sort = 'question';
  pageSizeOptions: number[] = [5, 25, 100, 200];
  pageNumber = 0;
  @Input() isPagined: boolean = false;
  categoryId: number | null = null;
  challenges: any;
  constructor(
    private challengeService: ChallengeService,
    private activatedRoute: ActivatedRoute
  ) {
    this.categoryId = this.activatedRoute?.snapshot?.params?.id || null;
  }

  ngOnInit(): void {
    this.loadChallenge(this.categoryId);
    this.challengeService.challengeInfoUpdated$.next(true);
  }

  loadChallenge(categoryId?: any) {
    this.challengeService.challengeInfoUpdated$.subscribe((challengeInfoUpdated) => {
      if (challengeInfoUpdated) {
        this.challengeService
          .loadChallenges(categoryId, this.pageNumber, this.size, this.sort)
          .pipe(
            take(1),
            tap((data: any) => {
              console.log(data);
              this.challenges = data?.content;
              this.totalElements = data?.totalElements || 0;
            })
          )
          .subscribe();
        this.challengeService.challengeInfoUpdated$.next(false);
      }
    });
  }

  handlePageEvent(e: PageEvent) {
    this.size = e.pageSize;
    this.pageNumber = e.pageIndex;
    this.challengeService.challengeInfoUpdated$.next(true);
  }
}
