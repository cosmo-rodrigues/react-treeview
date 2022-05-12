import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

import { IData } from '../../dtos';

import dataValues from '../../data/data.json';

const data = Object.values(dataValues) as any as IData[];

interface ITree {
  checkedIds: string[];
  data: IData[];
  setCheckedIds: Dispatch<SetStateAction<any[]>>;
}

const DEFAULT_VALUES = {
  data: data,
  checkedIds: [],
  setCheckedIds: (id: any) => [],
};

export const TreeContext = createContext<ITree>(DEFAULT_VALUES);

export function TreeProvider({ children }: { children: ReactNode }) {
  const [checkedIds, setCheckedIds] = useState([]);

  return (
    <TreeContext.Provider
      value={{
        data,
        checkedIds,
        setCheckedIds,
      }}
    >
      {children}
    </TreeContext.Provider>
  );
}
