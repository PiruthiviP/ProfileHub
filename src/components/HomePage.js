import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ profiles }) => {
  return (
    <div className="container">
      <h1>Profiles</h1>
      <div className="card__container">
        {profiles.map((profile, index) => (
          <article className="card__article" key={index}>
            <img className="card__img" src={profile.picture.large} alt={profile.name.first} />
            <div className="card__data">
              <h2 className="card__title">{profile.name.first} {profile.name.last}</h2>
              <p className="card__description">Email: {profile.email}</p>
              <Link className="card__button" to={`/profile/${index}`}>View Profile</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
