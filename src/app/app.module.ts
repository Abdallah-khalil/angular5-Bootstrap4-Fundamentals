import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events-list.component';
import { NavComponent } from './nav/nav.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsService } from './events/event.service';
import { CustomCommonModule } from './common/customCommon.module';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404/404.component';
import { EventRouteActivatorGuard } from './events/event-route-activator.guard';
import {
  checkDirtyState,
  CHECKDIRTYSTATE
} from './events/checkDirtyState.guard';
import { AuthService } from './user/auth.service';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { UpvoteComponent } from './events/event-details/session-list/upvote/upvote.component';
import { VoterService } from './events/event-details/session-list/voter.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EventsComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomCommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventsService,
    EventRouteActivatorGuard,
    AuthService,
    { provide: CHECKDIRTYSTATE, useValue: checkDirtyState },
    VoterService
  ],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule {}
