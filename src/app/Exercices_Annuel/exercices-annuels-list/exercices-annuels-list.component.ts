import { Component, inject } from '@angular/core';
import { Exercice_Annuel_Service } from '../../services/http/exercices_annuels.service';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-exercices-annuels-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './exercices-annuels-list.component.html',
  styles: ``,
})
export class ExercicesAnnuelsListComponent {
  readonly ExerciceAnnuelService = inject(Exercice_Annuel_Service);
  readonly ListeExerciceAnnuel = toSignal(
    this.ExerciceAnnuelService.getAllExerciceAnnuel()
  );
}
