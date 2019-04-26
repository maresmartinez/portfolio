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
  authorization = '?client_id=f2526e89e2f01b0ffe20&client_secret=b1ac637451676d3fbb3495bcfa2f59fd96f493e3';

  constructor(private http: HttpClient) { }

  getUser(): Observable<ProjectDetails> {
    const url = `${this.url}/users/${this.username}${this.authorization}`;
    return this.http.get<ProjectDetails>(url, httpOptions);
  }

  getRepos(): Observable<ProjectDetails[]> {
    const url = `${this.url}/users/${this.username}/repos${this.authorization}`;
    return this.http.get<ProjectDetails[]>(url, httpOptions);
  }
}
