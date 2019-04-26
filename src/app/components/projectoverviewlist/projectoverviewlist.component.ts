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
        imageUrl: 'https://repository-images.githubusercontent.com/174001068/65389a00-6617-11e9-9594-4d4b73614304',
      },
      {
        id: 2,
        name: 'Tic Tac Turing',
        description: 'React application that allows user to play tic tac toe with an AI opponent',
        codeUrl: 'https://github.com/maresmartinez/tictacturing',
        imageUrl: 'https://repository-images.githubusercontent.com/170792557/f0fdf680-6616-11e9-9b88-6ccc459fc16b',
        demoUrl: 'https://maresmartinez.github.io/tictacturing/'
      },
      {
        id: 3,
        name: 'To-Do List',
        description: 'Angular todo list application styled with Bootstrap',
        codeUrl: 'https://github.com/maresmartinez/todoapp',
        imageUrl: 'https://repository-images.githubusercontent.com/182346321/9d8ba880-6616-11e9-869a-db3ce3470c12',
        demoUrl: 'https://maresmartinez.github.io/todoapp/'
      },
    ];
  }

}
