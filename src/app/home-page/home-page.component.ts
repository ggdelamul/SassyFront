import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FactureService } from '../services/factures.service';
import { ClientService } from '../services/clients.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styles: ``,
})
export class HomePageComponent {
  readonly factureService = inject(FactureService);
  readonly clientService = inject(ClientService);
  readonly lastFacture = signal(this.factureService.getLastFacture());
  readonly lastClient = signal(this.clientService.getLastClient());
  
}
