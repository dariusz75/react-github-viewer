import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {

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
