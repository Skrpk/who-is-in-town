import React from 'react';
import propTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import './index.css';

export default (props) => {
  const {
    datetime,
    description,
    status,
  } = props.event;
  const eventDate = new Date(datetime);

  return (
    <Paper onClick={() => props.onClick(props.event)} className="event-presenter">
      <h2><b>Event</b></h2>
      { status && <p><b>Status: </b><span>{status}</span></p> }
      { datetime && <p><b>Date: </b><span>{`${eventDate.getDay()}:${eventDate.getMonth()}:${eventDate.getYear()}`}</span></p> }
      { description && <p><b>description: </b><span>{description}</span></p> }
    </Paper>
  );
}
