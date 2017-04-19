import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  submit() {
    this.onSubmit.emit();
  }

}
