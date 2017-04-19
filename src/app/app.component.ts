import { Component, ViewChild } from '@angular/core';
import {SidebarComponent} from './sidebar/sidebar.component';
import {PageheaderComponent} from './pageheader/pageheader.component';
import { CommonModule } from '@angular/common';
import { User } from './users/user.model';
import { UsersService } from './users/users.service'
import { MenuService } from './menu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild(PageheaderComponent)
  private pageHeader: PageheaderComponent;

  constructor(private usersService : UsersService, private menuService : MenuService) { }

}
