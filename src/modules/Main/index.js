import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './index.css';
import Header from '../../components/Header';
import ArtistInfo from './components/ArtistInfo';
import Favorites from '../Favorites';
import EventPresenter from './components/EventPresenter';
import {
  loadArtist,
  loadArtistsEvents,
} from './mainActions';
import { setCurrentEvent } from '../EventDetails/eventActions';

class Main extends React.Component {
  state = {
    artistName: '',
  }

  renderEvents = () => {
    return this.props.events.map(
      event => {
        return (
          <Link to={`/event/${event.id}`} key={Math.random()}
          >
            <EventPresenter
              event={event}
              onClick={(event) => this.props.setCurrentEvent(event)}
            />
          </Link>
        );
      }
    );
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { artistName } = this.state;
    const {
      dispatch,
      artist,
      events,
      loadArtist,
      loadArtistsEvents,
    } = this.props;
    return (
      <div>

        <div className="wrapper">
          <div className="artist-data">
            <Header/>
            <div className="search">
              <Input
                onChange={this.onChange}
                value={artistName}
                placeholder="Name of artist"
                name="artistName"
              />
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  loadArtist(artistName);
                  loadArtistsEvents(artistName);
                }}
              >
                Search!
              </Button>
            </div>
            {artist && <ArtistInfo artist={artist}/>}
            <Grid container class="artist-events">
              {events && this.renderEvents()}
            </Grid>
          </div>
          <div className="favorites">
            <h2 className="favorites-title">Favorites</h2>
            <Favorites />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    artist: store.main.get('artist'),
    events: store.main.get('events'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadArtist: (artistName) => dispatch(loadArtist(artistName)),
    loadArtistsEvents: (artistName) => dispatch(loadArtistsEvents(artistName)),
    setCurrentEvent: (event) => dispatch(setCurrentEvent(event)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

