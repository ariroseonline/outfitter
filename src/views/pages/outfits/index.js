import React from 'react';
import ItemGrid from '../../components/item-grid';
import tags from 'src/tags-stubs';

let Outfits = React.createClass({
  render() {
    return (
        <div className="page">
          <h1>Outfits</h1>
          <button className="add-btn">Add</button>
          <ItemGrid items={tags.outfits.items}/>
        </div>
    );
  }
});

export default Outfits;