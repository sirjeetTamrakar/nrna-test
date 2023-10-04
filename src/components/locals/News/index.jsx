import { Button } from '@mui/base';
import { Box, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid';
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
  const [newsLimit, setNewsLimit] = useState(5);

  const [selected, setSelected] = useState();
  console.log('ww------', { filteredNews });

  useEffect(() => {
    setSelected(location?.state ? location?.state : selected ? selected : 'ALL');
  }, [location?.state, news_category]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    const data = {
      limit: newsLimit
    };
    dispatch(getAllNews(data));
    dispatch(getNewsCategory());
  }, [newsLimit]);

  console.log({ selected });

  useEffect(() => {
    if (news) {
      const allNewNews = news?.data?.filter((list) =>
        list?.title?.toLowerCase()?.includes(search?.toLowerCase())
      );
      setAllFilteredNews(allNewNews);
    }
  }, [search, news]);

  useEffect(() => {
    if (news) {
      const newNews = news?.data?.filter(
        (list) =>
          list?.title?.toLowerCase()?.includes(search?.toLowerCase()) &&
          list?.news_category_id == Number(selected)
      );
      setFilteredNews(selected === 'ALL' ? allFilteredNews : newNews);
    }
  }, [search, news, selected, news_category]);

  const handleShowMore = () => {
    setNewsLimit(newsLimit + 4);
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
      <section className="all_news">
        <div className="container">
          {news_loading || news_category_loading ? (
            <Box display="flex" justifyContent="center" height="60vh" alignItems="center">
              <CircularProgress size={24} />
            </Box>
          ) : (
            <>
              {/* <div className="row">
                {filteredNews?.length > 0 ? (
                  filteredNews?.map((item) => (
                    <NewsCard key={item.id} news={item} linkUrl={`/news/${item?.slug}`} />
                  ))
                ) : (
                  <div className="col-md-12 mt-5 mb-5">
                    <h3 className="text-center">No news available</h3>
                  </div>
                )}
              </div> */}
              <div className="row">
                {filteredNews?.length > 0 ? (
                  <>
                    <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
                      <Grid item sm={6}>
                        {filteredNews?.slice(0, 1)?.map((item) => (
                          <NewsCard
                            gridOne
                            gridLayout
                            key={item.id}
                            news={item}
                            linkUrl={`/news/${item?.slug}`}
                          />
                        ))}
                      </Grid>
                      <Grid item sm={6}>
                        <Grid container spacing={2} item>
                          <Grid item sm={6}>
                            {filteredNews?.slice(1, 2)?.map((item) => (
                              <NewsCard
                                gridLayout
                                key={item.id}
                                news={item}
                                linkUrl={`/news/${item?.slug}`}
                              />
                            ))}
                          </Grid>
                          <Grid item sm={6}>
                            {filteredNews?.slice(2, 3)?.map((item) => (
                              <NewsCard
                                gridLayout
                                key={item.id}
                                news={item}
                                linkUrl={`/news/${item?.slug}`}
                              />
                            ))}
                          </Grid>
                          <Grid item sm={6}>
                            {filteredNews?.slice(3, 4)?.map((item) => (
                              <NewsCard
                                gridLayout
                                key={item.id}
                                news={item}
                                linkUrl={`/news/${item?.slug}`}
                              />
                            ))}
                          </Grid>
                          <Grid item sm={6}>
                            {filteredNews?.slice(4, 5)?.map((item) => (
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

                    {filteredNews?.slice(5)?.map((item) => (
                      <NewsCard key={item.id} news={item} linkUrl={`/news/${item?.slug}`} />
                    ))}
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
                  </>
                ) : (
                  <div className="col-md-12 mt-5 mb-5">
                    <h3 className="text-center">No news available</h3>
                  </div>
                )}
              </div>
              {/* <div className="row">
                <div className="col-md-12 text-center">
                  <ul className="pagination">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <li
                        key={index}
                        className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                          {index + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default News;
