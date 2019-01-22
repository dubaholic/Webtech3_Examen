import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {Pokemon} from './../pokemon';
import {Recept} from './../recept';
import {PokemonService} from './../pokmon.service';

@Component({
  selector: 'pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})

export class PokemonSearchComponent {
  //formGroup die wordt gebruikt in de html wordt gedeclareerd
  search: FormGroup;
  //input en output van html worden gedeclareerd
  naam: string;
  calorien: string;
  ingredienten: string; 
  tijd: string;

  resultnaam: string;

  //initialisatie van de pokemonService
  constructor(private pokemonService: PokemonService) { }
  

  ngOnInit() {
    //als de pagina wordt geladen wordt heel de form leeggemaakt
    this.search = new FormGroup({
      name: new FormControl('')
    });
  }

  onSubmit() {
    /*als de form wordt gesubmit dan wordt 
      in de result_trainer de data opgeslagen die wordt opgeropen uit de pokemonService
      met als parameter de waarde de naam van de gezochte pokemon
    */
    this.pokemonService.addRecept(this.search.value.naam, this.search.value.calorien, this.search.value.ingredienten, this.search.value.tijd);
  }

}
