import React from 'react'


import Profiles from '../../components/Profiles';

function Test() {
  return (
    <div>
      <div>
  <main>
    <article className="profile">
      <div className="profile__bg" />
      <div className="profile__info">
        <h1 className="profile__name">Victor Crest<span className="profile__age">26</span></h1>
        <p className="profile__location">London</p>
        <div className="profile__stats">
          <div className="stat">
            <p className="stat__number">80K</p>
            <p className="stat__name">Followers</p>
          </div>
          <div className="stat">
            <p className="stat__number">803K</p>
            <p className="stat__name">Likes</p>
          </div>
          <div className="stat">
            <p className="stat__number">1.4K</p>
            <p className="stat__name">Photos</p>
          </div>
        </div>
      </div>
      <div className="profile__img__container">
        <img className="profile__img" src="https://kellychi22.github.io/frontend-mentor-solutions/08-profile-card-component//images/image-victor.jpg" alt="photo-of-victor-crest" />
      </div>
    </article>
  </main>
  <footer className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by <a href="https://www.frontendmentor.io/profile/Hsin-tingCHI">Kelly CHI</a>.
  </footer>
</div>
    </div>
  )
}

export default Test