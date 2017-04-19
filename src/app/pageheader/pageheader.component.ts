import { Component, OnInit } from '@angular/core';
import { User } from '../users/user.model';
import { UsersService } from '../users/users.service';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-pageheader',
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.css']
})

export class PageheaderComponent implements OnInit {
  menuTitle = "title"
  menuItem = "item"

  constructor(private usersService : UsersService, private menuService : MenuService) {}

  ngOnInit() {
  }

  logout() {
    this.usersService.logout();
  }
}
