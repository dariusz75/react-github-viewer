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
      <div className="search-wrapper">
        <form onSubmit={this.onSubmit.bind(this)} >
          <label>Search Profile</label>
          <input type="text" ref="username" placeholder="Enter a Username and press Enter" className="form-control" />
        </form>
      </div>
    )
  }
}

export default Search;
