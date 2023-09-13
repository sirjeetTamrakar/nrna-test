import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews, getNewsCategory } from 'redux/homepage/actions';
import NewsCard from '../../globals/NewsCard';
import SecondaryNav from './SecondaryNav';

const News = () => {
  const dispatch = useDispatch();
  const { news, news_loading, news_category, news_category_loading } = useSelector(
    (state) => state.homepage
  );
  const [filteredNews, setFilteredNews] = useState();

  const [selected, setSelected] = useState(news_category?.[0]?.id);
  const [search, setSearch] = useState('');
  useEffect(() => {
    dispatch(getAllNews());
    dispatch(getNewsCategory());
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

  useEffect(() => {
    if (news) {
      const newNews = news?.filter(
        (list) =>
          list?.title?.toLowerCase()?.includes(search?.toLowerCase()) &&
          list?.news_category_id == Number(selected)
      );
      setFilteredNews(newNews);
    }
  }, [search, news, selected, news_category]);

  return (
    <>
      <SecondaryNav
        category={news_category}
        setSelected={setSelected}
        selected={selected}
        setSearch={setSearch}
      />
      <section className="all_news">
        <div className="container">
          {news_loading || news_category_loading ? (
            <Box display="flex" justifyContent="center" height="60vh" alignItems="center">
              <CircularProgress size={24} />
            </Box>
          ) : (
            <div className="row">
              {filteredNews?.length > 0 ? (
                filteredNews?.map((item) => (
                  <NewsCard key={item.id} news={item} linkUrl={`/news/${item?.slug}`} />
                ))
              ) : (
                <div className="col-md-12 mt-5 mb-5">
                  <h3 className="text-center">No news available</h3>
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
