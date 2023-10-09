import { Button } from '@mui/base';
import { Box, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid';
import NewsCardOrderOne from 'components/globals/NewsCardOrderOne';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAllNews, getNewsCategory } from 'redux/homepage/actions';
import NewsCard from '../../globals/NewsCard';
import SecondaryNav from './SecondaryNav';

const News = () => {
  const location = useLocation();
  console.log({ location });

  const dispatch = useDispatch();
  const { news, news_loading, news_category, news_category_loading } = useSelector(
    (state) => state.homepage
  );

  const [filteredNews, setFilteredNews] = useState();
  const [allFilteredNews, setAllFilteredNews] = useState();
  const [newsLimit, setNewsLimit] = useState(11);

  const [selected, setSelected] = useState();
  console.log('ww------', { filteredNews });

  useEffect(() => {
    setSelected(location?.state ? location?.state : selected ? selected : 'ALL');
  }, [location?.state, news_category]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    if (selected === 'ALL') {
      const finalData = {
        limit: newsLimit,
        status: 1
      };
      dispatch(getAllNews(finalData));
    } else {
      const finalData = {
        limit: newsLimit,
        category_id: selected,
        status: 1
      };
      dispatch(getAllNews(finalData));
    }

    dispatch(getNewsCategory());
  }, [newsLimit, selected]);

  console.log({ selected });

  // useEffect(() => {
  //   if (news) {
  //     const allNewNews = news?.data?.filter((list) =>
  //       list?.title?.toLowerCase()?.includes(search?.toLowerCase())
  //     );
  //     setAllFilteredNews(allNewNews);
  //   }
  // }, [search, news]);

  useEffect(() => {
    if (news) {
      const newNews = news?.data?.filter(
        (list) =>
          list?.title?.toLowerCase()?.includes(search?.toLowerCase()) &&
          list?.news_category_id == Number(selected)
      );
      setFilteredNews(selected === 'ALL' ? news?.data : newNews);
    }
  }, [search, news, selected, news_category]);

  const handleShowMore = () => {
    setNewsLimit((prev) => prev + 4);
  };
  console.log({ news });

  return (
    <>
      <SecondaryNav
        category={news_category}
        setSelected={setSelected}
        selected={selected}
        setSearch={setSearch}
      />
      <section className="all_news" style={{ minHeight: '100vh' }}>
        <div className="container">
          <div className="row">
            {filteredNews?.length > 0 ? (
              <>
                <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
                  <Grid item sm={5}>
                    {filteredNews?.slice(0, 1)?.map((item) => (
                      <NewsCardOrderOne
                        gridOne
                        gridLayout
                        key={item.id}
                        news={item}
                        linkUrl={`/news/${item?.slug}`}
                      />
                    ))}
                  </Grid>
                  <Grid item sm={7}>
                    <Grid container spacing={2} item>
                      <Grid item sm={4}>
                        {filteredNews?.slice(1, 2)?.map((item) => (
                          <NewsCard
                            gridLayout
                            key={item.id}
                            news={item}
                            linkUrl={`/news/${item?.slug}`}
                          />
                        ))}
                      </Grid>
                      <Grid item sm={4}>
                        {filteredNews?.slice(2, 3)?.map((item) => (
                          <NewsCard
                            gridLayout
                            key={item.id}
                            news={item}
                            linkUrl={`/news/${item?.slug}`}
                          />
                        ))}
                      </Grid>
                      <Grid item sm={4}>
                        {filteredNews?.slice(3, 4)?.map((item) => (
                          <NewsCard
                            gridLayout
                            key={item.id}
                            news={item}
                            linkUrl={`/news/${item?.slug}`}
                          />
                        ))}
                      </Grid>
                      <Grid item sm={4}>
                        {filteredNews?.slice(4, 5)?.map((item) => (
                          <NewsCard
                            gridLayout
                            key={item.id}
                            news={item}
                            linkUrl={`/news/${item?.slug}`}
                          />
                        ))}
                      </Grid>
                      <Grid item sm={4}>
                        {filteredNews?.slice(5, 6)?.map((item) => (
                          <NewsCard
                            gridLayout
                            key={item.id}
                            news={item}
                            linkUrl={`/news/${item?.slug}`}
                          />
                        ))}
                      </Grid>
                      <Grid item sm={4}>
                        {filteredNews?.slice(6, 7)?.map((item) => (
                          <NewsCard
                            gridLayout
                            key={item.id}
                            news={item}
                            linkUrl={`/news/${item?.slug}`}
                          />
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                {filteredNews?.slice(7)?.map((item) => (
                  <NewsCard key={item.id} news={item} linkUrl={`/news/${item?.slug}`} belowNews />
                ))}
                {news?.meta?.to !== news?.meta?.total && !(news_loading || news_category_loading) && (
                  <div
                    style={{
                      marginTop: '20px',
                      marginBottom: '20px',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                    <Button
                      style={{
                        border: 'none',
                        backgroundColor: '#E1F5FF',
                        color: '#6F83CE',
                        padding: '10px 20px',
                        borderRadius: '4px'
                      }}
                      onClick={handleShowMore}>
                      Show More
                    </Button>
                  </div>
                )}
              </>
            ) : (
              ''
            )}
          </div>
          {news_loading || news_category_loading ? (
            <Box display="flex" justifyContent="center" alignItems="center">
              <CircularProgress size={24} />
            </Box>
          ) : (
            filteredNews?.length === 0 && (
              <div className="col-md-12 mt-5 mb-5">
                <h3 className="text-center">No news available</h3>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
};

export default News;
