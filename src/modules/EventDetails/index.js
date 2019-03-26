import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

import './index.css';
import Header from '../../components/Header';
import { setCurrentEvent } from './eventActions';
import { addEventToFavorites, removeEventFromFavorites } from "../Favorites/favoriteActions";

class EventDetails extends React.Component {
  toggleFavoritesCheckbox = (checked) => {
    const {
      addEventToFavorites,
      removeEventFromFavorites,
      event,
    } = this.props;
    checked ? addEventToFavorites(event) : removeEventFromFavorites(event.id);
  }

  isEventInFavorites = () => {
    const {
      event,
      favorites,
    } = this.props;

    return !!favorites.find(favEvent => favEvent.id === event.id);
  }

  render() {

    const {
      datetime,
      description,
      status,
      venue,
    } = this.props.event;
    const eventDate = new Date(datetime);

    return <div>
      <div className="event-data-wrapper">
        <div className="head-wrapper">
          <Header />
          <Checkbox
            color="primary"
            onChange={(event, checked) => this.toggleFavoritesCheckbox(checked)}
            checked={this.isEventInFavorites()}
          />
          <span>Add to favorites</span>
        </div>
        <Paper className="data-block">
          { status && <p><b>Status: </b><span>{status}</span></p> }
          { datetime && <p><b>Date: </b><span>{`${eventDate.getDay()}:${eventDate.getMonth()}:${eventDate.getYear()}`}</span></p> }
          { description && <p><b>description: </b><span>{description}</span></p> }
        </Paper>
        { venue && <Paper className="data-block">
          <p><b>Place: </b><span>{venue.name}</span></p>
          <p><b>City: </b><span>{venue.city}</span></p>
          <p><b>Region: </b><span>{venue.region}</span></p>
          <p><b>Country: </b><span>{venue.country}</span></p>
        </Paper> }
      </div>
    </div>
  }
}

function mapStateToProps(store) {
  return {
    event: store.event.get('event'),
    favorites: store.favorites.toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentEvent: (event) => dispatch(setCurrentEvent(event)),
    addEventToFavorites: (event) => dispatch(addEventToFavorites(event)),
    removeEventFromFavorites: (id) => dispatch(removeEventFromFavorites(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
