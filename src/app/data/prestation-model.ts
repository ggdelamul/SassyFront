export enum TypePrestation {
    unique='unique',
    longue= 'longue durée'
}

export interface Prestation {
  Idprestation: string;
  NomPrestation: string;
  TypePrestation: TypePrestation;
}

export type Prestation_List = Prestation[];