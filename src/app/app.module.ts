import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListAllUserComponent } from './list-all-user/list-all-user.component';
import { ListAllPropertiesComponent } from './list-all-properties/list-all-properties.component';
import { ViewSupportTeamComponent } from './view-support-team/view-support-team.component';
import { CreateSupportTeamComponent } from './create-support-team/create-support-team.component';


import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListAllUserComponent,
    ListAllPropertiesComponent,
    ViewSupportTeamComponent,
    CreateSupportTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
