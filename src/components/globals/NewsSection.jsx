import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import NewsCard from './NewsCard';

const NewsSection = ({ image, linkUrl, title = 'News', about, data, loading }) => {
  return (
    <section className="about" id="about_main">
      <div className="container">
        <div>
          <div className="" id="about-section">
            <div className="about_title">{title}</div>

            <Grid container spacing={0}>
              {data?.data?.slice(0, 8)?.map((item) => (
                <Grid
                  key={item.id}
                  item
                  className="col-12 col-sm-6 col-sm-6 col-md-4 col-lg-3 news_card_mobile">
                  <NewsCard
                    gridLayout
                    news={item}
                    image={item?.feature_image}
                    title={item?.title}
                    excerpt={item?.excerpt}
                    author={item?.created_by?.full_name}
                    featuredTitle={'News'}
                    linkUrl={`/news/${item?.slug}`}
                    belowNews
                  />
                </Grid>
              ))}
            </Grid>
            <Link to={linkUrl || `/news`} className="view_more">
              View More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
