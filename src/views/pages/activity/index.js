import React from 'react';
import RelatedTags from '../../components/related-tags';
import tags from 'src/tags-stubs';

var selectedTags = [tags.outfits, tags.articles, tags.temperatures, tags.weathers];

var Activity = React.createClass({
  render() {
  	return (
  		<div>
	  		<h1>Activity Name (Casual Work)</h1>
	      <img src="http://placehold.it/300x300" />
	      <RelatedTags tags={selectedTags} />
      </div>
  	)
  }
});

export default Activity;