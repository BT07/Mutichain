import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { LoginstudentComponent } from './loginstudent/loginstudent.component';
import { LogincreatorComponent } from './logincreator/logincreator.component';
import { LoginuniversityComponent } from './loginuniversity/loginuniversity.component';
import { CreatordashComponent } from './creatordash/creatordash.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    LoginstudentComponent,
    LogincreatorComponent,
    LoginuniversityComponent,
    CreatordashComponent,
    NavbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
