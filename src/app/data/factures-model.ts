import { Client } from './client-model';
import { Prestation, Prestation_List } from './prestation-model';
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
  constructor(
    IdFacture: string | null,
    reference: string,
    dateCreation: string,
    statutFacture: Statut,
    Client: Client | null,
    prestation: Prestation_List[] | null,
    montantHt: number,
    tauxTva: number
  ) {
    this.id = IdFacture;
    this.reference = reference;
    this.dateCreation = dateCreation;
    this.statutFacture = statutFacture;
    this.client = Client;
    this.prestation = prestation;
    this.montantHt = montantHt;
    this.tauxTva = tauxTva;
    this.montantTTC = this.calculerMontantTTC(this.montantHt, this.tauxTva);
  }
  private calculerMontantTTC(MontantHt: number, tauxTva: number): number {
    return MontantHt + (MontantHt * tauxTva) / 100;
  }
  changerStatut(nouveauStatut: Statut): void {
    this.statutFacture = nouveauStatut;
  }
}

export type FacturesList = Facture[];
