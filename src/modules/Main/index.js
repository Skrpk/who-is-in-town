import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.css';

import Header from '../../components/Header';
import TextFieldGroup from '../../components/TextFieldGroup';
import ArtistInfo from './components/ArtistInfo';
import {
  loadArtist,
  loadArtistsEvents,
} from './mainActions';

class Main extends React.Component {
  state = {
    artistName: '',
  }

  renderEvents = () => {
    return this.props.events.map(
      event => {
        return (
          <div>aaaaa</div>
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
          <div className="artistData">
            <Header/>
            <div>
              <TextFieldGroup
                label="artistName"
                onChange={this.onChange}
                value={artistName}
                field="artistName"
              />
              <button onClick={() => {
                loadArtist(artistName);
                loadArtistsEvents(artistName);
              }}>Search!</button>
            </div>
            { artist && <ArtistInfo artist={artist}/> }
            { events && this.renderEvents() }
          </div>
          <div className="favorites">

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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

