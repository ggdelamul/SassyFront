import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FactureService } from '../../services/factures.service';
@Component({
  selector: 'app-facture-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './facture-list.component.html',
  styles: ``,
})
export class FactureListComponent {
  readonly facturesServices = inject(FactureService);
  readonly facturesList = signal(this.facturesServices.getFacturesList());
}