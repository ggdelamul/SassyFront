import { Facture, FacturesList, Statut } from './factures-model'; 
import { v4 as uuidv4 } from 'uuid'; 


export const FACTURES_LIST: FacturesList = [
  new Facture(
    uuidv4(),
    'ABCD',
    '2023',
    new Date('2023-03-07').toLocaleDateString('fr-FR'), 
    Statut.attente, 
    null, 
    500, 
    0 
  ),
  new Facture(
    uuidv4(),
    'EFGH',
    '2024',
    new Date('2024-08-23').toLocaleDateString('fr-FR'),
    Statut.paye, 
    null, 
    200, 
    0 
  ),
  new Facture(
    uuidv4(),
    'IJKL',
    '2024',
    new Date('2024-06-18').toLocaleDateString('fr-FR'),
    Statut.paye, 
    null, 
    250, 
    20
  ),
];
