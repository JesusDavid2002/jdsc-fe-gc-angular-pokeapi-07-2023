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

  // Devuelve un pokemon mediante su id
  getById(id: number): Observable<Pokemon>{ 
    return this.http.get<Pokemon>(this.baseUrl + id);       
  }
  
  // Devuelve una generacion de un pokemon
  getByIdGen(id: number): Observable<Pokemon>{ 
    return this.http.get<Pokemon>(this.baseUrlGeneration + id);       
  }

  // Devuelve un pokemon mediante su nombre
  getByName(name: string): Observable<Pokemon>{
    return this.http.get<Pokemon>(this.baseUrl + name)
  }

  // Genera un número aleatorio
  randomId(){
    let idRandom = (Math.floor(Math.random()*1000)+1);
    return idRandom;
  }
  
  // Recoge el número aleatorio, si ya a salido busca otro y los mete en pokemonId
  randomPokemons(): number[]{
    let pokemonId: number[] = [];

    for (let i = 0; i < 8; i++) {
      if(!pokemonId.includes(this.randomId())){
        pokemonId.push(this.randomId());
      }
    }
    return pokemonId;
  }
  
  // Recoge el array del método anterior, y va objeto a objeto para poder recoger los datos de la API y introducirlos en el array pokemons
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
}
