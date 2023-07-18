import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  passwordValid: string = '';
  
  constructor(private userService: UsersService, private router: Router){}

  // Creamos un método para validar el usuario, si las 2 contraseña son iguales entonces crea el usuario
  validateUser(){
    if(this.password === this.passwordValid){
      this.createUser();
    }else{
      alert('Passwords are not equals');
    }
  }

  // Creamos un método para crear al usuario
  createUser(){
    let usuario = { 
      'email': this.email,    
      'password': this.password
    }
    
    // Llamo al metodo register del servicio de users para registrar al usuario en la base de datos
    this.userService.register(usuario)
    .then(response => {
        this.router.navigate(["/login"]);
      })
    .catch(error => console.log(error));
  }
}
