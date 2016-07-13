import React from 'react';
import { Link } from 'react-router';

var ItemGrid = React.createClass({
	renderItems(items) {
	
		return items.map((item, i)=>{
			return (
				<Link key={i} to={`/outfit/`}>
					<figure>
						<img src={item.image} />
						<figcaption>{item.label}</figcaption>
					</figure>
				</Link>
			)
		});
	},

  render() {
  	return (
  		<div>
  			{this.renderItems(this.props.items)}
  		</div>
  	)
  }
});

export default ItemGrid;