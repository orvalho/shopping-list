import './ShoppingForm.css';
import React from 'react';
import {connect} from 'react-redux';

import {saveItem} from 'actions';

class ShoppingForm extends React.Component {
  state = {
    item: ''
  };

  onChange = e => this.setState({item: e.target.value});

  onSubmit = e => {
    e.preventDefault();
    if (this.state.item.trim() !== '') {
      this.props.saveItem(this.state.item);
    }
    this.setState({item: ''});
  };

  render() {
    return (<form className="shopping-form ui form" onSubmit={this.onSubmit}>
      <div className="field"><input onChange={this.onChange} value={this.state.item} placeholder="enter an item"/></div>
      <button className="ui button">ADD</button>
    </form>);
  }
}

export default connect(null, {saveItem})(ShoppingForm);
