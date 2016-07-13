import React from 'react';
import tags from 'src/tags-stubs';
import RelatedTags from '../../components/related-tags';

var selectedTags = [tags.outfits, tags.articles, tags.temperatures, tags.activities];

var Weather = React.createClass({
  render() {
  	return (
  		<div>
	  		<h1>Weather Name (Showers)</h1>
	      <img src="http://placehold.it/300x300" />
	      <RelatedTags tags={selectedTags} />
      </div>
  	)
  }
});

export default Weather;