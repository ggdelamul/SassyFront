export interface Client {
  id: string | null;
  raisonSociale: string;
  dateCreation: string;
  adresseMail: string;
  telephone: string;
  adresse: string;
}
export type ClientList = Client[];
