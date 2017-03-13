import React from 'react';
import ReactDOM from 'react-dom';
import Sites from './Sites';
import { serverRequest } from '../helper';
import { returnDB } from '../helper';
var test = 0;
var list;

class Form extends React.Component {
  constructor(props) {
    super(props);
    // console.log('Form props', props);
  }

  checkTheSite(event) {
    event.preventDefault();
    serverRequest(this.urlPath.value, function(e) {
      test = e;
    });
    returnDB(function(arr) {
      list = arr;
      console.log('list', list);
    });
    this.setState({statusCode: test, list: list});
    // console.log('state code', this.state.statusCode);
  }

  render() {
    var testElement = '';
    if (test === 0) {
      testElement = (
        <div>
        <form className="urlForm" onSubmit={this.checkTheSite.bind(this)}> 
        <h2>Please Enter A URL</h2>
        <input type="text" ref={(input) => { this.urlPath = input }} />
        <button type="submit"><a href="#" class="btn btn-primary">Search</a></button>
      </form></div>)
    } else if (this.state.statusCode === 200) {
      testElement = (
      <div>
      <form className="urlForm" onSubmit={this.checkTheSite.bind(this)}> 
        <h2>Please Enter A URL</h2>
        <input type="text" ref={(input) => { this.urlPath = input }} />
        <button type="submit"><a href="#" class="btn btn-primary">Search</a></button>
        <h3>Site is up!</h3>
      </form> 
      <Sites list={this.state.list} />
      </div>)
    } else if (this.state.statusCode === 404) {
      testElement = (
      <div>
      <form className="urlForm" onSubmit={this.checkTheSite.bind(this)}> 
        <h2>Please Enter A URL</h2>
        <input type="text" ref={(input) => { this.urlPath = input }} />
        <button type="submit"><a href="#" class="btn btn-primary">Search</a></button>
        <h3>Site is down!</h3>
      </form> 
      <Sites list={this.state.list} />
      </div>)
    }
    return (
  	  testElement
	  )
  }
}

export default Form;