import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonModule } from './pokemon.module';

const PokemonRoutes: Routes = [
  { path: 'list', component: PokemonListComponent },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

export const PokemonRoutingModule: ModuleWithProviders<PokemonModule> = RouterModule.forChild(PokemonRoutes);

