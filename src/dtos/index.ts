export interface IDataSubLevel {
  id: string;
  name: string;
  children: IDtaItem;
  level: number;
}

export interface IDtaItem {
  id: string;
  name: string;
  children: IDataSubLevel;
  level: number;
}

export interface IData {
  id: string;
  name: string;
  children: IDtaItem;
  level: number;
}
