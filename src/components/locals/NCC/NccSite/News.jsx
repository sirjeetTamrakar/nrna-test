import NewsCard from 'components/globals/NewsCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllNews } from 'redux/homepage/actions';

const News = () => {
  const dispatch = useDispatch();
  // const news = [
  //   {
  //     id: '1',
  //     featureImage: CandidateImage1,
  //     name: 'John Doe',
  //     slug: 'first_news_slug',
  //     title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',

  //     excerpt:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  //   },
  //   {
  //     id: 2,
  //     featureImage: CandidateImage2,
  //     name: 'Jason Momoa',
  //     slug: 'second_news_slug',
  //     title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',

  //     excerpt:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  //   },
  //   {
  //     id: 3,
  //     featureImage: CandidateImage3,
  //     name: 'Chris Bumsterd',
  //     slug: 'third_news_slug',
  //     title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',

  //     excerpt:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  //   }
  // ];

  const { user } = useSelector((state) => state.auth);
  const { news } = useSelector((state) => state.homepage);
  console.log('dsaddddddd', { news });
  useEffect(() => {
    dispatch(getAllNews({ type: 'ncc', id: user?.id }));
  }, []);

  const { ncc } = useParams();
  return (
    <div className="main_content">
      <section className="all_events">
        <div className="all_events_title">News</div>
        <div className="container">
          <div className="row">
            {news?.data?.length > 0 ? (
              news?.data.map((newsItem) => (
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
  );
};

export default News;
