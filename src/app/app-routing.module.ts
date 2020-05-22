import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListAllUserComponent} from './list-all-user/list-all-user.component';
import {ListAllPropertiesComponent} from './list-all-properties/list-all-properties.component';
import {CreateSupportTeamComponent} from './create-support-team/create-support-team.component';
import {ViewSupportTeamComponent} from './view-support-team/view-support-team.component';


const routes: Routes = [
  { path: 'listalluser', component: ListAllUserComponent },
  { path: 'listallproperties', component: ListAllPropertiesComponent },
  { path: 'viewsupportteam', component: ViewSupportTeamComponent },
  { path: 'addsupport', component: CreateSupportTeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
