import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//components
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
//Services
import { UsersService } from './users/users.service';
import { MenuService } from './menu.service'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PageheaderComponent,
    UsersComponent,
    UserListComponent,
    UserCreateComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [UsersService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
