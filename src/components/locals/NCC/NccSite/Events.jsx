import { Box, CircularProgress } from '@mui/material';
import EventCard from 'components/globals/EventCard';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import {
  getAllEvents,
  getEventsCategory,
  getSingleNCC,
  resetEventsState
} from 'redux/homepage/actions';
import SecondaryNav from './SecondaryNav';
const Events = () => {
  const dispatch = useDispatch();
  const { ncc } = useParams();

  //-------------------

  const location = useLocation();
  console.log({ location });

  const { user } = useSelector((state) => state.auth);
  const { events, events_loading, events_category, events_category_loading, single_ncc } =
    useSelector((state) => state.homepage);
  const [filteredEvents, setFilteredEvents] = useState();
  const [selected, setSelected] = useState();
  useEffect(() => {
    setSelected(location?.state ? location?.state : selected ? selected : 'ALL');
  }, [location?.state, events_category]);
  const [search, setSearch] = useState('');
  console.log('dsadddddddcxx', { filteredEvents });
  useEffect(() => {
    dispatch(getAllEvents({ ncc_id: single_ncc?.id }));
    dispatch(getEventsCategory());
    dispatch(getSingleNCC(ncc));
  }, []);

  useEffect(() => {
    dispatch(resetEventsState());
  }, []);

  useEffect(() => {
    if (events) {
      const newEvents = events?.data?.filter(
        (list) =>
          list?.title?.toLowerCase()?.includes(search?.toLowerCase()) &&
          list?.event_category_id == Number(selected)
      );
      setFilteredEvents(selected === 'ALL' ? events?.data : newEvents);
    }
  }, [search, events?.data, selected, events_category]);

  console.log('cxcxcxcxcxcx', { ncc });
  return (
    <>
      <SecondaryNav
        category={events_category}
        setSelected={setSelected}
        selected={selected}
        setSearch={setSearch}
        id={ncc}
        events
        color={'#fff'}
        data={events?.data}
      />
      <div className="main_content">
        <section className="all_events">
          {/* <div className="all_events_title">Events</div> */}
          <div className="container">
            <div className="row">
              {filteredEvents?.length > 0
                ? filteredEvents.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      linkUrl={`/ncc/${ncc}/events/${event?.slug}`}
                    />
                  ))
                : ''}
            </div>
            {events_loading || events_category_loading ? (
              <Box display="flex" justifyContent="center" alignItems="center">
                <CircularProgress size={24} />
              </Box>
            ) : (
              filteredEvents?.length === 0 && (
                <div className="col-md-12 mt-5 mb-5">
                  <h3 className="text-center">No Events available</h3>
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Events;
