export enum StatutClient {
  prospect = 'prospect',
  actif = 'actif',
}

export interface Client {
  id: number;
  raisonsociale: string;
  datecreation: string;
  mail: string;
  telephone: string;
  adresse: string;
  statut: StatutClient;
}
export type ClientList = Client[];

export const CLIENT_RULES = {
  RAISON_SOCIALE: {
    NAME_PATTERN: /^[a-zA-Zéè]+$/,
    MAX_LENGTH: 255,
    MIN_LENGTH: 3,
  },
  MAIL: {
    MAIL_PATTERN: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  TELEPHONE: {
    MIN_LENGTH: 10,
  },
  ADRESSE: {
    MAX_LENGTH: 255,
    MIN_LENGTH: 5,
  },
} as const;
