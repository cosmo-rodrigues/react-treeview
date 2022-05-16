import { flattenObject } from '.';

const enteredObject = {
  item_01: {
    id: '01',
    name: 'item',
    children: {
      id: '01',
      name: 'item',
      children: {
        id: '01',
        name: 'item',
        children: {},
      },
    },
  },
  item_02: {
    id: '02',
    name: 'item',
    children: {
      id: '01',
      name: 'item',
      children: {
        id: '01',
        name: 'item',
        children: {},
      },
    },
  },
};
const returnedObject = {
  'item_01.id': '01',
  'item_01.name': 'item',
  'item_01.children.id': '01',
  'item_01.children.name': 'item',
  'item_01.children.children.id': '01',
  'item_01.children.children.name': 'item',
  'item_02.id': '02',
  'item_02.name': 'item',
  'item_02.children.id': '01',
  'item_02.children.name': 'item',
  'item_02.children.children.id': '01',
  'item_02.children.children.name': 'item',
};

describe('Flatten Object function helper', () => {
  it('Should be return a sigle object after flatten children', () => {
    const result = flattenObject(enteredObject);
    expect(result).toEqual(JSON.stringify(returnedObject));
  });
});
