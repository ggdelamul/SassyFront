import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { clientsService } from '../services/http/clients.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styles: ``,
})
export class HomePageComponent {
  readonly clientservice = inject(clientsService);
  private readonly clientListResponse = toSignal(
    this.clientservice.getAllClients().pipe(
      map((value) => ({ value, error: undefined })),
      catchError((error) => of({ value: undefined, error }))
    )
  );
  readonly lastClientLoader = computed(()=>!this.clientListResponse());
  readonly lastClientOnTheList = computed(() => {
    const data = this.clientListResponse()?.value;
    if (data) {
      return data.at(-1);
    } else {
      return null;
    }
  });
}
