import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TeamMember } from '../../components';
import { removeFromTeamAction } from '../../actions';
import './TeamList.css';

class TeamList extends Component {
  render() {
    return (
      <div>
        <ul className="team-list">
          {this.props.team.map((character, index) => {
            return (
              <li key={index} className="team-list__item">
                <TeamMember name={character.name}
                            imgURL={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                            onClick={() => this.props.removeFromTeam(character.id, this.props.team)} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    team: state.team
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromTeam: (id, team) => dispatch(removeFromTeamAction(id, team))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamList);
