import React from 'react';
import {
  CharacterList,
  Modal,
  Search
} from '../../components';
import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <Search />
      <CharacterList />
      <Modal />
    </main>
  );
}

export default Main;

