import { Component, OnInit, Input } from '@angular/core';
import { ProjectDetails } from '../../models/ProjectDetails';

@Component({
  selector: 'app-projectoverviewlist',
  templateUrl: './projectoverviewlist.component.html',
  styleUrls: ['./projectoverviewlist.component.css']
})
export class ProjectoverviewlistComponent implements OnInit {
  
  projectoverviews: ProjectDetails[];

  constructor() { }

  ngOnInit() {
    // TODO: replace hard-coded array with calls to github api
    this.projectoverviews = [
      {
        id: 1,
        name: 'D&D Companion App',
        description: 'Dungeons & Dragons ASP.NET application to create characters, campaigns, and provide tools to assist in playing a session',
        codeUrl: 'https://github.com/maresmartinez/prog37721_dndcompanionapp',
        imageUrl: '../../assets/images/project_dnd.png',
        liveDemo: false
      },
      {
        id: 2,
        name: 'Tic Tac Turing',
        description: 'React application that allows user to play tic tac toe with an AI opponent',
        codeUrl: 'https://maresmartinez.github.io/tictacturing/',
        imageUrl: '../../assets/images/project_tictacturing.png',
        liveDemo: true
      },
      {
        id: 3,
        name: 'To-Do List',
        description: 'Angular todo list application styled with Bootstrap',
        codeUrl: 'https://maresmartinez.github.io/todoapp/',
        imageUrl: '../../assets/images/project_todolist.png',
        liveDemo: true
      },
    ];
  }

}
