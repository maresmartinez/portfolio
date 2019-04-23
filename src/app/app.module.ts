import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectoverviewComponent } from './projectoverview/projectoverview.component';
import { ProjectoverviewlistComponent } from './projectoverviewlist/projectoverviewlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    ProjectoverviewComponent,
    ProjectoverviewlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
