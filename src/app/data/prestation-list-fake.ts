import {
  Prestation,
  TypePrestation,
  Prestation_List,
} from './prestation-model';
import { v4 as uuidv4 } from 'uuid';
export const LIST_PRESTATION: Prestation_List=
[
  {
    Idprestation: uuidv4(),
    NomPrestation: 'Cours de Soutien',
    TypePrestation: TypePrestation.unique,
  },
  {
    Idprestation: uuidv4(),
    NomPrestation: 'Journée de cours',
    TypePrestation: TypePrestation.unique,
  },
  {
    Idprestation: uuidv4(),
    NomPrestation: 'MaintenanceSite',
    TypePrestation: TypePrestation.longue,
  },
];
