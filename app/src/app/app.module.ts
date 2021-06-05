import { UserDetailsSectionComponent } from './users-page/user-details-section/user-details-section.component';
import { UsersService } from './../services/users-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { QuarterButtonsSectionComponent } from './users-page/quarter-buttons-section/quarter-buttons-section.component';
import { UserListSectionComponent } from './users-page/user-list-section/user-list-section.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    UserDetailsSectionComponent,
    QuarterButtonsSectionComponent,
    UserListSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
