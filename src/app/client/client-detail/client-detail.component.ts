import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { clientsService } from '../../services/http/clients.service';
import { toSignal } from '@angular/core/rxjs-interop';

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
  readonly idclient = Number(this.route.snapshot.paramMap.get('id'));
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
}
