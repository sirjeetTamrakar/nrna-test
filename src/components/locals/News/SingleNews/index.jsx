import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getAllNews, getNewsCategory, getSingleNews } from 'redux/homepage/actions';
import { changeDateFormat } from 'utils/dateUtils';
import SecondaryNav from '../SecondaryNav';

const SingleNews = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  const { news, news_category, single_news, single_news_loading } = useSelector(
    (state) => state.homepage
  );
  const recentNews = news?.filter((list) => list?.slug !== slug).slice(0, 4);
  console.log('xxxxxxxxxx', { single_news });
  // const [filteredNews, setFilteredNews] = useState();

  const [selected, setSelected] = useState(
    single_news?.news_category_id ? parseInt(single_news?.news_category_id) : news_category?.[0]?.id
  );
  console.log('zxzxzxzxz', { selected });

  useEffect(() => {
    dispatch(getSingleNews(slug));
    dispatch(getAllNews());
    dispatch(getNewsCategory());
  }, [slug]);
  // useEffect(() => {
  //   if (news) {
  //     const newNews = news?.filter(
  //       (list) =>
  //         list?.title?.toLowerCase()?.includes(search?.toLowerCase()) &&
  //         list?.news_category_id == Number(selected)
  //     );
  //     setFilteredNews(newNews);
  //   }
  // }, [news, selected, news_category]);

  // const category = [
  //   {
  //     title: 'Tech & IT',
  //     slug: 'advisory_board'
  //   },
  //   {
  //     title: 'Business',
  //     slug: 'board_of_directors'
  //   },
  //   {
  //     title: 'Science',
  //     slug: 'general_members'
  //   },
  //   {
  //     title: 'Health',
  //     slug: 'task_force'
  //   },
  //   {
  //     title: 'lifeStyle',
  //     slug: 'travel'
  //   },
  //   {
  //     title: 'Health',
  //     slug: 'education'
  //   },
  //   {
  //     title: 'Entertainment',
  //     slug: 'entertainment'
  //   }
  // ];
  // const [selected, setSelected] = useState(category?.[0]?.slug);
  return (
    <>
      <SecondaryNav category={news_category} setSelected={setSelected} selected={selected} />

      <div className="container">
        <div className="single_news_page">
          <div className="single_news_page_content">
            {single_news_loading ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ height: '60vh' }}>
                <CircularProgress size={30} />
              </Box>
            ) : (
              <>
                <div className="single_news_page_title">{single_news?.title}</div>

                <div className="single_news_page_imgwrap">
                  <img src={single_news?.feature_image} alt={single_news?.title} />
                </div>
                <div className="single_news_page_date">
                  {changeDateFormat(single_news?.created_at, 'DD-MMM-YYYY HH:MM')} |{' '}
                  {single_news?.created_by?.name}
                </div>
                {/* <div className="single_news_page_short">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </div> */}

                <div
                  className="single_news_page_long"
                  dangerouslySetInnerHTML={{ __html: single_news?.description }}></div>
              </>
            )}
          </div>

          <div className="single_news_page_sidebar">
            <div className="recent_news">
              <div className="recent_news_title">Recent News</div>
              {recentNews?.length > 0 ? (
                recentNews.map((recent) => (
                  <Link key={recent.id} to={`/news/${recent?.slug}`} className="recent_news_item">
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
                <Link to={`/news`} className="btn-sm">
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

export default SingleNews;
