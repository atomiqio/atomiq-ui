import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  @Output() onLogging = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {
  }

  logging(name: string, pwd: string) {
    this.onLogging.emit(new User(name, pwd, '',''));
  }

}
