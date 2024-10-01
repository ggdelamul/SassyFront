import { Facture } from "./factures-model";

export interface Exercice_mensuel {
  idExerciceMensuel: number;
  Designation: string;
  ListeFacture: Facture[];
}
