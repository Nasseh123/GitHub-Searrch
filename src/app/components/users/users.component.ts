import { Component, OnInit } from '@angular/core';
import{User} from '../../user'
import{GithubService} from '../../service/github.service'
import{Repos}from '../../repos'

import{FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:User;
  username: string;
  repo:Repos;
  userView=true;
  constructor(public service:GithubService) { }

  getuserDetails(){
    this.service.getUser();
    this.user=this.service.user;
    
    this.service.getdefaultUser(this.username)
    
  
    this.service.getRepos(this.repo)
    this.repo=this.service.repo;
   
  }
  switchView() {
    this.userView = !this.userView;
  }

  ngOnInit(): void {
    this.service.getUser();
    this.user = this.service.user;
    console.log(this.user)

    this.service.getRepos(this.username)
    this.repo=this.service.repo;
    console.log(this.repo)
  }

}
