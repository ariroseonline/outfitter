import React from 'react';
import {Link} from 'react-router';

var ItemGrid = React.createClass({
  propType: {
    items: React.PropTypes.array
  },

  renderItems(items) {
    return items.map((item, i)=> {
      return (
          <Link key={i} to={`/outfit/`} className="grid-item">
            <figure>
              <img className="grid-item__image" src={item.image}/>
              <figcaption>{item.label}</figcaption>
            </figure>
          </Link>
      );
    });
  },

  renderGhostItem() {
    let itemType = 'outfit';
    return (
        <Link to="/outfits/new">
          <img className="grid-item__image" src={`http://placehold.it/300x300?text=New+${itemType.toUpperCase()}`}/>
        </Link>
    );
  },

  render() {
    return (
        <div className="item-grid">
          {this.renderItems(this.props.items)}
          {this.renderGhostItem()}
        </div>
    );
  }
});

export default ItemGrid;