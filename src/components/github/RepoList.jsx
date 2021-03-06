import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class RepoList extends Component {

  render() {
    return(
      <div>
        <h5>List of 10 repositories sorted by date</h5>
        <div className="list-group">
          {
  					this.props.userRepos.map(function(repo){
  						return (<a href={repo.html_url} target="_blank" className="list-group-item list-group-item-action list-group-item-light" key={repo.id}>{repo.name}</a>);
  					})
  				}
        </div>
      </div>
    );
  }
}


export default RepoList;
