import { Component, inject, signal } from '@angular/core';
import { ClientService } from '../../services/clients.service';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [],
  templateUrl: './client-detail.component.html',
  styles: ``,
})
export class ClientDetailComponent {
  readonly clientService = inject(ClientService);
  readonly route = inject(ActivatedRoute);
  readonly IdClient = this.route.snapshot.paramMap.get('id');
  readonly client = signal(
    this.clientService.getClientById(this.IdClient)
  ).asReadonly();
}
