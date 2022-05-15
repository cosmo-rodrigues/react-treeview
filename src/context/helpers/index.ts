export function getIdsByParentChecked(idsParente, checkedIds) {
  let childrenSelectedCascate = [];
  idsParente.map((element) => {
    checkedIds.filter((value) => {
      if (element.parentId === value) {
        return (childrenSelectedCascate = element.childIds);
      }
    });
  });

  return childrenSelectedCascate;
}
