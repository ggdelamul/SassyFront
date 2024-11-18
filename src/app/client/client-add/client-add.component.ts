import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Client, StatutClient } from '../../data/client-model';
import { clientsService } from '../../services/http/clients.service';
import {DateFormatter} from '../../services/metier/dateFormatterService';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-client-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-add.component.html',
  styles: ``,
})
export class ClientAddComponent {
  readonly clientservice = inject(clientsService);
  readonly dateFormatter = inject(DateFormatter);
  readonly router = inject(Router);
  readonly form = new FormGroup({
    raisonsociale: new FormControl(),
    adresse: new FormControl(),
    adressemail: new FormControl(),
    telephone: new FormControl(),
    statut: new FormControl(''),
  });
  readonly status = Object.values(StatutClient);
  get raisonsociale() {
    return this.form.get('raisonsociale') as FormControl;
  }
  get adressemail() {
    return this.form.get('adressemail') as FormControl;
  }
  get adresse() {
    return this.form.get('adresse') as FormControl;
  }
  get telephone() {
    return this.form.get('telephone') as FormControl;
  }
  get statut() {
    return this.form.get('statut') as FormControl;
  }
  isSubmitting = false;
  onSubmit() {
    this.raisonsociale.markAsDirty();
    if (this.form.invalid || this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;

    const clientToAdd: Omit<Client, 'id'> = {
      raisonsociale: this.raisonsociale.value,
      datecreation: this.dateFormatter.formatDateFr(new Date),
      mail: this.adressemail.value,
      telephone: this.telephone.value,
      adresse: this.adresse.value,
      statut: this.statut.value as StatutClient,
    };

    this.clientservice.addClient(clientToAdd).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.router.navigate(['/clients']);
      },
      error: () => {
        this.isSubmitting = false;
      },
    });
  }
}
