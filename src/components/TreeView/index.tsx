// @ts-nocheck
import { useContext } from 'react';

import { TreeContext } from '../../context/TreeContext';
import { IDtaItem } from '../../dtos';
import { TreeItem } from '../TreeItem';
import { Container } from './styles';

export function TreeView() {
  const { data } = useContext(TreeContext);

  return (
    <Container>
      {data.map((item: IDtaItem, index) => (
        <TreeItem key={index} {...item} />
      ))}
    </Container>
  );
}
