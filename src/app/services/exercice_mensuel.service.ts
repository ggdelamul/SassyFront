import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exercice_mensuel, monthList } from '../data/exercices_mensuels-model';
@Injectable({
  providedIn: 'root',
})
export class exerciceMensuelService {
  private readonly HttpClient = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/exercicesannuels';
  getAllMonthExerciceFromAYear(
    id: number,
    mois: string
  ): Observable<monthList> {
    return this.HttpClient.get<monthList>(`${this.API_URL}/${id}/${mois}`);
  }
}
