import { Client } from './client-model';
import { Prestation, Prestation_List } from './prestation-model';
export enum Statut {
  attente = 'en attente',
  envoye = 'envoyé',
  paye = 'payé',
}
export interface FactureModele {
  IdFacture: string | null;
  Reference: string;
  IdExerciceMensuel: string;
  IdExerciceAnnuel: string;
  DateCreation: string;
  Statut: Statut;
  Client: Client | null;
  Prestation : Prestation_List[];
}

export class Facture implements FactureModele {
  IdFacture: string | null;
  Reference: string;
  IdExerciceMensuel: string;
  IdExerciceAnnuel: string;
  DateCreation: string;
  Statut: Statut;
  Client: Client | null;
  Prestation: Prestation_List[];
  MontantHt: number;
  TauxTva: number;
  MontantTTC: number;
  constructor(
    IdFacture: string | null,
    Reference: string,
    IdExerciceMensuel: string,
    IdExerciceAnnuel: string,
    DateCreation: string,
    Statut: Statut,
    Client: Client | null,
    Prestation : Prestation_List[],
    MontantHt: number,
    TauxTva: number
  ) {
    this.IdFacture = IdFacture;
    this.Reference = Reference;
    this.IdExerciceMensuel = IdExerciceMensuel;
    this.IdExerciceAnnuel = IdExerciceAnnuel;
    this.DateCreation = DateCreation;
    this.Statut = Statut;
    this.Client = Client;
    this.Prestation = Prestation;
    this.MontantHt = MontantHt;
    this.TauxTva = TauxTva;
    this.MontantTTC = this.calculerMontantTTC(this.MontantHt, this.TauxTva);
  }
  private calculerMontantTTC(MontantHt: number, TauxTva: number): number {
    return MontantHt + (MontantHt * TauxTva) / 100;
  }
  changerStatut(nouveauStatut: Statut): void {
    this.Statut = nouveauStatut;
  }
}

export type FacturesList = Facture[];
