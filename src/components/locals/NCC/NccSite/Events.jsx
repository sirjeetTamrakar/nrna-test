import EventCard from 'components/globals/EventCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllEvents, getSingleNCC } from 'redux/homepage/actions';

const Events = () => {
  const dispatch = useDispatch();

  // const events = [
  //   {
  //     id: '1',
  //     featureImage: CandidateImage1,
  //     name: 'John Doe',
  //     slug: 'first_news_slug',
  //     title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',

  //     excerpt:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  //   },
  //   {
  //     id: 2,
  //     featureImage: CandidateImage2,
  //     name: 'Jason Momoa',
  //     slug: 'second_news_slug',
  //     title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',

  //     excerpt:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  //   },
  //   {
  //     id: 3,
  //     featureImage: CandidateImage3,
  //     name: 'Chris Bumsterd',
  //     slug: 'third_news_slug',
  //     title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',

  //     excerpt:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  //   }
  // ];
  const { ncc } = useParams();
  const data = useParams();
  console.log('bnnnnnnnn', { data });
  const { user } = useSelector((state) => state.auth);
  const { single_ncc } = useSelector((state) => state.homepage);
  console.log({ single_ncc });
  const { events } = useSelector((state) => state.homepage);
  console.log('dsaddddddd', { events });
  useEffect(() => {
    dispatch(getAllEvents({ ncc_id: single_ncc?.id }));
    dispatch(getSingleNCC(ncc));
  }, []);
  return (
    <div className="main_content">
      <section className="all_events">
        <div className="all_events_title">Events</div>
        <div className="container">
          <div className="row">
            {events.length > 0 ? (
              events.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  linkUrl={`/ncc/${ncc}/events/${event?.slug}`}
                />
              ))
            ) : (
              <div className="col-md-12 mt-5 mb-5">
                <h3 className="text-center">No events available.</h3>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
