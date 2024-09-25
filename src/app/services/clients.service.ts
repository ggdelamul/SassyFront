import { Injectable } from '@angular/core';
import { ClientList, Client } from '../data/client-model';
import { LIST_CLIENT } from '../data/client-list-fake';
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  getClientList(): ClientList {
    return LIST_CLIENT;
  }
  getLastClient(): Client {
    const client = LIST_CLIENT.at(-1);
    if (!client) {
      throw new Error("Il n'existe aucun client");
    }
    return client;
  }
  getClientById(id: string | null): Client {
    const client = LIST_CLIENT.find((client) => client.IdClient === id);
    if (!client) {
      throw new Error("Il n'existe pas de client à cette id");
    }
    return client;
  }
}
