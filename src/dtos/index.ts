export interface IDtaItem {
  id: string;
  name?: string;
  children?: IDtaItem;
  level?: number;
}

export interface IData {
  id: string;
  name: string;
  children: IDtaItem;
  level: number;
}
