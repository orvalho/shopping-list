import './App.css';
import React from 'react';

import ShoppingForm from 'components/ShoppingForm';
import ShoppingList from 'components/ShoppingList';

export default() => {
  return (<div className="app">
    <h1>Shopping List</h1>
    <ShoppingForm/>
    <ShoppingList/>
  </div>);
};
