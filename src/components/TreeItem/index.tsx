// @ts-nocheck
import { useState } from 'react';
import { IData, IDtaItem } from '../../dtos';
import {
  Container,
  ExpandButton,
  ItemContainer,
  SubItemContainer,
} from './styles';

export function TreeItem({ name, children }: IDtaItem) {
  const [open, setOpen] = useState(false);

  const data: IData = Object.values(children);

  function toggle() {
    setOpen(!open);
  }

  function hasChildren() {
    return !!data.length;
  }

  function lastChild(index) {
    return data.length - 1 === index;
  }

  return (
    <Container>
      <ExpandButton active={hasChildren()} onClick={toggle}>
        +
      </ExpandButton>
      <ItemContainer shouldRetreat={hasChildren()}>
        <input id={name} type='checkbox' />
        <label htmlFor={name}>{name}</label>
        <SubItemContainer>
          {open &&
            data.map((item, index) => {
              console.log('ITEM: ', lastChild(index));
              return <TreeItem key={index} {...item} />;
            })}
        </SubItemContainer>
      </ItemContainer>
    </Container>
  );
}
