import './ShoppingList.css';
import React from 'react';
import {connect} from 'react-redux';

class ShoppingList extends React.Component {
  renderItems = () => {
    return this.props.items.map(item => {
      return (<li key={item}>
        <span>{item}</span>
      </li>);
    });
  };

  render() {
    return (<div className="shopping-list">
      <ul>
        {this.renderItems()}
      </ul>
    </div>);
  }
}

const mapStateToProps = state => ({items: state.items});

export default connect(mapStateToProps)(ShoppingList);
