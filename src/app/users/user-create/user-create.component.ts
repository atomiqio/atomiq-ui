import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  constructor(private usersService : UsersService) { }

  ngOnInit() {
  }
  submit(username, useremail, userpwd) {
    let user = new User(username.value, useremail.value, userpwd.value ,'')
    this.usersService.createUser(user)
  }
}
