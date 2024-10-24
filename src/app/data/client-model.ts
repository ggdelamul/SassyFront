export enum StatutClient {
  prospect = 'prospect',
  actif = 'actif',
}

export interface Client {
  id: number;
  raisonSociale: string;
  datecreation: string;
  adressemail: string;
  telephone: string;
  adresse: string;
  statut: StatutClient
}
export type ClientList = Client[];
