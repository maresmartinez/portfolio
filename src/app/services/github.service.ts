import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectDetails } from '../models/ProjectDetails';

const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
};

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  url = 'https://api.github.com';
  username = 'maresmartinez';

  constructor(private http: HttpClient) { }

  getUser(): Observable<ProjectDetails> {
    const url = `${this.url}/users/${this.username}`;
    return this.http.get<ProjectDetails>(url, httpOptions);
  }

  getRepos(): Observable<ProjectDetails[]> {
    const url = `${this.url}/users/${this.username}/repos?sort=updated`;
    return this.http.get<ProjectDetails[]>(url, httpOptions);
  }
}
