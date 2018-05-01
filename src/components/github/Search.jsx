import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {

onSubmit(e) {
  e.preventDefault();
  let enteredUsername = this.refs.username.value.trim();
  if(!enteredUsername) {
    alert('Please enter a Username');
    return;
  }
  this.props.onFormSubit(enteredUsername);
  this.refs.username.value = '';
}

  render() {

    return(
      <div>
        <form onSubmit={this.onSubmit.bind(this)} >
          <label>Rearch User</label>
          <input type="text" ref="username" className="form-control" />
        </form>
      </div>
    )
  }
}

export default Search;
