import React from 'react';
import './Character.css';

const Character = ({name, imgURL, onAddClick, onInfoClick}) => {
  return (
    <article className="character">
      <div className="character__img" style={{backgroundImage: `url(${imgURL})`}}></div>
      <section className="character__info">
        <h3 className="character__name">{name}</h3>
        <div className="character__btn-wrapper">
          <button onClick={onInfoClick} className="fa fa-info-circle character__btn"></button>
          <button onClick={onAddClick} className="fa fa-plus character__btn character__btn--add"></button>
        </div>
      </section>
    </article>
  );
}

export default Character;
