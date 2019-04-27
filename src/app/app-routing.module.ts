import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutmeComponent } from './components/pages/aboutme/aboutme.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { TutorialsComponent } from './components/pages/tutorials/tutorials.component';
import { RaspberrypiwebserverComponent } from './components/pages/tutorials/raspberrypiwebserver/raspberrypiwebserver.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'technicalwriting', component: TutorialsComponent },
  { path: 'technicalwriting/raspberrypi', component: RaspberrypiwebserverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
