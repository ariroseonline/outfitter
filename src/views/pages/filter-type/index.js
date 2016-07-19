import React from 'react';

let FilterType = React.createClass({
  render() {
    return (
        <div>
          <h1>{this.props.params.filterType}</h1>
          <img src="http://placehold.it/1400x400" />
        </div>
    );
  }
});

export default FilterType;