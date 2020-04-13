import { Component, OnInit } from '@angular/core';
import{User} from '../../user'
import{GithubService} from '../../service/github.service'
import{Repos}from '../../repos'

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
  constructor(private service:GithubService) { }

  getuserDetails(){
    this.service.getUser();
    this.user=this.service.user;
    
    this.service.getdefaultUser(this.username)
    console.log(this.username)
  
    this.service.getRepos(this.repo)
    this.repo=this.service.repo;
  }
  switchSearch() {
    this.userView = !this.userView;
  }

  ngOnInit(): void {
    this.service.getUser();
    this.user = this.service.user;

    this.service.getRepos(this.username)
    this.repo=this.service.repo;
  }

}
