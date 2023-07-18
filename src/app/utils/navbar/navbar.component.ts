import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  name: string = '';

  constructor(private router: Router, private userService: UsersService, private pokeService: PokemonService){}

  search(){    
    this.pokeService.getByName(this.name.toLocaleLowerCase()).subscribe(
      resultado => {
        this.router.navigateByUrl('details/' + resultado.id);
      });
    this.name = '';
  }

  LogOut(){
    this.userService.logout().then(
      () => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
}
