import React from 'react';
import ItemGrid from '../../components/item-grid';
import outfits from 'src/outfits-stubs';

let Outfits = React.createClass({
  render() {
    return (
        <div className="page">
          <ItemGrid items={outfits}/>
        </div>
    );
  }
});

export default Outfits;