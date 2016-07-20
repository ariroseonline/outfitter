import React from 'react';
import ItemGrid from '../../components/item-grid';
import articles from 'src/articles-stubs';

var Articles = React.createClass({
  render() {
  	return (
  		<div>
  			<h1>Items</h1>
  			<ItemGrid items={articles} />
  		</div>
  	)
  }
});

export default Articles;