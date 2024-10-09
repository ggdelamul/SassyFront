import { Injectable } from '@angular/core';
import { FacturesList } from '../../data/factures-model';
import { Exercice_mensuelList } from '../../data/exercices_mensuels-model';

@Injectable({
  providedIn: 'root',
})
export class CalculService {
  /***
   * Calcule le chiffre d'affaires mensuel à partir d'une liste de factures.
   *
   * @param {FacturesList} listeFacture - La liste des factures d'un exercice_mensuel à traiter.
   * @returns {number} Le montant total du chiffre d'affaires pour le mois.
   */
  calculerChiffreAffaireMensuel(listeFacture: FacturesList): number {
    return listeFacture.reduce((total, facture) => {
      return total + (facture.montantTTC || 0);
    }, 0);
  }
  /***
   * Calcul le montant TTC de chaque facture
   * @param {number} montantHt - propritée de la classe facture
   * @param {number} tauxTva - propriété de la classe facture compris entre 0 et 100
   * @returns {number} - Montant TTC de la facture
   */
  calculerMontantTTC(montantHt: number, tauxTva: number): number {
    return montantHt + (montantHt * tauxTva) / 100;
  }
  /***
   * Calcul le chiffre d'affaire annuel
   * @param {Exercice_mensuelList} listeExerciceMensuel
   * @returns {number} Le montant total du chiffre d'affaires pour l'année.
   */
  calculerChiffreAffaireAnnuel(
    listeExerciceMensuel: Exercice_mensuelList
  ): number {
    return listeExerciceMensuel.reduce((total, exercice) => {
      return total + (exercice.montantChiffreAffaire || 0);
    }, 0);
  }
}
