import React from 'react';
import RelatedTags from '../../components/related-tags';
import tags from 'src/tags-stubs';

var selectedTags = [tags.outfits, tags.temperatures, tags.activities, tags.weathers];

var Article = React.createClass({
  render() {
  	return (
  		<div>
	  		<h1>Item Name (Shirt)</h1>
	      <img src="http://placehold.it/300x300" />
	      <RelatedTags tags={selectedTags} />
      </div>
  	)
  }
});

export default Article;