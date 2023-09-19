import NewsCard from 'components/globals/NewsCard';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getAllNews, getNewsCategory } from 'redux/homepage/actions';
import SecondaryNav from './SecondaryNav';

const News = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  console.log({ location });

  const { user } = useSelector((state) => state.auth);
  const { news, news_loading, news_category, news_category_loading } = useSelector(
    (state) => state.homepage
  );
  const [filteredNews, setFilteredNews] = useState();
  const [selected, setSelected] = useState(
    location?.state ? location?.state : news_category?.[0]?.id
  );
  const [search, setSearch] = useState('');
  console.log('dsadddddddcxx', { filteredNews });
  useEffect(() => {
    dispatch(getAllNews({ type: 'ncc', id: user?.id }));
    dispatch(getNewsCategory());
  }, []);

  useEffect(() => {
    if (news) {
      const newNews = news?.data?.filter(
        (list) =>
          list?.title?.toLowerCase()?.includes(search?.toLowerCase()) &&
          list?.news_category_id == Number(selected)
      );
      setFilteredNews(newNews);
    }
  }, [search, news, selected, news_category]);

  const { ncc } = useParams();
  console.log('cxcxcxcxcxcx', { ncc });
  return (
    <>
      <SecondaryNav
        category={news_category}
        setSelected={setSelected}
        selected={selected}
        setSearch={setSearch}
        id={ncc}
      />
      <div className="main_content">
        <section className="all_events">
          <div className="all_events_title">News</div>
          <div className="container">
            <div className="row">
              {filteredNews?.length > 0 ? (
                filteredNews?.map((newsItem) => (
                  <NewsCard
                    key={newsItem.id}
                    news={newsItem}
                    linkUrl={`/ncc/${ncc}/news/${newsItem?.slug}`}
                  />
                ))
              ) : (
                <div className="col-md-12 mt-5 mb-5">
                  <h3 className="text-center">No news available.</h3>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default News;
