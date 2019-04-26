import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json')
};

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  url: string = 'https://api.github.com/';
  username: string = 'maresmartinez';
  authorization: string = '?client_id=f2526e89e2f01b0ffe20&client_secret=b1ac637451676d3fbb3495bcfa2f59fd96f493e3';

  constructor(private http: HttpClient) { }

  getUser(): Observable<JSON> {
    const url = this.url + 'users/' + this.username + this.authorization;
    return this.http.get<JSON>(url, httpOptions);
  }

  getRepos(): Observable<JSON> {
    const url = this.url + 'users/' + this.username + '/repos' + this.authorization;
    return this.http.get<JSON>(url, httpOptions);
  }
}
