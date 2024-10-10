import { Component, computed, inject } from '@angular/core';
import { Exercice_Annuel_Service } from '../../services/http/exercices_annuels.service';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { Exercice_annuel } from '../../data/exercices_annuels-model';
import { CalculService } from '../../services/metier/calculService';
import {
  Exercice_Mensuel,
  Exercice_mensuelList,
} from '../../data/exercices_mensuels-model';

@Component({
  selector: 'app-exercices-annuels-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './exercices-annuels-list.component.html',
  styles: ``,
})
export class ExercicesAnnuelsListComponent {
  readonly ExerciceAnnuelService = inject(Exercice_Annuel_Service);
  readonly calculService = inject(CalculService);
  private readonly ListeExerciceAnnuelResponse = toSignal(
    this.ExerciceAnnuelService.getAllExerciceAnnuel()
  );

  readonly ListeExerciceAnnuel = computed(() => {
    // Vérifie d'abord si la réponse existe
    let response = this.ListeExerciceAnnuelResponse();
    // Si la réponse est nulle ou indéfinie, on retourne un tableau vide
    if (!response) {
      return [];
    }

    // Traite la réponse pour calculer le chiffre d'affaires annuel
    return response.map((annee: Exercice_annuel) => {
     const exercicemensuels: Exercice_mensuelList = annee.exercicemensuels.map(
       (mensuel: Exercice_Mensuel) => {
         return new Exercice_Mensuel(
           mensuel.id,
           mensuel.mois,
           mensuel.listeFacture,
           this.calculService
         );
       }
     );

     console.log('Exercices mensuels instanciés:', exercicemensuels); // Log des exercices mensuels instanciés

     const montantChiffreAffaireAnnuel =
       this.calculService.calculerChiffreAffaireAnnuel(exercicemensuels);
     console.log(
       "Montant chiffre d'affaires annuel calculé:",
       montantChiffreAffaireAnnuel
     );
      return new Exercice_annuel(
        annee.id,
        annee.designation,
        exercicemensuels,
        montantChiffreAffaireAnnuel
      );
    });
  });
}
