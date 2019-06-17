import React from 'react';
import {mount} from 'enzyme';

import Root from 'Root';
import ShoppingForm from 'components/ShoppingForm';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Root><ShoppingForm/></Root>);
});

afterEach(() => {
  wrapped.unmount();
});

it('shows an input', () => {
  expect(wrapped.find('input').length).toEqual(1);
});

it('shows a button', () => {
  expect(wrapped.find('button').length).toEqual(1);
});

describe('input', () => {
  beforeEach(() => {
    wrapped.find('input').simulate('change', {
      target: {
        value: 'new item'
      }
    });
    wrapped.update();
  });

  it('user can type into input field', () => {
    expect(wrapped.find('input').prop('value')).toEqual('new item');
  });

  it('input gets emptied, when form is submitted', () => {
    expect(wrapped.find('input').prop('value')).toEqual('new item');
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('input').prop('value')).toEqual('');
  });
});
