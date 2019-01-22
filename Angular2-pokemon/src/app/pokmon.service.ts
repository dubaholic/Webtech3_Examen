import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Pokemon} from './pokemon';
import { Recept } from './recept';

@Injectable()
export class PokemonService {
  //locale json met alle pokemons
  private _url: string = '/assets/data/pokemon.json';

  //Array van alle mogelijke trainers
  private trainers:string[] = new Array('Ash', 'Misty', 'Brock', 'Team Rocket');
  //Initialisatie van de httpclient
  constructor(private http:HttpClient) { }

  //Methode om alle pokemon objecten uit de json terug te krijgen
  getPokemons(): Observable<Pokemon[]>{
    //returned alle pokemon objecten van de meegegeven json
      return this.http.get<Pokemon[]>(this._url);
  }

  addRecept(naam: string, calorien: string, ingredienten: string, tijd: string): string {
    let ingredientenCheck: string ='';
    const recept: Recept[]= [];
    if(localStorage.getItem(naam) != null) {
      ingredienten = localStorage.getItem(naam);
    } else {
    localStorage.setItem(naam, ingredienten);
      }
    return ingredienten;
  }

  //zoekt een specifieke pokemon en geeft daarbij een string terug
  searchPokemon(name: string): string{
    //de trainer variabele wordt leeggemaakt
    let trainer: string = '';
    //als de gezochte pokemon al in localstorage zit
    if (localStorage.getItem(name) != null) {
      /*wordt deze pokemon opgezocht in de localstorage en wordt de trainer 
      die hierbij hoort opgeslagen in de trainer variabele */
      trainer = localStorage.getItem(name);
    } else {
      //anders wordt een random waarde berekent
      const max: number = this.trainers.length - 1;
      const min:number = 0;
      const range:number = max - min + 1;
      const rnd: number = (Math.random() * range) + min;
      //vervolgens wordt een random trainer uit de array gehaald
      trainer = this.trainers[Math.floor(rnd)];
      //wordt de pokemon naam met deze random trainer opgeslagen in localstorage
      localStorage.setItem(name, trainer);
    }
 return trainer;

  }

  
//Pokemon opzoeken op basis van 2 datums die worden meegegeven en de lijst van alle pokemons
//Returned een Array van Pokemon
searchPokemonDate(date1String: string, date2String: string, allPokemon: Pokemon[]): Pokemon[] {
  //lege array van pokemons gedeclareerd die moeten worden teruggegeven 
  const somePokemon: Pokemon[] = [];
  //ingevoerde datums in variabele gestoken
    const date1 = new Date(date1String);
    const date2 = new Date(date2String);
    //de hele lijst van pokemons wordt geloopt
    for (const pokemon of allPokemon) {
      //waarbij elke pokemon zijn dataOwned wordt opgeslagen in een variabele
        const dateOwned = new Date(pokemon.owned);
        //en vervolgens wordt gechecked of deze pokemon zijn datum tussen de 2 opgegeven datums ligt
        if (dateOwned > date1 && dateOwned < date2) {
          //als dit zo is wordt de pokemon toegevoegd aan de array van pokemons die moeten worden teruggegeven
            somePokemon.push(pokemon);
    }
}
  //de array van de gezochte pokemon
    return somePokemon;
  }
}
