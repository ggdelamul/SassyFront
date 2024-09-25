import { Component, inject, signal } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FactureService } from '../../services/factures.service';
@Component({
  selector: 'app-facture-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './facture-detail.component.html',
  styles: ``,
})
export class FactureDetailComponent {
  readonly factureService = inject(FactureService);
  readonly route = inject(ActivatedRoute);
  readonly IdFacture = this.route.snapshot.paramMap.get('id');
  readonly facture = signal(
    this.factureService.getFactureById(this.IdFacture)
  ).asReadonly();
}
