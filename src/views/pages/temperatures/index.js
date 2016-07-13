import React from 'react';
import ItemGrid from '../../components/item-grid';
import tags from 'src/tags-stubs';

var Temperatures = React.createClass({
  render() {
  	return (
  		<div>
  			<h1>Temperatures</h1>
  			<ItemGrid items={tags.temperatures.items} />
  		</div>
  	)
  }
});

export default Temperatures;