import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Profile extends Component {

  render() {
    return(
      <div className="card" >
				<div className="row">
					<div className="col-5 col-md-3">
	      		<img className="profile-photo card-img-top" src={this.props.userData.avatar_url} alt="Card image cap"></img>
						<h6 className="card-title"></h6>
					</div>
					<div className="col-md-9">
		        <div className="card-body">
							<h5 className="card-title alert alert-primary">{this.props.userData.name}</h5>
		    			<p className="card-text">
								<span className="badge badge-info mr-1"> {this.props.userData.public_repos} Public Repos</span>
								<span className="badge badge-secondary mr-1"> {this.props.userData.followers} Followers</span>
								<span className="badge badge-dark mr-1"> {this.props.userData.following} Followings</span>
							</p>
		  			</div>
					  <ul className="list-group list-group-flush">
					    <li className="list-group-item"><span className="accent">Username: </span> {this.props.userData.login}</li>
					    <li className="list-group-item"><span className="accent">Location: </span> {this.props.userData.location}</li>
					    <li className="list-group-item"><span className="accent">Email: </span> {this.props.userData.email}</li>
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
