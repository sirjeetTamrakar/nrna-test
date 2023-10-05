import { Box, Button, CircularProgress } from '@mui/material';
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
  const [eventLimit, setEventLimit] = useState(6);

  const [selected, setSelected] = useState();
  useEffect(() => {
    setSelected(location?.state ? location?.state : selected ? selected : 'ALL');
  }, [location?.state, events_category]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const finalData = {
      limit: eventLimit
    };
    dispatch(getAllEvents(finalData));
    dispatch(getEventsCategory());
  }, [eventLimit]);

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
      const newEvents = events?.data?.filter(
        (list) =>
          list?.title?.toLowerCase()?.includes(search?.toLowerCase()) &&
          list?.event_category_id == Number(selected)
      );
      setFilteredEvents(selected === 'ALL' ? events?.data : newEvents);
    }
  }, [search, events, selected, events_category]);

  const handleShowMore = () => {
    setEventLimit((prev) => prev + 4);
  };

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
          <div className="row">
            {filteredEvents?.length > 0 ? (
              <>
                <>
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} linkUrl={`/events/${event.slug}`} />
                  ))}
                </>
                <>
                  {events?.meta?.to !== events?.meta?.total &&
                    !(events_loading || events_category_loading) && (
                      <div
                        style={{
                          marginTop: '20px',
                          marginBottom: '20px',
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'center'
                        }}>
                        <Button
                          style={{
                            border: 'none',
                            backgroundColor: '#E1F5FF',
                            color: '#6F83CE',
                            padding: '10px 20px',
                            borderRadius: '4px'
                          }}
                          onClick={handleShowMore}>
                          Show More
                        </Button>
                      </div>
                    )}
                </>
              </>
            ) : (
              ''
            )}
          </div>

          {events_loading || events_category_loading ? (
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress size={24} />
            </Box>
          ) : (
            filteredEvents?.length === 0 && (
              <div className="col-md-12 mt-5 mb-5">
                <h3 className="text-center">No events available</h3>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default Events;
