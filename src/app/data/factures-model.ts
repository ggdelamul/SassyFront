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
  calculService: CalculService;
  constructor(
    IdFacture: string | null,
    reference: string,
    dateCreation: string,
    statutFacture: Statut,
    Client: Client | null,
    prestation: Prestation_List[] | null,
    montantHt: number,
    tauxTva: number,
    calculService: CalculService
  ) {
    this.id = IdFacture;
    this.reference = reference;
    this.dateCreation = dateCreation;
    this.statutFacture = statutFacture;
    this.client = Client;
    this.prestation = prestation;
    this.montantHt = montantHt;
    this.tauxTva = tauxTva;
    this.calculService = calculService;
    this.montantTTC = this.calculService.calculerMontantTTC(
      this.montantHt,
      this.tauxTva
    );
  }

  changerStatut(nouveauStatut: Statut): void {
    this.statutFacture = nouveauStatut;
  }
}

export type FacturesList = Facture[];
