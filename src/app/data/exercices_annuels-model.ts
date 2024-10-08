import { Exercice_Mensuel } from './exercices_mensuels-model';

export interface Exercice_annuel {
  id: number;
  designation: string;
  exercicemensuels: Exercice_Mensuel[];
}

export type Exercice_annuelList = Exercice_annuel[];
