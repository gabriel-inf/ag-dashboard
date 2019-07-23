import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { ProgressInfo, StatsProgressBarData } from '../data/stats-progress-bar';

@Injectable()
export class StatsProgressBarService extends StatsProgressBarData {
  private progressInfoData: ProgressInfo[] = [
    {
      title: 'Gate',
      value: 4,
      activeProgress: 30,
      description: '',
    },
    {
      title: 'Scale',
      value: 2,
      activeProgress: 10,
      description: '',
    },
    {
      title: 'Save',
      value: 2,
      activeProgress: 10,
      description: '',
    },  
  ];

  getProgressInfoData(): Observable<ProgressInfo[]> {
    return observableOf(this.progressInfoData);
  }
}
