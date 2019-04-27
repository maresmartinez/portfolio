import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/layout/header/header.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ContactComponent } from './components/layout/contact/contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ProjectoverviewComponent } from './components/projectoverview/projectoverview.component';
import { ProjectoverviewlistComponent } from './components/projectoverviewlist/projectoverviewlist.component';
import { ShowcaseComponent } from './components/layout/showcase/showcase.component';
import { AboutmeComponent } from './components/pages/aboutme/aboutme.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { TutorialsComponent } from './components/pages/tutorials/tutorials.component';
import { RaspberrypiwebserverComponent } from './components/pages/tutorials/raspberrypiwebserver/raspberrypiwebserver.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    ProjectoverviewComponent,
    ProjectoverviewlistComponent,
    ShowcaseComponent,
    AboutmeComponent,
    ProjectsComponent,
    TutorialsComponent,
    RaspberrypiwebserverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
