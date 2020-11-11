import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GroupComponent} from './group/group.component';
import {AdminComponent} from './admin.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {path: 'user', component: UserComponent},
      {path: 'group', component: GroupComponent},
      {path: 'dashboard', component: DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
