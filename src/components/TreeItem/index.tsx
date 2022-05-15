// @ts-nocheck
import { useContext, useState } from 'react';
import { TreeContext } from '../../context/TreeContext';
import { IData, IDtaItem } from '../../dtos';
import { CheckboxComponente } from '../Checkbox';
import {
  Container,
  ExpandButton,
  ItemContainer,
  SubItemContainer,
} from './styles';

export function TreeItem({ name, children, id }: IDtaItem) {
  const { checkedIds } = useContext(TreeContext);
  const [open, setOpen] = useState(checkedIds.includes(id) ? true : false);

  const data: IData[] = Object.values(children);

  function toggle() {
    setOpen(!open);
  }

  function hasChildren() {
    return !!data.length;
  }

  return (
    <Container>
      <ExpandButton active={hasChildren()} onClick={toggle}>
        {open ? '-' : '+'}
      </ExpandButton>
      <ItemContainer shouldRetreat={hasChildren()}>
        <CheckboxComponente id={id} name={name} />
        <SubItemContainer>
          {open &&
            data.map((item: IDtaItem, index) => {
              return <TreeItem key={index} {...item} />;
            })}
        </SubItemContainer>
      </ItemContainer>
    </Container>
  );
}
