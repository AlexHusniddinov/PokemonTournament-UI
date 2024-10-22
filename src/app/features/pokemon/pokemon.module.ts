import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from './services/pokemon.service';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

//Angular Material imports
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';

//Components
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonRoutingModule } from './pokemon-routing';


@NgModule({
    declarations: [
        PokemonListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        MatSelectModule,  
        MatFormFieldModule,  
        MatCardModule,  
        MatButtonModule,  
        MatIconModule, 
        MatInputModule, 
        MatOptionModule,
        PokemonRoutingModule
    ],
    providers: [PokemonService]
})
export class PokemonModule { }
