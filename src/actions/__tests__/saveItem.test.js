import {SAVE_ITEM} from 'actions/types';
import {saveItem} from 'actions';

describe('save item', () => {
  it('has correct type', () => {
    const action = saveItem();
    expect(action.type).toEqual(SAVE_ITEM);
  });

  it('has correct payload', () => {
    const action = saveItem('new item');
    expect(action.payload).toEqual('new item');
  });
});
