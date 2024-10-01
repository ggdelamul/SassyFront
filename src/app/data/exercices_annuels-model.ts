import { Exercice_mensuel } from './exercices_mensuels-model';

export interface Exercice_annuel {
  idExerciceAnnuel: number;
  designation: string;
  Exercice_Mensuels: Exercice_mensuel[];
}

export type Exercice_annuelList = Exercice_annuel[];
