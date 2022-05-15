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
import { flattenObject } from '../../herlper';
import { getIdsByParentChecked } from '../helpers';

const data = Object.values(dataValues) as any as IData[];

interface ITree {
  checkedIds: string[];
  childrenSelectedCascate: string[];
  data: IData[];
  parentChecked: (id: string) => boolean;
  setCheckedIds: Dispatch<SetStateAction<any[]>>;
}

const DEFAULT_VALUES = {
  checkedIds: [],
  childrenSelectedCascate: [],
  data: data,
  parentChecked: () => null,
  setCheckedIds: (id: any) => [],
};

let storageChecked = localStorage.getItem('@treeViewApp/checked');
storageChecked = storageChecked ? JSON.parse(storageChecked) : [];

export const TreeContext = createContext<ITree>(DEFAULT_VALUES);

export function TreeProvider({ children }: { children: ReactNode }) {
  const [checkedIds, setCheckedIds] = useState(storageChecked);

  const parent = data.map((item) => item.id);

  function parentChecked(id: string) {
    return parent.some((item) => item === id);
  }

  const newData = flattenObject(dataValues);
  const parsedIds = JSON.parse(newData);

  function handleIds(element, index) {
    const ids = Object.keys(parsedIds).filter(
      (k) => k.startsWith(`${index}.`) && k.endsWith('.id')
    );
    let childIds = [];
    ids.map((id) => {
      if (parsedIds[id] === element) {
        ids.forEach((id) => {
          childIds.push(parsedIds[id]);
        });
      }
      return childIds;
    });
    return {
      parentId: element,
      childIds,
    };
  }

  const idsParente = parent.map(handleIds);

  let childrenSelectedCascate = getIdsByParentChecked(idsParente, checkedIds);

  return (
    <TreeContext.Provider
      value={{
        data,
        checkedIds,
        setCheckedIds,
        parentChecked,
        childrenSelectedCascate,
      }}
    >
      {children}
    </TreeContext.Provider>
  );
}
