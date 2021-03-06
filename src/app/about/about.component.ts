import { Component, OnInit, Inject } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { flyInOut } from '../animations/app.animation';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block',
  },
  animations: [flyInOut()],
})
export class AboutComponent implements OnInit {
  leaders: Leader[];

  constructor(
    private leaderService: LeaderService,
    @Inject('BaseURL') public BaseURL: any
  ) {}

  ngOnInit(): void {
    this.leaderService
      .getLeaders()
      .subscribe((leaders) => (this.leaders = leaders));
  }
}
