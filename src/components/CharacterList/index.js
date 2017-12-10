import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Character
} from '../../components';
import { addToTeamAction, fetchCharactersAction, openModalAction } from '../../actions';
import './CharacterList.css';

class CharacterList extends Component {
  constructor() {
    super();

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    this.props.fetchCharacters(this.props.characters);
  }

  handleScroll(e) {
    if ((e.currentTarget.offsetHeight + e.currentTarget.scrollTop) >= e.currentTarget.scrollHeight) {
      this.props.fetchCharacters(this.props.characters);
    }
  }

  render() {
    return (
      <ul className="character-list" onScroll={this.handleScroll}>
        {this.props.characters.map((character, index) => {
          return (
            <li key={index} className="character-list__item">
              <Character name={character.name}
                         imgURL={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                         onAddClick={() => this.props.addToTeam(character.id)}
                         onInfoClick={() => this.props.openModal(character.id)} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacters: (characters) => dispatch(fetchCharactersAction(characters)),
    addToTeam: (id) => dispatch(addToTeamAction(id)),
    openModal: (id) => dispatch(openModalAction(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
