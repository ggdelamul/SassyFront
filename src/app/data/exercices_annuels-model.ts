import { Exercice_mensuel } from './exercices_mensuels-model';

export interface Exercice_annuel {
  idExerciceAnnuel: number;
  designation: string;
  exercicemensuels: Exercice_mensuel[];
}

export type Exercice_annuelList = Exercice_annuel[];
