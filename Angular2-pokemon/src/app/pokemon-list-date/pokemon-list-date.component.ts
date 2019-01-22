import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {Pokemon} from './../pokemon';
import {PokemonService} from './../pokmon.service';

@Component({
  selector: 'pokemon-list-date',
  templateUrl: './pokemon-list-date.component.html',
  styleUrls: ['./pokemon-list-date.component.css']
})

export class PokemonListDateComponent {
  //formGroup van de html wordt gedeclareerd
    searchDate: FormGroup;
    //2 lege arrays van pokemon objecten worden aangemaakt
    pokemonsDate: Pokemon[] = [];
    allPokemon: Pokemon[] = [];
    //de 2 inputfields van de html worden gedeclareerd
    date1String: string;
    date2String: string;

    //pokemon service wordt geïnitialisseerd
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    //de formGroup wordt eerst leeggemaakt
    this.searchDate = new FormGroup({
      date1String: new FormControl(''),
      date2String: new FormControl('')
    });
    //promise waarbij de data die wordt opgehaald uit de service wordt opgeslagen in de pokemon array
    this.pokemonService.getPokemons().subscribe(data => this.allPokemon = data);
  }

  //wordt aangeroepen als formGroup wordt gesubmit na ngSubmit
  onSubmit() {
    /*wordt in de pokemonsDate array de de methode searchPokemonDate aangeroepen van de service met als  
    parameters de 2 ingevoerde datums en de lijst van alle pokemons
    */
    this.pokemonsDate = this.pokemonService.searchPokemonDate(this.searchDate.value.date1String,
        this.searchDate.value.date2String, this.allPokemon);
  }
}
