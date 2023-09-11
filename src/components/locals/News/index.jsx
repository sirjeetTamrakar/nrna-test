import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews } from 'redux/homepage/actions';
import NewsCard from '../../globals/NewsCard';
import SecondaryNav from './SecondaryNav';

const News = () => {
  const dispatch = useDispatch();
  const { news, news_loading } = useSelector((state) => state.homepage);
  useEffect(() => {
    dispatch(getAllNews());
  }, []);
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
      <section className="all_news">
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
    </>
  );
};

export default News;
