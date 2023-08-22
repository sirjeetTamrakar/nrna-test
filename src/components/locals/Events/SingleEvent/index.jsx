import Banner from 'assets/images/banner.png';
import CandidateImage1 from 'assets/images/candidate1.png';
import CandidateImage2 from 'assets/images/candidate2.png';
import CandidateImage3 from 'assets/images/candidate3.png';
import { Link } from 'react-router-dom';

const SingleEvent = () => {
  const event = {
    id: '1',
    featureImage: Banner,
    name: 'John Doe',
    slug: 'first_news_slug',
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  };
  const recentEvent = [
    {
      id: '1',
      image: CandidateImage1,
      name: 'John Doe',
      slug: 'first_news_slug',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',

      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 2,
      image: CandidateImage2,
      name: 'Jason Momoa',
      slug: 'second_news_slug',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',

      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 3,
      image: CandidateImage3,
      name: 'Chris Bumsterd',
      slug: 'third_news_slug',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',

      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ];
  return (
    <div className="main_content">
      <div className="container">
        <div className="single_event_page">
          <div className="single_event_page_content">
            <div className="single_event_page_title">{event?.title}</div>
            <div className="single_event_page_date">{event?.created_date}</div>
            <div className="single_event_page_imgwrap">
              <img src={event?.featureImage} alt={event?.title} />
            </div>
            <div className="event_list_wrapper">
              <ul className="event_list">
                <li>
                  <div className="title">Location :</div>
                  <div className="value">Kathmandu</div>
                </li>
                <li>
                  <div className="title">Venue :</div>
                  <div className="value">NCC Hall</div>
                </li>
                <li>
                  <div className="title">Date :</div>
                  <div className="value">20-Aug-2023</div>
                </li>
              </ul>
              <ul className="event_list">
                <li>
                  <div className="title">Time :</div>
                  <div className="value">8 AM</div>
                </li>
                <li>
                  <div className="title">Contact :</div>
                  <div className="value">9841587582</div>
                </li>
                <li>
                  <div className="title">Email :</div>
                  <div className="value">bishowraut@gmail.com</div>
                </li>
              </ul>
            </div>

            <div className="single_event_page_short">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            {event?.gallery && event?.gallery?.length > 0 && (
              <div className="container">
                <div className="singleEventSlider">
                  {event?.gallery.map((image, index) => (
                    <div key={index}>
                      <div className="slider_imgwrapper">
                        <img src={image?.path} alt={`${event?.title}-${image?.id}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="single_event_page_long">
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
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4571106444496!2d85.3242159761745!3d27.703169425674513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198f7d83c9d3%3A0x42ca0be2874cae9f!2sScodus%20Innovations!5e0!3m2!1sen!2snp!4v1692692607814!5m2!1sen!2snp"
                width="50%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
              {event?.youtube_url && (
                <iframe
                  width="50%"
                  height="400"
                  src={`https://www.youtube.com/embed/${event?.youtube_url}`}
                  title="Event Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen></iframe>
              )}
            </div>
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
                      <img src={recent?.image} alt="" />
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
                <Link to="/events" className="btn-sm">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
