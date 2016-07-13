import React from 'react';
import ItemGrid from '../../components/item-grid';
import tags from 'src/tags-stubs';

var Articles = React.createClass({
  render() {
  	return (
  		<div>
  			<h1>Items</h1>
  			<button>Add</button>
  			<ItemGrid items={tags.articles.items} />
  		</div>
  	)
  }
});

export default Articles;