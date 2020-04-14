import { Component, OnInit } from '@angular/core';
import{Repos} from '../../repos'
import{User} from "../../user"
import{GithubService} from '../../service/github.service'

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
user:User;
username:string;
repo:Repos;

userView=true;
  constructor(private service:GithubService) { }
  getuserDetails(){
    this.service.getUser();
    this.user=this.service.user;
    
    this.service.getdefaultUser(this.username)
    // console.log(this.username )
  
    this.service.getRepos(this.username)
    this.repo=this.service.repo;
    // console.log(this.repo )
  }
  switchView() {
    this.userView = !this.userView;
  }
  ngOnInit(): void {
    this.service.getUser();
    this.user = this.service.user;
    // console.log(this.user)

    this.service.getRepos(this.username)
    this.repo=this.service.repo;
    // console.log(this.repo)

  }
  }


