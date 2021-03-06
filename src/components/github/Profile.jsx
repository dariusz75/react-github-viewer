import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Profile extends Component {

  render() {
    return(
      <div className="card" >
				<div className="row">
					<div className="col-3">
	      		<img className="card-img-top" src={this.props.userData.avatar_url} alt="Card image cap"></img>
						<h6 className="card-title"></h6>
					</div>
					<div className="col-7">
		        <div className="card-body">
							<h5 className="card-title alert alert-primary">{this.props.userData.name}</h5>
		    			<p className="card-text">
								<span className="badge badge-info mr-1"> {this.props.userData.public_repos} Public Repos</span>
								<span className="badge badge-secondary mr-1"> {this.props.userData.followers} Followers</span>
								<span className="badge badge-dark mr-1"> {this.props.userData.following} Followings</span>
							</p>
		  			</div>
					  <ul className="list-group list-group-flush">
					    <li className="list-group-item">Username: {this.props.userData.login}</li>
					    <li className="list-group-item">Location: {this.props.userData.location}</li>
					    <li className="list-group-item">Email: {this.props.userData.email}</li>
					  </ul>
					  <div className="card-body">
					    <a href={this.props.userData.html_url} className="card-link btn btn-info" target="_blank">gitHub</a>
					  </div>
					</div>
				</div>

			</div>
    );
  }
}


export default Profile;
