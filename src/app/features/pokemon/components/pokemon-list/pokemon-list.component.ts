import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  sortBy: string = 'wins';
  sortDirection: string = 'desc';

  sortFields = [
    { value: 'id', label: 'ID' },
    { value: 'name', label: 'Name' },
    { value: 'wins', label: 'Wins' },
    { value: 'losses', label: 'Losses' },
    { value: 'ties', label: 'Ties' }
  ];

  pokemonImageBaseUrl: string = environment.pokemonImageBaseUrl;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.fetchSortedList();
  }

  fetchSortedList(): void {
    this.pokemonService.getPokemonList(this.sortBy, this.sortDirection).subscribe(
      (data: Pokemon[]) => {
        this.pokemonList = data;
      },
      (error) => {
        console.error('Error fetching Pokemon list:', error);
      }
    );
  }
}
