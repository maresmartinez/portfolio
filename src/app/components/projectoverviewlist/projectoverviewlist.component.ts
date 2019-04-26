import { Component, OnInit, Input } from '@angular/core';
import { ProjectDetails } from '../../models/ProjectDetails';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-projectoverviewlist',
  templateUrl: './projectoverviewlist.component.html',
  styleUrls: ['./projectoverviewlist.component.css']
})

export class ProjectoverviewlistComponent implements OnInit {

  @Input() repoLimit: number;
  projectoverviews: ProjectDetails[];

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getRepos().subscribe(repos => {
      this.projectoverviews = repos;
    });
  }
}
