import React from 'react';
import {shallow} from 'enzyme';

import App from 'components/App';
import ShoppingForm from 'components/ShoppingForm';
import ShoppingList from 'components/ShoppingList';

let wrapped;

beforeEach(() => wrapped = shallow(<App/>));

it('shows shopping form', () => {
  expect(wrapped.find(ShoppingForm).length).toEqual(1);
});

it('shows shopping list', () => {
  expect(wrapped.find(ShoppingList).length).toEqual(1);
});
