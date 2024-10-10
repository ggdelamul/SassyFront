export enum TypePrestation {
  unique = 'unique',
  longue = 'longue durée',
}

export interface Prestation {
  id: string;
  nomprestation: string;
  typeprestation: TypePrestation;
}

export type Prestation_List = Prestation[];
