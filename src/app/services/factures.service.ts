import { Injectable } from '@angular/core';
import { Facture, FacturesList } from '../data/factures-model';
import { FACTURES_LIST } from '../data/factures-list-fake';
@Injectable({
  providedIn: 'root',
})
export class FactureService {
  getFacturesList(): FacturesList {
    return FACTURES_LIST;
  }

  // la facture avec l'id donnée
  getFactureById(id: string | null): Facture {
    const facture = FACTURES_LIST.find((facture) => facture.id === id);
    if (!facture) {
      throw new Error("Cette facture n'existe pas ");
    }
    return facture;
  }

  // dernière facture du tableau
  getLastFacture(): Facture {
    const facture = FACTURES_LIST.at(-1);
    if (!facture) {
      throw new Error("Il n'existe pas de facture");
    }
    return facture;
  }
}
