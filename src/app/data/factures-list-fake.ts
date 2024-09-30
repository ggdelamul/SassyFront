import { Facture, FacturesList, Statut } from './factures-model';
import { v4 as uuidv4 } from 'uuid';
export const FACTURES_LIST: FacturesList = [
  new Facture(
    uuidv4(),
    'ABCD',
    'Mai',
    '2023',
    new Date('2023-03-07').toLocaleDateString('fr-FR'),
    Statut.envoye,
    null,
    null,
    500,
    0
  ),
  new Facture(
    uuidv4(),
    'EFGH',
    'Mars',
    '2024',
    new Date('2024-08-23').toLocaleDateString('fr-FR'),
    Statut.paye,
    null,
    null,
    200,
    0
  ),
  new Facture(
    uuidv4(),
    'IJKL',
    'Juillet',
    '2024',
    new Date('2024-06-18').toLocaleDateString('fr-FR'),
    Statut.attente,
    {
      IdClient: uuidv4(),
      Designation: 'Cci Formation',
      DateCreation: new Date('2024-06-18').toLocaleDateString('fr-FR'),
      Email: 'ccifORMATION@gmail.com',
      Telephone: '0498582365',
      Adresse: '36 rue Sergent Michel Berthet 69009 Lyon',
    },
    null,
    250,
    20
  ),
];
