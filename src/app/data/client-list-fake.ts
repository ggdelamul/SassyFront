import { ClientList } from './client-model';
import { v4 as uuidv4 } from 'uuid';

export const LIST_CLIENT: ClientList = [
  {
    IdClient: uuidv4(),
    Designation: 'Cycle Formation',
    DateCreation: new Date('2023-03-07').toLocaleDateString('fr-FR'),
    Email: 'cycleformation@gmail.com',
    Telephone: '0472589865',
    Adresse: '18 rue du chateau 69250 VANNES',
  },
  {
    IdClient: uuidv4(),
    Designation: 'MicroFormation',
    DateCreation: new Date('2024-08-23').toLocaleDateString('fr-FR'),
    Email: 'microformation@gmail.com',
    Telephone: '0477589361',
    Adresse: '2 avenue de la république 89520 CHATAUDUN',
  },
  {
    IdClient: uuidv4(),
    Designation: 'Cci Formation',
    DateCreation: new Date('2024-06-18').toLocaleDateString('fr-FR'),
    Email: 'ccifORMATION@gmail.com',
    Telephone: '0498582365',
    Adresse: '36 rue Sergent Michel Berthet 69009 Lyon',
  },
];
