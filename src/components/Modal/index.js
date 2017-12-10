import React, { Component } from 'react';
import { connect } from 'react-redux'
import { closeModalAction, addToTeamAction } from '../../actions';
import './Modal.css';

class Modal extends Component {
  componentWillMount() {
    window.addEventListener('keyup', (e) => {
      // esc
      if (e.keyCode === 27) {
        this.props.closeModal();
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListender('keyup', this.props.closeModal);
  }

  render() {
    const info = this.props.info;

    return (
      <div>
        {this.props.open && <div className="modal-wrapper">
          <section className="modal">
            <div className="modal__img" style={{backgroundImage: `url(${info.thumbnail.path}.${info.thumbnail.extension})`}}></div>
            <div className="modal__content">
              <section className="modal-content__title">
                <h2>{info.name}</h2>
                <button className="modal__add-btn" onClick={() => this.props.addToTeam(info.id)}>Add to team</button>
              </section>
              <p>{info.description || 'Description not available.'}</p>
            </div>
            <button className="modal__close-btn fa fa-times" onClick={this.props.closeModal}></button>
          </section>
        </div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    open: state.modal.open,
    info: state.modal.info
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModalAction()),
    addToTeam: (id) => dispatch(addToTeamAction(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
