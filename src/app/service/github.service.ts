import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{User} from '../user'
import{Repos}from '../repos'



@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user:User;
  private defaultUser:string;
  repo:Repos;

 url:string ='https://api.github.com/users'
  apiKey: string='ab5ab9c1c0bffa685aff300678da76cd7afd0743';

  constructor(private http:HttpClient) {
    this.user=new User ('', '', '', '', 0, 0, 0);
    this.defaultUser='Nasseh123';
    this.repo= new Repos('', '', '');

   }
   getUser(){
     interface apiFeedback{
      login: string;
      avatar_url: string;
      html_url: string;
      name: string;
      public_repos: number;
      followers: number;
      following: number;
     }
     const promise = new Promise(((resolve, reject) => {
      this.http.get<apiFeedback>(this.url+'/' + this.defaultUser+'?access_token=' + this.apiKey).toPromise()
      .then(res => {
         this.user.login = res.login;
          this.user.avatar_url = res.avatar_url;
          this.user.html_url = res.html_url;
          this.user.name = res.name;
          this.user.followers = res.followers;
          this.user.following = res.following;
          this.user.public_repos = res.public_repos;
        },
        error => {

      reject(error);
    });
    }));
    return promise;
  }
  getdefaultUser (username:string){
    this.defaultUser = username;
  }
  getRepos(username:any) {

    interface apiFeedback {
      name: string;
      html_url: string;
      description: string;
    }

    const promise = new Promise(((resolve, reject) => {
      this.http.get<apiFeedback>(this.url+'/' + this.defaultUser + '/repos?access_token=' + this.apiKey )
        .toPromise()
        .then(res => {
          this.repo = res;
    }, error => {

      reject(error);
      
    });
  }));
  return promise;
   }
  }
