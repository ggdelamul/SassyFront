import { Component, inject, signal } from '@angular/core';
import { ClientService } from '../../services/clients.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './clients-list.component.html',
  styles: ``,
})
export class ClientsListComponent {
  readonly clientservice = inject(ClientService);
  readonly listeClient = signal(this.clientservice.getClientList());
}
