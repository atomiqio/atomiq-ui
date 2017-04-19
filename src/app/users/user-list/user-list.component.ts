import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  createMode = false
  users: User[] = [
    new User('freignat', 'freignat@axway.com', '', 'admin')
  ];

  constructor() {
  }

  ngOnInit() {
  }
  setCreateMode(mode: boolean) {
    this.createMode = mode
  }
  order(orderby: string) {
  }
  selectAllItems() {
    for (let user of this.users) {
      user.checked=true
    }
  }

}
