import React from 'react';
import { TeamList } from '../../components';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <section className="sidebar__title">
        <img src="/marvel.png" width="50%" />
        <p className="sidebar-title__text">Use the plus button to draft your fantasy team of heroes.</p>
      </section>
      <TeamList />
    </aside>
  );
}

export default Sidebar;
