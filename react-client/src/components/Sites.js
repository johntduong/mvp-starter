import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import SitesRow from './SitesRow';

class Sites extends React.Component {
	constructor(props) {
    super(props);
    console.log('Sites props', props);
  }

  render() {
  	return (
  		<div>
  		<h1>Recently Pinged</h1>
  		<ul>
      {this.props.list.map((site, index) => <SitesRow site={site} key={index} />)}
      	</ul>
      	</div>
  	)
  }
}

export default Sites;