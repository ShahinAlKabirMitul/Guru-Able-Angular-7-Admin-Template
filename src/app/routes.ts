import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GroupComponent } from './components/setup/group/group.component';

export const AppRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'group', component: GroupComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
