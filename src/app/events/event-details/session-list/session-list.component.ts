import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../../event.model';
import { AuthService } from '../../../user/auth.service';
import { VoterService } from './voter.service';

@Component({
  selector: 'ev-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  visibleSession: ISession[] = [];
  constructor(public authSvc: AuthService, private voterSvc: VoterService) {}

  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSession();
      this.sortBy === 'name'
        ? this.visibleSession.sort(sortByNameAsc)
        : this.visibleSession.sort(sortByVotesDesc);
    }
  }

  toggleVoters(session: ISession): void {

    if (this.userHasVoted(session)) {
      this.voterSvc.deleteVoter(session, this.authSvc.currentUser.userName);
    } else {
      this.voterSvc.addVoter(session, this.authSvc.currentUser.userName);
    }
    if (this.sortBy === 'votes') {
      this.visibleSession.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession): boolean {
    return this.voterSvc.userHasVoted(
      session,
      this.authSvc.currentUser.userName
    );
  }

  filterSession(): void {
    if (this.filterBy === 'all') {
      this.visibleSession = this.sessions.slice(0);
    } else {
      this.visibleSession = this.sessions.filter(s => {
        return s.level.toLocaleLowerCase() === this.filterBy;
      });
    }
  }

  ngOnInit() {}
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  // tslint:disable-next-line:curly
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name)
    // tslint:disable-next-line:curly
    return 0;
  else
    // tslint:disable-next-line:curly
    return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
