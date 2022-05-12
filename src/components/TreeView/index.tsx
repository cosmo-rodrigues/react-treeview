// @ts-nocheck
import { useContext } from 'react';

import { TreeContext, TreeProvider } from '../../context/TreeContext';
import { IDtaItem } from '../../dtos';
import { TreeItem } from '../TreeItem';
import { Container } from './styles';

export function TreeView() {
  const { data } = useContext(TreeContext);

  return (
    <Container>
      <TreeProvider>
        {data.map((item: IDtaItem, index) => (
          <TreeItem key={index} {...item} />
        ))}
      </TreeProvider>
    </Container>
  );
}
