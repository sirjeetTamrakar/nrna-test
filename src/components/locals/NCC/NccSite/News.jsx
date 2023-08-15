import CandidateImage1 from 'assets/images/candidate1.png';
import CandidateImage2 from 'assets/images/candidate2.png';
import CandidateImage3 from 'assets/images/candidate3.png';
import NewsCard from 'components/globals/NewsCard';
import { useParams } from 'react-router-dom';

const News = () => {
  const news = [
    {
      id: '1',
      featureImage: CandidateImage1,
      name: 'John Doe',
      slug: 'first_news_slug',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',

      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 2,
      featureImage: CandidateImage2,
      name: 'Jason Momoa',
      slug: 'second_news_slug',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',

      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 3,
      featureImage: CandidateImage3,
      name: 'Chris Bumsterd',
      slug: 'third_news_slug',
      title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',

      excerpt:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ];

  const { ncc } = useParams();
  return (
    <div className="main_content">
      <section className="all_events">
        <div className="all_events_title">News</div>
        <div className="container">
          <div className="row">
            {news.length > 0 ? (
              news.map((newsItem) => (
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
