import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './routes';
import { AppComponent } from './app.component';
import { PreloadComponent } from './components/_common/preload/preload.component';
import { NavbarComponent } from './components/_common/navbar/navbar.component';
import { SidebarComponent } from './components/_common/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GroupComponent } from './components/setup/group/group.component';
import { LoginComponent } from './components/login/login.component';

import { AlertifyService } from './_services/alertify.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    GroupComponent,
    PreloadComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(AppRoutes)],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
