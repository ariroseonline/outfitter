import React from 'react';
import ItemGrid from '../../components/item-grid';
import tags from 'src/tags-stubs';

var Weathers = React.createClass({
  render() {
  	return (
  		<div>
  			<h1>Weathers</h1>
  			<button>Add</button>
  			<ItemGrid items={tags.weathers.items} />
  		</div>
  	)
  }
});

export default Weathers;