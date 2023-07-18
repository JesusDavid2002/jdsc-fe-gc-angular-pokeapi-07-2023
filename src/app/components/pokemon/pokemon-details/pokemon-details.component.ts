import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {

  pokemonId: number = 1;
  pokemon: Pokemon = new Pokemon();
  generation: Pokemon = new Pokemon();

  constructor(private pokeService: PokemonService, private route: ActivatedRoute){}

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      this.pokemonId = params ['id'];
    });

    this.pokeService.getById(this.pokemonId).subscribe(
      resultado => {
        this.pokemon = resultado;
      });
    
    this.pokeService.getByIdGen(this.pokemonId).subscribe(
      resultado => {
        this.generation = resultado;
      }); 
  }
}
