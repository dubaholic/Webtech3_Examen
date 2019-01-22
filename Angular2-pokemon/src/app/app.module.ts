import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonService } from './pokmon.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonListDateComponent } from './pokemon-list-date/pokemon-list-date.component';
@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonSearchComponent,
    PokemonListDateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule, ReactiveFormsModule, ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
