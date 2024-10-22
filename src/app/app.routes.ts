import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokemon',
    loadChildren: () => import('./features/pokemon/pokemon.module').then(m => m.PokemonModule) 
  },
  {
    path: '',
    redirectTo: '/pokemon',
    pathMatch: 'full'
  }
];

@NgModule({    
    imports: [
      ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
