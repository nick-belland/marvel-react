import React from 'react';
import './TeamMember.css';

const TeamMember = ({name, imgURL, onClick}) => {
  return (
    <article className="team-member">
      <div className="team-member__img" style={{backgroundImage: `url(${imgURL})`}}></div>
      <h3 className="team-member__name">{name}</h3>
      <button onClick={onClick} className="fa fa-trash-o team-member__remove"></button>
    </article>
  );
}

export default TeamMember;
