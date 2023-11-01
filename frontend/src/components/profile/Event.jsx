import React from 'react';
import styles from './Event.module.css'; // Assuming you have a CSS module for styling

const Event = ({ event }) => {
  return (
    <div className={styles.event}>
      <h3>{event.title}</h3>
      <p>{event.dateAndTime}</p>
      <p>{event.eventType}</p>
      <p>{event.eventCatagory}</p>
      <p>{event.eventLocationType}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default Event;
