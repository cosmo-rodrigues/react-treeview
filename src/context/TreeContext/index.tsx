// @ts-nocheck
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
  parentChecked: (id: string) => boolean;
  setCheckedIds: Dispatch<SetStateAction<any[]>>;
}

const DEFAULT_VALUES = {
  data: data,
  checkedIds: [],
  parentChecked: () => null,
  setCheckedIds: (id: any) => [],
};

const storageChecked = localStorage.getItem('@treeViewApp/checked');

export const TreeContext = createContext<ITree>(DEFAULT_VALUES);

export function TreeProvider({ children }: { children: ReactNode }) {
  const [checkedIds, setCheckedIds] = useState(
    storageChecked ? storageChecked : []
  );

  const parent = data.map((item) => item.id);

  function parentChecked(id: string) {
    return parent.some((item) => item === id);
  }

  return (
    <TreeContext.Provider
      value={{
        data,
        checkedIds,
        setCheckedIds,
        parentChecked,
      }}
    >
      {children}
    </TreeContext.Provider>
  );
}
