import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAllEvents, getEventsCategory } from 'redux/homepage/actions';
import EventCard from '../../globals/EventCard';
import SecondaryNav from './SecondaryNav';

const Events = () => {
  const location = useLocation();
  console.log({ location });
  const dispatch = useDispatch();
  const { events, events_loading, events_category, events_category_loading } = useSelector(
    (state) => state.homepage
  );

  const [filteredEvents, setFilteredEvents] = useState();
  const [allFilteredEvents, setAllFilteredEvents] = useState();

  const [selected, setSelected] = useState();
  useEffect(() => {
    setSelected(location?.state ? location?.state : selected ? selected : 'ALL');
  }, [location?.state, events_category]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getAllEvents());
    dispatch(getEventsCategory());
  }, []);

  // useEffect(() => {
  //   if (events) {
  //     const allNewEvents = events?.filter((list) =>
  //       list?.title?.toLowerCase()?.includes(search?.toLowerCase())
  //     );
  //     setAllFilteredEvents(allNewEvents);
  //   }
  // }, [search, events]);

  useEffect(() => {
    if (events) {
      const newEvents = events?.filter(
        (list) =>
          list?.title?.toLowerCase()?.includes(search?.toLowerCase()) &&
          list?.event_category_id == Number(selected)
      );
      setFilteredEvents(selected === 'ALL' ? events : newEvents);
    }
  }, [search, events, selected, events_category]);

  return (
    <>
      <SecondaryNav
        category={events_category}
        setSelected={setSelected}
        selected={selected}
        setSearch={setSearch}
      />

      <section className="all_events">
        <div className="container">
          {events_loading || events_category_loading ? (
            <Box display="flex" justifyContent="center" height="60vh" alignItems="center">
              <CircularProgress size={24} />
            </Box>
          ) : (
            <div className="row">
              {filteredEvents?.length > 0 ? (
                filteredEvents.map((event) => (
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
