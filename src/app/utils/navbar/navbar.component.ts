import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(private router: Router, private userService: UsersService){}

  LogOut(){
    this.userService.logout().then(
      () => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
}
