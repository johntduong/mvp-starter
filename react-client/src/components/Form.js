import React from 'react';
import ReactDOM from 'react-dom';
import { serverRequest } from '../helper';
var test = 0;

class Form extends React.Component {
  constructor(props) {
    super(props);
    console.log('Form props', props);
  }

  checkTheSite(event) {
    event.preventDefault();
    serverRequest(this.urlPath.value, function(e) {
      test = e;
    });
    this.setState({statusCode: test});
  }

  render() {
    var testElement = '';
    if (test === 0) {
      testElement = (<form className="urlForm" onSubmit={this.checkTheSite.bind(this)}> 
        <h2>Please Enter A URL</h2>
        <input type="text" ref={(input) => { this.urlPath = input }} />
        <button type="submit">Search</button>
      </form>)
    } else if (this.state.statusCode === 200) {
      testElement = (<form className="urlForm" onSubmit={this.checkTheSite.bind(this)}> 
        <h2>Please Enter A URL</h2>
        <input type="text" ref={(input) => { this.urlPath = input }} />
        <button type="submit">Search</button>
        <h3>Site is up!</h3>
      </form>)
    } else if (this.state.statusCode === 404) {
      testElement = (<form className="urlForm" onSubmit={this.checkTheSite.bind(this)}> 
        <h2>Please Enter A URL</h2>
        <input type="text" ref={(input) => { this.urlPath = input }} />
        <button type="submit">Search</button>
        <h3>Site is down!</h3>
      </form>)
    }
    return (
  	  testElement
	  )
  }
}

export default Form;