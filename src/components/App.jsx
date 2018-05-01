import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Profile from './github/Profile.jsx';
import RepoList from './github/RepoList.jsx';
import Search from './github/Search.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'dariusz75',
      userData: [],
      userRepos: [],
      perPage: 10
    }
  }
// getting user data from gitHub
getUserData() {
  $.ajax({
    url: 'https://api.github.com/users/' + this.state.username + '?client_Id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
    dataType: 'json',
    cache: false,
    success: function(data) {
      this.setState({userData: data});
      console.log(this.state);
    }.bind(this),
    error: function(xhr, status, err) {
      this.setState({username: null});
      alert(err).bind(this);;
    }
  });
}

// getting user Repos from gitHub
getUserRepos() {
  $.ajax({
    url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_Id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
    dataType: 'json',
    cache: false,
    success: function(data) {
      this.setState({userRepos: data});
      console.log(this.state);
    }.bind(this),
    error: function(xhr, status, err) {
      this.setState({username: null});
      alert(err).bind(this);;
    }
  });
}

handleFormSubmit(enteredUsername) {
  this.setState({username: enteredUsername}, function(){
    this.getUserData();
    this.getUserRepos();
  });

}

componentDidMount() {
  this.getUserData();
  this.getUserRepos();
}

  render() {
    return(
      <div>
        <Search onFormSubit = {this.handleFormSubmit.bind(this)} />
        <Profile userData = {this.state.userData} />
        <RepoList userRepos = {this.state.userRepos} />
      </div>
    );
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};
App.defaultProps = {
  clientId: '71139bbfc6e123f5e388',
  clientSecret: '32955c13201cf60a35231c334106937ff58529e6'
};

export default App;
