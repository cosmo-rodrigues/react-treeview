// @ts-nocheck
import { IData } from '../../dtos';
import { TreeItem } from '../TreeItem';
import { Container } from './styles';

interface IProps {
  data: IData[];
}

export function TreeView({ data = [] }: IProps) {
  return (
    <Container>
      <>
        {data.map((item, index) => {
          return <TreeItem key={index} {...item} />;
        })}
      </>
    </Container>
  );
}
