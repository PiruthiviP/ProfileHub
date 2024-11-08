// src/components/ProfileDetailPage.js
import React from 'react';
import './ProfileDetailPage.css';

import { useParams } from 'react-router-dom';

const ProfileDetailPage = ({ profiles }) => {
  const { id } = useParams();
  const profileIndex = Number(id);
  const profile = profiles[profileIndex];

  return (
    <div className="profile-details">
      {profile ? (
        <div className="profile-content">
          <h1>{profile.name.first} {profile.name.last}</h1>
          <img className="profile-img" src={profile.picture.large} alt={profile.name.first} />
          <p className="profile-email">Email: {profile.email}</p>
          <p>Phone: {profile.phone}</p>
          <p>Address: {profile.location.street.number} {profile.location.street.name}, {profile.location.city}, {profile.location.state}</p>
        </div>
      ) : (
        <p>Profile not found</p>
      )}
    </div>
  );
};

export default ProfileDetailPage;
