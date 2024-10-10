import { CalculService } from '../services/metier/calculService';
import { Exercice_mensuelList } from './exercices_mensuels-model';

export interface IExercice_annuel {
  id: number;
  designation: string;
  exercicemensuels: Exercice_mensuelList;
}

export class Exercice_annuel implements IExercice_annuel {
  id: number;
  designation: string;
  exercicemensuels: Exercice_mensuelList;
  montantchiffreaffaireannuel: number;
  constructor(
    id: number,
    designation: string,
    exercicemensuels: Exercice_mensuelList,
    montantchiffreaffaireannuel:number
  ) {
    this.id = id;
    this.designation = designation;
    this.exercicemensuels = exercicemensuels || [];
    this.montantchiffreaffaireannuel = montantchiffreaffaireannuel;
  }
}

export type Exercice_annuelList = Exercice_annuel[];
