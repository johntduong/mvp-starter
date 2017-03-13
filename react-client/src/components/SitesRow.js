import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import Sites from './Sites';

class SitesRow extends React.Component {
	constructor(props) {
    super(props);
    console.log('SitesRow props', props);
  }

  render() {
  	return (
  		<li>{this.props.site.url}</li>
  	)
  }

}

export default SitesRow;