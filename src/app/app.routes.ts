import { Routes } from '@angular/router';
import { TodoComponent } from './todo';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: TodoComponent },
  { path: 'todo',  component: TodoComponent },
  { path: 'about', component: AboutComponent },
  { path: '**',    component: NoContentComponent },
];
