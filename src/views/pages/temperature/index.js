import React from 'react';
import tags from 'src/tags-stubs';
import RelatedTags from '../../components/related-tags';

var selectedTags = [tags.outfits, tags.articles, tags.weathers, tags.activities];

var Temperature = React.createClass({
  render() {
  	return (
  		<div>
	  		<h1>Temperature Name (zerofifteen)</h1>
	      <img src="http://placehold.it/300x300" />
	      <RelatedTags tags={selectedTags} />
	    </div>
  	)
  }
});

export default Temperature;