import { Routes } from '@angular/router';
import { EventsComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404/404.component';
import { EventRouteActivatorGuard } from './events/event-route-activator.guard';
import { EventsService } from './events/event.service';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
import { CHECKDIRTYSTATE } from './events/checkDirtyState.guard';


export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: [CHECKDIRTYSTATE]
  },
  {
    path: 'events',
    component: EventsComponent,
    resolve: {
      events: EventsService
    }
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivatorGuard]
  },
  {
    path: 'events/session/new',
    component: CreateSessionComponent
  },
  { path: '404', component: Error404Component },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];
