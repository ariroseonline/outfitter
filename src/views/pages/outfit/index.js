import React from 'react';
import RelatedTags from '../../components/related-tags';
import tags from 'src/tags-stubs';

var selectedTagTypes = [tags.temperatures, tags.activities, tags.weathers];

let Outfit = React.createClass({
  render() {
    console.log(selectedTagTypes)
    return (
        <div>
          <h1>Outfit Name</h1>
          <RelatedTags tagTypes={selectedTagTypes} />
        </div>
    );
  }
});

export default Outfit;