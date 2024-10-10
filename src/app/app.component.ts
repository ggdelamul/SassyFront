import { Component, computed, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Exercice_Annuel_Service } from './services/http/exercices_annuels.service';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SassyFront';
  readonly Exercice_Annuel_Service = inject(Exercice_Annuel_Service);
  readonly ListeExerciceAnnuel = toSignal(
    this.Exercice_Annuel_Service.getAllExerciceAnnuel()
  );
  readonly TwoLastExercice = computed(() => {
    const liste = this.ListeExerciceAnnuel(); // Appelle une fois
    return liste ? liste.slice(-1) : [];//chercher a rendre dynamique la route quand je clique sur le menu .
  });
  readonly Loader = computed(() => !this.ListeExerciceAnnuel());
}
