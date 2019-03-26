import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './index.css';
import EventPresenter from '../Main/components/EventPresenter';

import { setCurrentEvent } from '../EventDetails/eventActions';

class Favorites extends React.Component {
  renderFavorites = () => {
    return this.props.favorites.map(
      favorite => {
        return (
          <Link to={`/event/${favorite.id}`} key={Math.random()}
          >
            <EventPresenter
              event={favorite}
              onClick={(event) => this.props.setCurrentEvent(event)}
            />
          </Link>
        );
      }
    );
  }

  render() {
    return (
      <div className="fav-wrapper">
        { this.renderFavorites() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentEvent: (event) => dispatch(setCurrentEvent(event)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
