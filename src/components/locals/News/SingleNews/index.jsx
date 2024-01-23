import { WhatsApp } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, CircularProgress, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { getAllNews, getNewsCategory, getSingleNews } from 'redux/homepage/actions';
import { changeDateFormat } from 'utils/dateUtils';
import SecondaryNav from '../SecondaryNav';

const SingleNews = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const location = useLocation();
  const pathname = window.location.pathname;

  console.log({ location });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { news, news_category, single_news, single_news_loading } = useSelector(
    (state) => state.homepage
  );
  const recentNews = news?.data?.filter((list) => list?.slug !== slug).slice(0, 4);

  const [selected, setSelected] = useState(
    single_news?.news_category_id ? parseInt(single_news?.news_category_id) : news_category?.[0]?.id
  );

  useEffect(() => {
    dispatch(getSingleNews(slug));
    dispatch(getAllNews());
    dispatch(getNewsCategory());
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>{single_news?.title}</title>
        <meta name="description" content={single_news?.excerpt}></meta>
        <meta property="og:title" content={single_news?.title}></meta>
        <meta property="og:image" content={single_news?.feature_image}></meta>
        <meta name="twitter:card" content={single_news?.feature_image}></meta>
        {/* <meta name="twitter:site" content="@site_username"></meta> */}
        <meta name="twitter:title" content={single_news?.title}></meta>
        <meta name="twitter:description" content={single_news?.excerpt}></meta>
        {/* <meta name="twitter:creator" content="@creator_username"></meta> */}
        <meta name="twitter:image" content={single_news?.feature_image}></meta>
        <meta name="twitter:domain" content="nbnsglobal.com"></meta>
      </Helmet>
      <SecondaryNav category={news_category} setSelected={setSelected} selected={selected} />

      <div className="container">
        {single_news_loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: '60vh' }}>
            <CircularProgress size={30} />
          </Box>
        ) : (
          <div className="single_news_page">
            <Grid container className="news_main_grid">
              <Grid item md={8}>
                <div className="single_news_page_content">
                  <>
                    <div className="single_news_page_imgwrap">
                      <img src={single_news?.feature_image} alt={single_news?.title} />
                    </div>
                    <div className="single_news_page_title">{single_news?.title}</div>

                    <div className="single_news_page_date">
                      {changeDateFormat(single_news?.created_at, 'DD-MMM-YYYY HH:MM')} | Author:{' '}
                      {single_news?.author ?? 'NBNS Global'}
                    </div>
                    <Box sx={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                      <FacebookShareButton url={`https://nbnsglobal.com${location?.pathname}`}>
                        <FacebookIcon sx={{ color: '#0866FF', fontSize: '30px' }} />
                      </FacebookShareButton>
                      <TwitterShareButton url={`https://nbnsglobal.com${location?.pathname}`}>
                        <TwitterIcon sx={{ color: '#1BC4F7', fontSize: '30px' }} />
                      </TwitterShareButton>
                      <WhatsappShareButton url={`https://nbnsglobal.com${location?.pathname}`}>
                        <WhatsApp sx={{ color: '#24CC63', fontSize: '30px' }} />
                      </WhatsappShareButton>
                    </Box>

                    <div
                      className="single_news_page_long"
                      dangerouslySetInnerHTML={{ __html: single_news?.description }}></div>
                  </>
                </div>
              </Grid>
              <Grid item md={4} sm={12} className="recent_news">
                <div className="single_news_page_sidebar">
                  <div className="recent_news">
                    <div className="recent_news_title">Recent News</div>
                    {recentNews?.length > 0 ? (
                      recentNews.map((recent) => (
                        <Link
                          key={recent.id}
                          to={`/news/${recent?.slug}`}
                          className="recent_news_item">
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
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleNews;
