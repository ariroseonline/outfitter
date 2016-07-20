import React from 'react';
import ItemGrid from '../../components/item-grid';

var RelatedTags = React.createClass({
  propTypes: {
    tagTypes: React.PropTypes.array
  },

  render() {
    var tagTypes = this.props.tagTypes.map((tagType, i) => {
      return (
          <div key={i}>
            <h2>{tagType.label}</h2>
            <ItemGrid items={tagType.tags} />
          </div>
      );
    });
    return (
        <div>
          <h1>Related</h1>
          {tagTypes}
        </div>);

  }
});

export default RelatedTags;