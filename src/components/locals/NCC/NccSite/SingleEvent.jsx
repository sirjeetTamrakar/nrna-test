import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getAllEvents, getEventsCategory, getSingleEvent } from 'redux/homepage/actions';
import SecondaryNav from './SecondaryNav';

const SingleEvent = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const { slug, ncc } = useParams();
  const data = useParams();

  console.log('ccccccccxxvvv', { data });

  const { single_event, events, events_category } = useSelector((state) => state.homepage);
  const recentEvent = events?.filter((list) => list?.slug !== slug).slice(0, 4);
  console.log('xxxxxxxxxx', { recentEvent });

  const [selected, setSelected] = useState(
    single_event?.event_category_id
      ? parseInt(single_event?.event_category_id)
      : events_category?.[0]?.id
  );
  console.log('zxzxzxzxz', { selected });

  useEffect(() => {
    dispatch(getSingleEvent(slug));
    dispatch(getAllEvents({ ncc_id: 30 }));
    dispatch(getEventsCategory());
  }, [slug]);
  return (
    <>
      <SecondaryNav
        id={ncc}
        category={events_category}
        setSelected={setSelected}
        selected={selected}
        events
      />
      <div className="main_content">
        <div className="container">
          <div className="single_event_page">
            <div className="single_event_page_content">
              <div className="single_event_page_title">{single_event?.title}</div>
              <div className="single_event_page_date">{single_event?.created_date}</div>
              <div className="single_event_page_imgwrap">
                <img src={single_event?.feature_image} alt={single_event?.title} />
              </div>
              <div className="single_event_page_short">
                <div
                  className="mission_description"
                  dangerouslySetInnerHTML={{ __html: single_event?.description || '' }}
                />
              </div>
              {/* {single_event?.gallery && single_event?.gallery?.length > 0 && (
              <div className="container">
                <div className="singleEventSlider">
                  {single_event?.gallery.map((image, index) => (
                    <div key={index}>
                      <div className="slider_imgwrapper">
                        <img src={image?.path} alt={`${single_event?.title}-${image?.id}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )} */}
              {/* <div className="single_event_page_long">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. Lorem
              Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </div> */}
              {event?.youtube_url && (
                <div className="single_event_page_long">
                  <iframe
                    width="100%"
                    height="400"
                    src={`https://www.youtube.com/embed/${event?.youtube_url}`}
                    title="Event Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
                </div>
              )}
            </div>
            <div className="single_event_page_sidebar">
              <div className="recent_events">
                <div className="recent_events_title">Recent Event</div>
                {recentEvent.length > 0 ? (
                  recentEvent.map((recent) => (
                    <Link
                      key={recent.id}
                      to={`/ncc/${ncc}/events/${recent?.slug}`}
                      className="recent_events_item">
                      <div className="img_wrapper">
                        <img src={recent?.feature_image} alt="" />
                      </div>
                      <div className="item_content">
                        <div className="item_content_title">{recent?.title}</div>
                        <div className="item_content_date">{recent?.created_date}</div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="button_wrap">
                    <h3 className="text-center">No Event available.</h3>
                  </div>
                )}
                <div className="button_wrap">
                  <Link to={`/ncc/${ncc}/events`} className="btn-sm">
                    View All
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEvent;
