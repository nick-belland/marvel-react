import { getCharacter, getCharacters } from '../utils';

/**
 * Get all the characters
 */
export const GET_CHARACTERS = 'CHARACTERS:GET';

export const getCharactersAction = (characters) => {
  return {
    type: GET_CHARACTERS,
    payload: {
      characters
    }
  };
};

export const fetchCharactersAction = (characters, name) => {
  return (dispatch, getState) => {
    const characterName = name || getState().search;
    getCharacters(characters.slice(0), characterName).then(data => {
      dispatch(getCharactersAction(data));
    });
  }
};


/**
 * Search characters by name
 */
export const SET_SEARCH_NAME = 'SEARCH:SET_SEARCH_NAME';

export const setSearchNameAction = (name) => {
  return {
    type: SET_SEARCH_NAME,
    payload: {
      name
    }
  };
};


/**
 * Add character to team
 */
export const ADD_TO_TEAM = 'TEAM:ADD_TO_TEAM';

export const addToTeamAction = (id) => {
  return (dispatch, getState) => {
    getCharacter(id).then(data => {
      let newTeam = getState().team.slice(0);
      const results = data.data.results;

      for(let i=0; i<results.length; i++) {
        newTeam.push(results[i]);
      }

      dispatch(addCharacterAction(newTeam));
    });
  };
};

export const addCharacterAction = (team) => {
  return {
    type: ADD_TO_TEAM,
    payload: {
      team
    }
  };
};


/**
 * Remove character from team
 */
export const REMOVE_FROM_TEAM = 'TEAM:REMOVE_FROM_TEAM';

export const removeFromTeamAction = (id, team) => {
  let newTeam = team.slice(0);

  for (let i=0; i<team.length; i++) {
    if (team[i].id === id) {
      newTeam.splice(i, 1);

      return {
        type: REMOVE_FROM_TEAM,
        payload: {
          team: newTeam
        }
      };
    }
  }
};


/**
 * Open the modal
 */
export const OPEN_MODAL = 'MODAL:OPEN';

export const openModalAction = (id) => {
  return (dispatch, getState) => {
    getCharacter(id).then(data => {
      const results = data.data.results;

      for(let i=0; i<results.length; i++) {
        dispatch(modalInfoAction(results[i]));
      }
    });
  };  
};

export const modalInfoAction = (data) => {
  return {
    type: OPEN_MODAL,
    payload: {
      data
    }
  };
};


/**
 * Close the modal
 */
export const CLOSE_MODAL = 'MODAL:CLOSE';

export const closeModalAction = () => {
  return {
    type: CLOSE_MODAL
  };
};
