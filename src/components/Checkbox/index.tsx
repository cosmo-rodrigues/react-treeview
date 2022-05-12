import { useContext, useEffect } from 'react';
import { TreeContext } from '../../context/TreeContext';
import { Checkbox, CheckboxContainer, Label } from './styles';

export function CheckboxComponente({ id, name, isIndeterminate }) {
  const { setCheckedIds, checkedIds, parentChecked } = useContext(TreeContext);

  useEffect(() => {
    localStorage.setItem('@treeViewApp/checked', JSON.stringify(checkedIds));
  }, [checkedIds]);

  function handleCheckedItems(checkedId: string) {
    const alreadyCheckId = checkedIds.some((item) => item === checkedId);
    if (alreadyCheckId) {
      const filteredIds = checkedIds.filter((item) => item !== checkedId);
      return setCheckedIds([...filteredIds]);
    }
    setCheckedIds([...checkedIds, checkedId]);
  }

  function handleClick() {
    handleCheckedItems(id);
    parentChecked(id);
  }

  return (
    <CheckboxContainer onClick={() => handleClick()}>
      <Checkbox
        isIndeterminate={isIndeterminate}
        isChecked={checkedIds.includes(id)}
        id={id}
      />
      <Label htmlFor={name}>{name}</Label>
    </CheckboxContainer>
  );
}
