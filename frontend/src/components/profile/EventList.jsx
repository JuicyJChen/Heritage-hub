import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You might need to install axios
import Event from '../profile/Event';
import styles from './EventList.module.css'; // Assuming you have a CSS module for styling

const EventList = ({ userId }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axios.get(`/api/products/user/${userId}`); // Update the URL to your actual endpoint
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
      setLoading(false);
    };

    fetchEvents();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!events.length) {
    return <p>No events found!</p>;
  }

  return (
    <div className={styles.eventList}>
      {events.map(event => (
        <Event key={event._id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
