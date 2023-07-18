import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';
import { forkJoin, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  baseUrlGeneration: string = 'https://pokeapi.co/api/v2/pokemon-species/';
  arrayRandoms: any = [];

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Pokemon>{ 
    return this.http.get<Pokemon>(this.baseUrl + id);       
  }
  
  getByIdGen(id: number): Observable<Pokemon>{ 
    return this.http.get<Pokemon>(this.baseUrlGeneration + id);       
  }

  randomId(){
    let idRandom = (Math.floor(Math.random()*1000)+1);
    return idRandom;
  }

  getRandomPokemons(): Pokemon[]{
    let arrayRandomPokemons: number[] = this.randomPokemons();
    let pokemons : Pokemon[] = [];

    for (let i = 0; i < 8; i++) {
      this.getById(arrayRandomPokemons[i]).subscribe(
        resultado => {
          pokemons.push(resultado)
        });
      
    }
    return pokemons;
  } 

  randomPokemons(): number[]{
    let pokemonId: number[] = [];

    for (let i = 0; i < 8; i++) {
      if(!pokemonId.includes(this.randomId())){
        pokemonId.push(this.randomId());
      }
    }
    return pokemonId;
  }
}
