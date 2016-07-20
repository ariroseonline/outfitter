import React from 'react';
import RelatedTags from '../../components/related-tags';
import tags from 'src/tags-stubs';

var selectedTags = [tags.articles, tags.temperatures, tags.activities, tags.weathers];

let NewOutfit = React.createClass({
  render() {
    return (
        <div>
          <h1>New Outfit</h1>
        </div>
    );
  }
});

export default NewOutfit;