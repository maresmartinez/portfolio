import { Component, OnInit} from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService]
})

export class AppComponent implements OnInit {
  title = 'Mares Martinez | Portfolio';

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getRepos().subscribe(repos => {
      console.log(repos);
    });
    this.githubService.getUser().subscribe(user => {
      console.log(user);
    });
  }
}
