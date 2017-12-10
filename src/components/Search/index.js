import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCharactersAction, setSearchNameAction } from '../../actions';
import './Search.css';

class Search extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.fetchCharacters(this.props.name);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="search">
        <input type="text"
               value={this.props.name}
               onChange={this.props.setSearchName}
               className="search__input"
               placeholder="Search..." />
        <input type="submit" value="Search" className="search__btn" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacters: (name) => dispatch(fetchCharactersAction([], name)),
    setSearchName: (e) => dispatch(setSearchNameAction(e.currentTarget.value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
