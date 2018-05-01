import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Profile from './github/Profile.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'dariusz75',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }
// getting user data from gitHub
getUserData() {
  $.ajax({
    url: 'https://api.github.com/users/' + this.state.username + '?client_Id=' + this.state.clientId + '&client_secret=' + this.props.clientSecret,
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

componentDidMount() {
  this.getUserData();
}

  render() {
    return(
      <div>
        <Profile userData = {this.state.userData} />
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
