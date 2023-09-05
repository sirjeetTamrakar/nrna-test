import { Box, CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from 'redux/homepage/actions';
import NewsCard from '../../globals/NewsCard';

const News = () => {
  const dispatch = useDispatch();
  const { news, news_loading } = useSelector((state) => state.homepage);
  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  return (
    <div className="main_content">
      <section className="all_news">
        <div className="all_news_title">News</div>
        <div className="container">
          {news_loading ? (
            <Box display="flex" justifyContent="center" height="60vh" alignItems="center">
              <CircularProgress size={24} />
            </Box>
          ) : (
            <div className="row">
              {news.length > 0 ? (
                news.map((newsItem) => (
                  <NewsCard key={newsItem.id} news={newsItem} linkUrl={`/news/${newsItem?.slug}`} />
                ))
              ) : (
                <div className="col-md-12 mt-5 mb-5">
                  <h3 className="text-center">No news available.</h3>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;
