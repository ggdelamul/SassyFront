import { CalculService } from '../services/metier/calculService';
import { Client } from './client-model';
import { Prestation_List } from './prestation-model';
export enum Statut {
  attente = 'en attente',
  envoye = 'envoyé',
  paye = 'payé',
}
export interface IFacture {
  id: string | null;
  reference: string;
  dateCreation: string;
  statutFacture: Statut;
  client: Client | null;
  prestation: Prestation_List[] | null;
}
/***
 * @todo mettre en place la verifciation du taux de tva compris entre 0 et 100
 */
export class Facture implements IFacture {
  id: string | null;
  reference: string;
  dateCreation: string;
  statutFacture: Statut;
  client: Client | null;
  prestation: Prestation_List[] | null;
  montantHt: number;
  tauxTva: number;
  montantTTC: number;
  calculservice: CalculService;
  constructor(
    id: string | null,
    reference: string,
    dateCreation: string,
    statutFacture: Statut,
    client: Client | null,
    prestation: Prestation_List[] | null,
    montantHt: number,
    tauxTva: number,
    calculservice: CalculService
  ) {
    this.id = id;
    this.reference = reference;
    this.dateCreation = dateCreation;
    this.statutFacture = statutFacture;
    this.client = client;
    this.prestation = prestation;
    this.montantHt = montantHt;
    this.tauxTva = tauxTva;
    this.calculservice = calculservice;
    this.montantTTC = this.calculservice.calculerMontantTTC(
      this.montantHt,
      this.tauxTva
    );
  }

  changerStatut(nouveauStatut: Statut): void {
    this.statutFacture = nouveauStatut;
  }
}

export type FacturesList = Facture[];
