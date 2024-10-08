import { Component, signal, inject, computed } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Exercice_Annuel_Service } from '../../services/exercices_annuels.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';
import { Exercice_annuel } from '../../data/exercices_annuels-model';
import { Exercice_Mensuel } from '../../data/exercices_mensuels-model';
@Component({
  selector: 'app-exercices-annuels-detail',
  standalone: true,
  imports: [],
  templateUrl: './exercices-annuels-detail.component.html',
  styles: ``,
})
export class ExercicesAnnuelsDetailComponent {
  readonly exercice_annuel_service = inject(Exercice_Annuel_Service);
  readonly route = inject(ActivatedRoute);
  readonly idExercice = Number(this.route.snapshot.paramMap.get('id'));
  /*readonly exercice_annuel = toSignal(
    this.exercice_annuel_service.getExerciceAnnuelById(this.idExercice)
  );*/

  // Notre nouveau Signal avec la réponse HTTP "brute".
  private readonly exercice_annuelResponse = toSignal(
    this.exercice_annuel_service.getExerciceAnnuelById(this.idExercice).pipe(
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
      // Transforme les exercices mensuels en instances de Exercice_Mensuel
      data.exercicemensuels = data.exercicemensuels.map((month) => {
        return new Exercice_Mensuel(
          month.id,
          month.mois,
          month.listeFacture || []
        );
      });
      console.log(data.exercicemensuels);
      return data;
    }
    return undefined;
  });
}
