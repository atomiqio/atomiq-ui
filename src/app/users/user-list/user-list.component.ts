import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  createMode = false

  constructor(private usersService : UsersService) {
  }

  ngOnInit() {
  }
  setCreateMode(mode: boolean) {
    this.createMode = mode
  }
  order(orderby: string) {
  }
  selectAllItems() {
    for (let user of this.usersService.users) {
      user.checked=true
    }
  }

}
