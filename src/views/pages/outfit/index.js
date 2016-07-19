import React from 'react';
import RelatedTags from '../../components/related-tags';
import tags from 'src/tags-stubs';

var selectedTags = [tags.articles, tags.temperatures, tags.activities, tags.weathers];

let Outfit = React.createClass({
  render() {
    return (
        <div>
          <h1>Outfit Name</h1>
          <img src="http://placehold.it/300x300" />
          <RelatedTags tags={selectedTags} />
        </div>
    );
  }
});

export default Outfit;