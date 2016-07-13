import React from 'react';

var RelatedTags = React.createClass({
	renderTagItem(tagItem, i) {
		return (
			<figure key={i}>
				<img src={tagItem.image} />
				<figcaption>{tagItem.label}</figcaption>
			</figure>
		)
	},

	renderTag(tag, i) {
		return (
			<div key={i}>
				<h2>{tag.label}</h2>
				{tag.items.map((tagItem, i)=>{
					return this.renderTagItem(tagItem, i);
				})}	
			</div>
		)
	},

  render() {
  	var tags = this.props.tags.map((tag, i)=>{
  		return this.renderTag(tag, i);
  	});
  	return <div>{tags}</div>
  	
  }
});

export default RelatedTags;