import { Component, inject, computed, signal, effect } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Exercice_Annuel_Service } from '../../services/http/exercices_annuels.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';
import { Exercice_Mensuel } from '../../data/exercices_mensuels-model';
import { CalculService } from '../../services/metier/calculService';
//import { ChartsCaMensuelComponent } from "../../charts/charts-ca-mensuel/charts-ca-mensuel.component";

import { ChartModule } from 'angular-highcharts';
import { Chart } from 'angular-highcharts';
/////////////////
@Component({
  selector: 'app-exercices-annuels-detail',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './exercices-annuels-detail.component.html',
  styles: ``,
})
export class ExercicesAnnuelsDetailComponent {
  readonly exercice_annuel_service = inject(Exercice_Annuel_Service);
  readonly calculService = inject(CalculService);
  readonly route = inject(ActivatedRoute);
  readonly idExercice = signal(Number(this.route.snapshot.paramMap.get('id')));
  //

  // Notre nouveau Signal avec la réponse HTTP "brute".
  private readonly exercice_annuelResponse = toSignal(
    this.exercice_annuel_service.getExerciceAnnuelById(this.idExercice()).pipe(
      map((value) => ({ value, error: undefined })),
      catchError((error) => of({ value: undefined, error }))
    )
  );
  // En attente de la réponse HTTP
  readonly loading = computed(() => !this.exercice_annuelResponse());
  // Cas d'erreur HTTP
  readonly error = computed(() => this.exercice_annuelResponse()?.error);
  // Cas de succès HTTP
  readonly exercice_annuel = computed(() => {
    const data = this.exercice_annuelResponse()?.value;
    if (data) {
      //console.log(this.idExercice);
      // Transforme les exercices mensuels en instances de Exercice_Mensuel
      data.exercicemensuels = data.exercicemensuels.map(
        (month: Exercice_Mensuel) => {
          return new Exercice_Mensuel(
            month.id,
            month.mois,
            month.listeFacture || [],
            this.calculService
          );
        }
      );
      return data;
    }
    return undefined;
  });
  readonly exercicesMensuels = computed(() => {
    const data = this.exercice_annuelResponse()?.value;
    if (data) {
      let valeur = data.exercicemensuels.map((month) => {
        console.log(month.mois);
        return month.montantchiffreaffaire;
      });
      return valeur;
    } else {
      return [];
    }
  });
  readonly chart = computed(() => {
    return new Chart({
      chart: { type: 'column' },
      title: { text: "Chiffre d'affaire mensuel" },
      xAxis: {
        categories: [
          'Janvier',
          'Février',
          'Mars',
          'Avril',
          'Mai',
          'Juin',
          'Juillet',
          'Août',
          'Septembre',
          'Octobre',
          'Novembre',
          'Décembre',
        ],
      },
      yAxis: { title: { text: "Chiffre d'affaire (€)" } },
      series: [
        {
          name: "Chiffre d'affaire",
          data: this.exercicesMensuels(), // Données réactives
          type: 'column',
        },
      ],
    });
  });
}
