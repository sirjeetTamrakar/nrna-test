import { Box, CircularProgress } from '@mui/material';
import Banner from 'assets/images/banner.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getSingleEvent } from 'redux/homepage/actions';
import { changeDateFormat } from 'utils/dateUtils';
import SecondaryNav from '../SecondaryNav';

const SingleEvent = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { events, single_event, single_event_loading } = useSelector((state) => state.homepage);

  const event = {
    id: '1',
    featureImage: Banner,
    name: 'John Doe',
    slug: 'first_news_slug',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  };
  const recentEvent = events?.filter((list) => list?.slug != slug)?.slice(0, 4);

  useEffect(() => {
    slug && dispatch(getSingleEvent(slug));
  }, [slug]);
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

      <div className="container">
        <div className="single_event_page">
          <div className="single_event_page_content">
            {single_event_loading ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ height: '60vh' }}>
                <CircularProgress size={30} />
              </Box>
            ) : (
              <>
                <div className="single_event_page_title">{single_event?.title}</div>
                <div className="single_event_page_date">
                  {changeDateFormat(single_event?.created_at, 'DD-MMM-YYYY HH:MM')}
                </div>
                <div className="single_event_page_imgwrap">
                  <img src={single_event?.feature_image} alt={single_event?.title} />
                </div>
                <div className="event_list_wrapper">
                  <ul className="event_list">
                    <li>
                      <div className="title">Location :</div>
                      <div className="value">{single_event?.location}</div>
                    </li>
                    <li>
                      <div className="title">Venue :</div>
                      <div className="value">{single_event?.venue}</div>
                    </li>
                    <li>
                      <div className="title">Date :</div>
                      <div className="value">{changeDateFormat(single_event?.event_date)}</div>
                    </li>
                  </ul>
                  <ul className="event_list">
                    <li>
                      <div className="title">Time :</div>
                      <div className="value">{single_event?.event_time}</div>
                    </li>
                    <li>
                      <div className="title">Contact :</div>
                      <div className="value">{single_event?.contact_phone}</div>
                    </li>
                    <li>
                      <div className="title">Email :</div>
                      <div className="value">{single_event?.contact_email}</div>
                    </li>
                  </ul>
                </div>

                {/* <div className="single_event_page_short">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </div> */}

                <div
                  className="single_event_page_long"
                  dangerouslySetInnerHTML={{ __html: single_event?.description }}
                />
                <div className="map-container">
                  {single_event?.map_url && (
                    <iframe
                      src={single_event?.map_url}
                      width="50%"
                      height="280"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"></iframe>
                  )}
                  {event?.youtube_url && (
                    <iframe
                      width="50%"
                      height="280"
                      src={`https://www.youtube.com/embed/${event?.youtube_url}`}
                      title="Event Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen></iframe>
                  )}
                </div>
              </>
            )}
          </div>
          <div className="single_event_page_sidebar">
            <div className="recent_events">
              <div className="recent_events_title">Recent Event</div>
              {recentEvent.length > 0 ? (
                recentEvent.map((recent) => (
                  <Link
                    key={recent.id}
                    to={`/events/${recent?.slug}`}
                    className="recent_events_item">
                    <div className="img_wrapper">
                      <img src={recent?.feature_image} alt="" />
                    </div>
                    <div className="item_content">
                      <div className="item_content_title">{recent?.title}</div>
                      <div className="item_content_date">
                        {changeDateFormat(recent?.created_at)}
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="button_wrap">
                  <h3 className="text-center">No Event available.</h3>
                </div>
              )}
              <div className="button_wrap">
                <Link to="/events" className="btn-sm">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEvent;
