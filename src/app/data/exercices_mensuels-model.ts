import { Facture, FacturesList } from './factures-model';

interface IExercice_mensuel {
  id: number;
  mois: string;
  listeFacture: FacturesList;
}

export class Exercice_Mensuel implements IExercice_mensuel {
  id: number;
  mois: string;
  listeFacture: FacturesList;
  montantChiffreAffaire: number;

  constructor(id: number, mois: string, listeFacture: FacturesList) {
    this.id = id;
    this.mois = mois;
    this.listeFacture = listeFacture || [];
    this.montantChiffreAffaire = this.calculerChiffreAffaireMensuel();
  }

  //voir à déplacer le calcul vers une autre classe
  private calculerChiffreAffaireMensuel(): number {
    return this.listeFacture.reduce((total, facture) => {
      console.log(
        `Facture ID: ${facture.id}, Montant TTC: ${facture.montantTTC}`
      );
      return total + (facture.montantTTC || 0);
    }, 0);
  }
}
export type Exercice_mensuelList = Exercice_Mensuel[];
