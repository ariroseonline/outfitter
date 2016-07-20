import React from 'react';
import tags from 'src/tags-stubs';
import ItemGrid from '../../components/item-grid';

let TagType = React.createClass({
  renderTags() {
    return <ItemGrid items={tags[this.props.params.tagType].tags}/>
  },

  render() {

    return (
        <div>
          <h1>{tags[this.props.params.tagType].label}</h1>
          {this.renderTags()}
        </div>
    );
  }
});

export default TagType;