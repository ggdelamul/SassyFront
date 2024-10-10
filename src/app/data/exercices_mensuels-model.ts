import { Facture, FacturesList } from './factures-model';
import { CalculService } from '../services/metier/calculService';

interface IExercice_mensuel {
  id: number;
  mois: string;
  listeFacture: FacturesList;
}

export class Exercice_Mensuel implements IExercice_mensuel {
  readonly calculService: CalculService;
  id: number;
  mois: string;
  listeFacture: FacturesList;
  montantchiffreaffaire: number;

  constructor(
    id: number,
    mois: string,
    listeFacture: FacturesList,
    calculService: CalculService
  ) {
    this.id = id;
    this.mois = mois;
    this.listeFacture = listeFacture || [];
    this.calculService = calculService;
    this.montantchiffreaffaire =
      this.calculService.calculerChiffreAffaireMensuel(this.listeFacture);
  }
}
export type Exercice_mensuelList = Exercice_Mensuel[];
