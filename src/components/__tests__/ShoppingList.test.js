import React from 'react';
import {mount} from 'enzyme';

import Root from 'Root';
import ShoppingList from 'components/ShoppingList';

let wrapped;

beforeEach(() => {
  const initialState = {
    items: ['new item 1', 'new item 2', 'new item 3']
  };
  wrapped = mount(<Root initialState={initialState}><ShoppingList/></Root>);
});

afterEach(() => {
  wrapped.unmount();
});

it('shows li for each item', () => {
  expect(wrapped.find('li').length).toEqual(3);
});

it('shows content of each item', () => {
  expect(wrapped.render().text()).toContain('new item 1');
  expect(wrapped.render().text()).toContain('new item 2');
  expect(wrapped.render().text()).toContain('new item 3');
});
