import { TreeView } from './components/TreeView';
import { TreeProvider } from './context/TreeContext';
import { MainContainer } from './styles';

function App() {
  return (
    <MainContainer>
      <TreeProvider>
        <TreeView />
      </TreeProvider>
    </MainContainer>
  );
}

export default App;
