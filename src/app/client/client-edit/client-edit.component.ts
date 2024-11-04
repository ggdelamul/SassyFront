import { Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { clientsService } from '../../services/http/clients.service';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { catchError, map, of } from 'rxjs';
import { Client, CLIENT_RULES, StatutClient } from '../../data/client-model';
@Component({
  selector: 'app-client-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-edit.component.html',
  styles: ``,
})
export class ClientEditComponent {
  readonly clientService = inject(clientsService);
  readonly router = inject(Router);
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
  readonly status = Object.values(StatutClient);
  readonly form = new FormGroup({
    raisonsociale: new FormControl('', [
      Validators.required,
      Validators.minLength(CLIENT_RULES.RAISON_SOCIALE.MIN_LENGTH),
      Validators.maxLength(CLIENT_RULES.RAISON_SOCIALE.MAX_LENGTH),
      Validators.pattern(CLIENT_RULES.RAISON_SOCIALE.NAME_PATTERN),
    ]),
    adressemail: new FormControl(
      '',
      Validators.pattern(CLIENT_RULES.MAIL.MAIL_PATTERN)
    ),
    telephone: new FormControl(
      '',
      Validators.minLength(CLIENT_RULES.TELEPHONE.MIN_LENGTH)
    ),
    adresse: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(255),
    ]),
    statut: new FormControl(''),
  });
  readonly CLIENT_RULES = signal(CLIENT_RULES).asReadonly();

  constructor() {
    effect(() => {
      const client = this.client();
      if (client) {
        FormControl;
        this.form.patchValue({
          raisonsociale: client.raisonsociale,
          adressemail: client.mail,
          telephone: client.telephone,
          adresse: client.adresse,
          statut: client.statut,
        });
      }
    });
  }
  onSubmit() {
    const isvalid = this.form.valid;
    const clientForsubmit = this.client();
    if (isvalid && clientForsubmit) {
      const updatedClient: Client = {
        ...clientForsubmit,
        raisonsociale: this.raisonsociale.value as string,
        mail: this.adressemail.value as string,
        telephone: this.telephone.value as string,
        adresse: this.adresse.value as string,
        statut: this.statut.value as StatutClient,
      };
      console.log(this.statut.value);
      console.log(updatedClient);
      this.clientService.updatedClient(updatedClient).subscribe(() => {
        this.router.navigate(['/client', this.client()?.id]);
      });
    }
  }
  // Getter pour les controle de formulaire
  get raisonsociale() {
    return this.form.get('raisonsociale') as FormControl;
  }
  get adressemail() {
    return this.form.get('adressemail') as FormControl;
  }
  get telephone() {
    return this.form.get('telephone') as FormControl;
  }
  get adresse() {
    return this.form.get('adresse') as FormControl;
  }
  get statut() {
    return this.form.get('statut') as FormControl;
  }
}
