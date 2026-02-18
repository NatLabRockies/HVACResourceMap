import { Component } from '@angular/core';
import { SharedService } from '@services/shared.service';

@Component({
  templateUrl: './split-system.component.html',
  styleUrls: ['./split-system.component.scss']
})
export class SplitSystemComponent {
  readonly title = 'Split Systems';

  constructor(private sharedService: SharedService) {
    sharedService.setTitle(this.title);
    sharedService.setActiveSelectors('cp-outline');
  }

}
