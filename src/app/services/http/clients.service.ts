import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client, ClientList } from '../../data/client-model';
@Injectable({
  providedIn: 'root',
})
export class clientsService {
  private readonly httpClient = inject(HttpClient);
  private readonly API_URL = 'http://localhost:3000/Clients';
  getAllClients(): Observable<ClientList>
  {
    return this.httpClient.get<ClientList>(this.API_URL);
  }
  getClientById(id:number)
  {
    const client = this.httpClient.get<Client>(`${this.API_URL}/${id}`);
    return client;
  }
}