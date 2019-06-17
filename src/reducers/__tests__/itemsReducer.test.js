import {SAVE_ITEM} from 'actions/types';
import itemsReducer from 'reducers/itemsReducer';

it('handles action with type SAVE_ITEM', () => {
  const action = {
    type: SAVE_ITEM,
    payload: 'new item'
  };
  const newState = itemsReducer([], action);
  expect(newState).toEqual(['new item']);
});

it('handles action with unknown type', () => {
  const action = {
    type: 'SOME_UNKNOWN_TYPE'
  };
  const newState = itemsReducer([], action);
  expect(newState).toEqual([]);
});
