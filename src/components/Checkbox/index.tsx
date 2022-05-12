import { useContext } from 'react';
import { TreeContext } from '../../context/TreeContext';
import { Checkbox, CheckboxContainer, Label } from './styles';

export function CheckboxComponente({ id, name, isIndeterminate, isChecked }) {
  const { setCheckedIds, checkedIds } = useContext(TreeContext);
  function handleCheckedItems(checkedId: string) {
    const alreadyCheckId = checkedIds.some((item) => item === checkedId);
    if (alreadyCheckId) {
      const filteredIds = checkedIds.filter((item) => item !== checkedId);
      return setCheckedIds([...filteredIds]);
    }
    setCheckedIds([...checkedIds, checkedId]);
  }

  return (
    <CheckboxContainer onClick={() => handleCheckedItems(id)}>
      <Checkbox
        isIndeterminate={false}
        isChecked={checkedIds.includes(id)}
        id={id}
      />
      <Label htmlFor={name}>{name}</Label>
    </CheckboxContainer>
  );
}
