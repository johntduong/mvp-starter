import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Form from './components/Form';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	return (
    <Form normal={'normal'} pass={'pass'} fail={'fail'} />
    )
  }
}

render(<Root/>, document.querySelector('#app'));