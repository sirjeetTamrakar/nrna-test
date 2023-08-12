/* Build in libraries */
import useStyles from './styles';

/* Third party libraries */
import { ChevronRightOutlined } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const classes = useStyles();
  const location = useLocation();
  const locationArray = location.pathname.split('/');
  locationArray.splice(0, 2);

  const pages = [];

  let pathConstruct = '/';
  locationArray.forEach((loc, index) => {
    pathConstruct += '/' + loc;
    pages.push({ name: loc, path: pathConstruct });
  });

  return (
    <>
      <nav aria-label="Breadcrumb" className={classes.navWrapper}>
        <ol>
          <li>
            <div>
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <span className="text">Home</span>
              </Link>
            </div>
          </li>
          {pages.map((page, index) => {
            if (pages.length === index + 1) {
              return (
                <li key={index}>
                  <div className="flex items-center">
                    <ChevronRightOutlined />
                    <span className="lastElement">{page.name}</span>
                  </div>
                </li>
              );
            }
            return (
              <li key={index}>
                <div>
                  <ChevronRightOutlined ml={2} />
                  <Link to={page.path} style={{ textDecoration: 'none' }}>
                    <span className="text">{page.name}</span>
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
