import React from 'react';
import { TeamList } from '../../components';
import marvel from '../../images/marvel.png';
import spiderman from '../../images/spiderman.jpg';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar" style={{ backgroundImage: `url(${spiderman})` }}>
      <section className="sidebar__title">
        <img src={marvel} width="50%" />
        <p className="sidebar-title__text">Use the plus button to draft your fantasy team of heroes.</p>
      </section>
      <TeamList />
    </aside>
  );
}

export default Sidebar;
