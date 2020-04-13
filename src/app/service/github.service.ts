import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{User} from '../user'
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user:User;
  defaultUser:string;
url:string ='https://api.github.com/users'

  constructor(private http:HttpClient) {
    this.user=new User ('', '', '', '', 0, 0, 0);

   }
}
