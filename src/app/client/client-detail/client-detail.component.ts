import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { clientsService } from '../../services/http/clients.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Client, StatutClient } from '../../data/client-model';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './client-detail.component.html',
  styles: ``,
})
export class ClientDetailComponent {
  readonly clientservice = inject(clientsService);
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  readonly idclient = Number(this.route.snapshot.paramMap.get('id'));
  deleteErrorResponse = "";
  private clientResponse = toSignal(
    this.clientservice.getClientById(this.idclient)
  );

  readonly client = computed(() => {
    const client = this.clientResponse();
    if (!client) {
      return null;
    } else {
      return client;
    }
  });

  deleteClient(id: number | undefined): void {
    console.log('Suppression du client');
    if (this.client()?.statut != StatutClient.actif) {
      this.clientservice.deleteClient(id).subscribe(() => {
        this.router.navigate(['/clients']);
      });
    } else {
      this.deleteErrorResponse = "Impossible de supprimer un client actif";
      setTimeout(() => {
        this.deleteErrorResponse = "";
      }, 3000);
    }
  }
}
