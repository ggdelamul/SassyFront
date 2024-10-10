import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { clientsService } from '../../services/http/clients.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';
@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './clients-list.component.html',
  styles: ``,
})
export class ClientsListComponent {
  readonly clientService = inject(clientsService);
  private readonly clientListResponse = toSignal(
    this.clientService.getAllClients().pipe(
      map((value) => ({ value, error: undefined })),
      catchError((error) => of({ value: undefined, error }))
    )
  );

  readonly clientList = computed(() => {
    let clientList = this.clientListResponse()?.value;
    if (!clientList) {
      return [];
    } else {
      return clientList;
    }
  });

  // En attente de la réponse HTTP
  readonly loading = computed(() => !this.clientListResponse());
  // Cas d'erreur HTTP
  readonly error = computed(() => this.clientListResponse()?.error);
}
