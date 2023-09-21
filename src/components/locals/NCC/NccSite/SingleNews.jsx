import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getAllNews, getNewsCategory, getSingleNCC, getSingleNews } from 'redux/homepage/actions';
import { changeDateFormat } from 'utils/dateUtils';
import SecondaryNav from './SecondaryNav';

const SingleNews = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const { slug, ncc } = useParams();

  console.log('ccccccccxxxcccc', { ncc });

  const { news, news_category, single_news, single_news_loading, single_ncc } = useSelector(
    (state) => state.homepage
  );
  const recentNews = news?.data?.filter((list) => list?.slug !== slug).slice(0, 4);
  console.log('xxxxxxxxxx', { single_news });

  const [selected, setSelected] = useState(
    single_news?.news_category_id ? parseInt(single_news?.news_category_id) : news_category?.[0]?.id
  );
  console.log('zxzxzxzxz', { selected });

  useEffect(() => {
    dispatch(getSingleNews(slug));
    dispatch(getAllNews({ type: 'ncc', id: user?.id }));
    dispatch(getNewsCategory());
  }, [slug]);
  useEffect(() => {
    dispatch(getSingleNCC(ncc));
  }, [ncc]);
  return (
    <>
      <SecondaryNav
        id={ncc}
        category={news_category}
        setSelected={setSelected}
        selected={selected}
        news
        color={single_ncc?.color}
      />

      <div className="main_content">
        <div className="container">
          <div className="single_event_page">
            <div className="single_event_page_content">
              <div className="single_event_page_imgwrap">
                <img src={single_news?.feature_image} alt={single_news?.title} />
              </div>
              <div className="single_event_page_title">{single_news?.title}</div>
              <div className="single_event_page_date">
                {changeDateFormat(single_news?.created_at)} | Created by:{' '}
                {single_news?.created_by?.full_name}
              </div>
              <div className="single_event_page_short">
                <div
                  className="mission_description"
                  dangerouslySetInnerHTML={{ __html: single_news?.description || '' }}
                />
              </div>
              {/* {news?.gallery && news?.gallery?.length > 0 && (
              <div className="container">
                <div className="singleEventSlider">
                  {news?.gallery.map((image, index) => (
                    <div key={index}>
                      <div className="slider_imgwrapper">
                        <img src={image?.path} alt={`Image`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )} */}
              {/* <div className="single_event_page_long">
              sssss Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. Lorem
              Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </div> */}
            </div>
            <div className="single_event_page_sidebar">
              <div className="recent_events">
                <div className="recent_events_title">Recent News</div>
                {recentNews?.length > 0 ? (
                  recentNews.map((recent) => (
                    <Link
                      key={recent.id}
                      to={`/ncc/${ncc}/news/${recent?.slug}`}
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
                    <h3 className="text-center">No News available.</h3>
                  </div>
                )}
                <div className="button_wrap">
                  <Link to={`/ncc/${ncc}/news`} className="btn-sm">
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

export default SingleNews;
