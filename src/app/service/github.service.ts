import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
url:string ='https://api.github.com/users'
  constructor() { }
}
