import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { clientsService } from '../../services/http/clients.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';
import { ClientList } from '../../data/client-model';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [RouterLink, FormsModule],
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

  SortClientListById(liste: ClientList) {
    liste.sort((a, b) => a.id + b.id);
  }
  selectedStatus = signal('');
  SortClientByStatus(liste: ClientList) {
    if (this.selectedStatus()) {
      return liste.filter((client) => client.statut === this.selectedStatus());
    }
    return liste; 
  }
}
