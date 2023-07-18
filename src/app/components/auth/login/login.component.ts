import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UsersService, private router: Router){}
  
  // Metodo para logearse y redireccionarse a la home
  inicarSesion(){
    let usuario = {
      'email': this.email,
      'password': this.password
    }

    // Llamo al metodo login del servicio de users para logear al usuario que ya esta registrado
    this.userService.login(usuario)
      .then(response => {
          this.router.navigate(['/home']);
        })
      .catch(error =>{
        alert('Constraseña incorrecta.');
        console.log(error)});
  }

  // Metodo para logearse y registrarse mediante Google y redireccionarse a la home
  inicarSesionGoogle(){
    this.userService.loginWithGoogle()
      .then(response => {
          console.log(response);
          this.router.navigate(['/home']);
        })
      .catch(error => console.log(error));
  }
}
