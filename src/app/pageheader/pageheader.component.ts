import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageheader',
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.css']
})
export class PageheaderComponent implements OnInit {
  menuTitle = "title"
  menuItem = "item"
  constructor() { }

  ngOnInit() {
  }
  setMenu(title, item) {
    this.menuTitle = title
    this.menuItem = item
  }

}
