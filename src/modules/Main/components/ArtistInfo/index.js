import React from 'react';
import propTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import './index.css';

class ArtistInfo extends React.Component {
  render() {
    const {
      image_url,
      name,
      url,
      facebook_page_url,
    } = this.props.artist;
    return (
      <Paper className="artist-info-wrapper">
        <div className="artist-info">
          <img className="artist-image" src={image_url} />
          <div className="info">
            <p><b>Name: </b><span>{name}</span></p>
            { facebook_page_url && (<p><b>Facebook: </b><span>{facebook_page_url}</span></p>) }
          </div>
        </div>
      </Paper>
  );
  }
}

export default ArtistInfo;
