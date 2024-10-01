import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Exercice_Annuel_Service } from './services/exercices_annuels.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Exercice_annuelList } from './data/exercices_annuels-model';
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
    this.Exercice_Annuel_Service.getAllExerciceAnnuel(),
    { initialValue: [] }
  );
  readonly TwoLastExercice = computed(() => {
    const liste = this.ListeExerciceAnnuel(); // Appelle une fois
    console.log(liste);
    return liste ? liste.slice(-2) : [];
  });
  //readonly Loader = computed(() => !this.ListeExerciceAnnuel());
}
