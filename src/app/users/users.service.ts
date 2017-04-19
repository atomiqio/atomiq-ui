import { Injectable, Output, EventEmitter } from '@angular/core';
import { User } from '../users/user.model'

//@Injectable()
export class UsersService {
  users : User[] = []
  noLoginUser : User = new User('no-login', '', '', '')
  currentUser : User = this.noLoginUser
  createMode = false
  @Output() onUserCreate = new EventEmitter<void>();
  @Output() onUserLogin = new EventEmitter<void>();
  @Output() onUserLogout = new EventEmitter<void>();

  constructor() {
    this.users.push(new User('freignat', 'freignat@axway.com', '', ''))
    this.users.push(new User('bquenin', 'bquenin@axway.com', '', ''))
  }

  logout() {
    this.currentUser = this.noLoginUser
    this.onUserLogout.emit()
  }

  login(user : User) {
    this.currentUser = user
    this.onUserLogin.emit()
  }

  createUser(user : User) {
    this.users.push(user)
    this.createMode = false
    this.onUserCreate.emit();
  }

  setCreateMode(mode : boolean) {
    this.createMode = mode
  }
}
