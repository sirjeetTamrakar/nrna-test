import { Box, CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from 'redux/homepage/actions';
import EventCard from '../../globals/EventCard';

const Events = () => {
  const dispatch = useDispatch();
  const { events, events_loading } = useSelector((state) => state.homepage);
  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  return (
    <div className="main_content">
      <section className="all_events">
        <div className="all_events_title">Events</div>
        <div className="container">
          {events_loading ? (
            <Box display="flex" justifyContent="center" height="60vh" alignItems="center">
              <CircularProgress size={24} />
            </Box>
          ) : (
            <div className="row">
              {events.length > 0 ? (
                events.map((event) => (
                  <EventCard key={event.id} event={event} linkUrl={`/events/${event.slug}`} />
                ))
              ) : (
                <div className="col-md-12 mt-5 mb-5">
                  <h3 className="text-center">No events available.</h3>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
