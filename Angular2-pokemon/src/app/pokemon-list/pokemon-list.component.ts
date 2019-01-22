import { Component, OnInit } from '@angular/core';
import {PokemonService} from './../pokmon.service';
import {Pokemon} from './../pokemon';
import {Recept} from './../recept';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  //lege array van pokemon objecten wordt aangemaakt
  pokemons: Pokemon[] = [];
  receptes: Recept[] = [];

  //initialisatie van de pokemon service
  constructor(private _pokemonService: PokemonService) { }

  ngOnInit() {
    //de promise om alle pokemons uit de service te halen wordt aangeroepen
    this._pokemonService.getPokemons().subscribe(data => this.pokemons = data);
  }

}
