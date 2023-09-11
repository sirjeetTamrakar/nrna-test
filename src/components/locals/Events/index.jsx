import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from 'redux/homepage/actions';
import EventCard from '../../globals/EventCard';
import SecondaryNav from './SecondaryNav';

const Events = () => {
  const dispatch = useDispatch();
  const { events, events_loading } = useSelector((state) => state.homepage);
  useEffect(() => {
    dispatch(getAllEvents());
  }, []);
  const category = [
    {
      title: 'Tech & IT',
      slug: 'advisory_board'
    },
    {
      title: 'Business',
      slug: 'board_of_directors'
    },
    {
      title: 'Science',
      slug: 'general_members'
    },
    {
      title: 'Health',
      slug: 'task_force'
    },
    {
      title: 'lifeStyle',
      slug: 'travel'
    },
    {
      title: 'Health',
      slug: 'education'
    },
    {
      title: 'Entertainment',
      slug: 'entertainment'
    }
  ];
  const [selected, setSelected] = useState(category?.[0]?.slug);

  return (
    <>
      <SecondaryNav category={category} setSelected={setSelected} selected={selected} />

      <section className="all_events">
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
    </>
  );
};

export default Events;
