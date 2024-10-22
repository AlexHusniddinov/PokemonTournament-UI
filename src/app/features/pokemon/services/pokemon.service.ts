import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface Pokemon {
  id: number;
  name: string;
  type: string;
  wins: number;
  losses: number;
  ties: number;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = `${environment.apiUrl}/pokemon/tournament/statistics`; 

  constructor(private http: HttpClient) { }

  getPokemonList(sortBy: string, sortDirection: string): Observable<Pokemon[]> {
    let params = new HttpParams()
      .set('sortBy', sortBy)
      .set('sortDirection', sortDirection);

    return this.http.get<Pokemon[]>(this.apiUrl, { params });
  }
}
