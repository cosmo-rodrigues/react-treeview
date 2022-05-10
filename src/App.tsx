// @ts-nocheck
import { TreeView } from './components/TreeView';
import { MainContainer } from './styles';
import dataValues from './data/data.json';
import { IData } from './dtos';

const data: IData = Object.values(dataValues);

function App() {
  return <MainContainer>{<TreeView data={data} />}</MainContainer>;
}

export default App;
