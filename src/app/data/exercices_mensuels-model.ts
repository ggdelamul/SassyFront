import { Facture } from './factures-model';

export interface Exercice_mensuel {
  idExerciceMensuel: number;
  mois: string;
  listeFacture: Facture[];
}
