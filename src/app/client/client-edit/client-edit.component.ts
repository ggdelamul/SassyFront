import { Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { clientsService } from '../../services/http/clients.service';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { catchError, map, of } from 'rxjs';
@Component({
  selector: 'app-client-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-edit.component.html',
  styles: ``,
})
export class ClientEditComponent {
  readonly clientService = inject(clientsService);
  readonly route = inject(ActivatedRoute);
  readonly idClient = Number(this.route.snapshot.paramMap.get('id'));
  // Notre nouveau Signal avec la réponse HTTP "brute".
  private readonly clientResponse = toSignal(
    this.clientService.getClientById(this.idClient).pipe(
      map((value) => ({ value, error: undefined })),
      catchError((error) => of({ value: undefined, error }))
    )
  );
  readonly loading = computed(() => !this.clientResponse());
  readonly error = computed(() => this.clientResponse()?.error);
  readonly client = computed(() => this.clientResponse()?.value);

  readonly form = new FormGroup({
    raisonsociale: new FormControl(),
    adressemail: new FormControl(),
    telphone: new FormControl(),
    adresse: new FormControl(),
    statut: new FormControl(),
  });
  constructor() {
    // Utilisation d'un effet pour mettre à jour le formulaire une fois les données disponibles
    effect(() => {
      const client = this.client();
      if (client) {
        this.form.patchValue({
          raisonsociale: client.raisonsociale,
          adressemail: client.adressemail,
          telphone: client.telephone,
          adresse: client.adresse,
          statut: client.statut,
        });
      }
    });
  }
  onSubmit() {
    console.log('soumis');
  }
}
