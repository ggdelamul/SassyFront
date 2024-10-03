import { Facture } from './factures-model';

export interface Exercice_mensuel {
  id: number;
  mois: string;
  listeFacture: Facture[];
  montantChiffreAffaire: number;
}
export type monthList = Exercice_mensuel[];
