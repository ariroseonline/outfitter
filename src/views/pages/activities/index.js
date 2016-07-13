import React from 'react';
import ItemGrid from '../../components/item-grid';
import tags from 'src/tags-stubs';

var Activities = React.createClass({

  render() {
  	return (
  		<div>
  			<h1>Activities</h1>
  			<button>Add</button>
  			<ItemGrid items={tags.activities.items} />
  		</div>
  	)
  }
});

export default Activities;