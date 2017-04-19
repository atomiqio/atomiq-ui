import { Component, ViewChild } from '@angular/core';
import {SidebarComponent} from './sidebar/sidebar.component';
import {PageheaderComponent} from './pageheader/pageheader.component';
import { CommonModule } from '@angular/common';
import { User } from './users/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(PageheaderComponent)
  private pageHeader: PageheaderComponent;
  userName = ""
  selectedMenuItem = "dashboard"

  onMenu(item : string) {
    this.selectedMenuItem = item
    console.log(this.selectedMenuItem)
    if (item == "dashboard") {
      this.pageHeader.setMenu("Home", item)
    } else if (item == "nodes") {
      this.pageHeader.setMenu("Node list", item)
    } else if (item == "stacks") {
      this.pageHeader.setMenu("Stack list", item)
    } else if (item == "password") {
      this.pageHeader.setMenu("Settings", item)
    } else if (item == "users") {
      //modeCreate=false
      this.pageHeader.setMenu("Users", "users management")
    } else if (item == "swarms") {
      this.pageHeader.setMenu("Swarms", "swarm management")
    }
  }
  setUser(user : User) {
    this.userName = user.name
  }
}
