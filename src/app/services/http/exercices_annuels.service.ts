import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Exercice_annuel,
  Exercice_annuelList,
} from '../../data/exercices_annuels-model';
@Injectable({
  providedIn: 'root',
})
export class Exercice_Annuel_Service {
  private readonly HttpClient = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/exercicesannuels';
  getAllExerciceAnnuel(): Observable<Exercice_annuelList> {
    return this.HttpClient.get<Exercice_annuelList>(this.API_URL);
  }
  getExerciceAnnuelById(id:number):Observable<Exercice_annuel>
  {
    return this.HttpClient.get<Exercice_annuel>(`${this.API_URL}/${id}`);
  }
}
