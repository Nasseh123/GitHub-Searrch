import { Component, OnInit } from '@angular/core';
import{User} from '../../user'
import{GithubService} from '../../service/github.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:User;
  username: string;

  userView=true;
  constructor(private service:GithubService) { }

  getuserDetails(){
    this.service.getUser();
    this.user=this.service.user;
    
    this.service.getdefaultUser(this.username)
    console.log(this.username)
  }
  switchSearch() {
    this.userView = !this.userView;
  }

  ngOnInit(): void {
    this.service.getUser();
    this.user = this.service.user;
  }

}
