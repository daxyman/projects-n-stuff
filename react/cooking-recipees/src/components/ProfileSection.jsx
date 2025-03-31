import "./profileSection.css";
import React from 'react';

function ProfileSection(props) {
  return (
    <>
      <div className="profile">
          <div className="profile-name-image">
            <img className="profile-image" src={props.source} alt={props.alt} />
            <h1 className="profile-user-name">{props.userName}</h1>
          </div>
          <div className="profile-bio">
            <p>{props.profilBio}</p>
          </div>
          <div className="profile-stats">
            <ul>
              <li>{props.posts}</li>
              <li>{props.followers} followers</li>
              <li>{props.following} following</li>
            </ul>
          </div>
        </div>
    </>
    
  );
}

export default ProfileSection;
