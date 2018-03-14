import { Injectable } from '@angular/core';
import { ISession } from '../../event.model';

@Injectable()
export class VoterService {
  constructor() {}

  deleteVoter(session: ISession, voterName: string): void {
    session.voters = session.voters.filter(voter => voter !== voterName);
    console.log(session.voters);
  }

  addVoter(session: ISession, currentUser: string): void {
    session.voters.push(currentUser);
  }

  userHasVoted(session: ISession, currentUser: string): boolean {
    return session.voters.some(voter => voter === currentUser);
  }
}
