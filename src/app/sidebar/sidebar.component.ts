import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() onMenu = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onDashboard() {
    this.onMenu.emit("dashboard");
  }
  onNodes() {
  this.onMenu.emit("nodes");
  }
  onStacks() {
    this.onMenu.emit("stacks");
  }
  onPassword() {
    this.onMenu.emit("password")
  }
  onUsers() {
    this.onMenu.emit("users")
  }
  onSwarms() {
    this.onMenu.emit("swarms")
  }
}
