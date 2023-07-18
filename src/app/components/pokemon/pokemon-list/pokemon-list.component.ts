import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemons: any;

  constructor(private pokeService: PokemonService){}
  

  ngOnInit(): void{
    this.pokemons = this.pokeService.getRandomPokemons();
  }
}
