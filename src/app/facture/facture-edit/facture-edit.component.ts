import { Component, inject, signal } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FactureService } from '../../services/factures.service';
import { Statut } from '../../data/factures-model';
@Component({
  selector: 'app-facture-edit',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './facture-edit.component.html',
  styles: ``,
})
export class FactureEditComponent {
  readonly route = inject(ActivatedRoute);
  readonly factureService = inject(FactureService);
  readonly idFacture = this.route.snapshot.paramMap.get('id');
  readonly facture = signal(
    this.factureService.getFactureById(this.idFacture)
  ).asReadonly();
  readonly statuts = Object.keys(Statut).map((key) => ({
    key: key as keyof typeof Statut,
    value: Statut[key as keyof typeof Statut],
  }));

  readonly form = new FormGroup({
    Reference: new FormControl(this.facture().Reference),
    IdExerciceMensuel: new FormControl(this.facture().IdExerciceMensuel),
    IdExerciceAnnuel: new FormControl(this.facture().IdExerciceAnnuel),
    DateCreation: new FormControl(this.facture().DateCreation),
    Statut: new FormControl(this.facture()?.Statut),
    MontantHt: new FormControl(this.facture().MontantHt),
    TauxTva: new FormControl(this.facture().TauxTva),
    MontantTTC: new FormControl(this.facture().MontantTTC),
  });

  onSubmit() {
    console.log('envoi formulaire');
  }
}
