import { NavigateNext } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import useStyles from './styles';

// Actual Component (item name --> item behind this arrow(>))
const BreadCrumb = ({ itemName, page, handleButton, handleSearch, buttonTitle, type }) => {
  const classes = useStyles();

  return (
    <div className={classes.main} role="presentation">
      <div className={classes.wrap}>
        <div>
          <Typography className={classes.breadcrumbHeading}>{page}</Typography>
          <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/" className={classes.breadcrumbItem}>
              <FormattedMessage id="home" defaultMessage="Home" />
            </Link>
            {itemName && <Typography className={classes.breadcrumbItem}>{itemName}</Typography>}
          </Breadcrumbs>
        </div>
        <div className={classes.rightWrap}>
          {handleSearch && <SearchBar handleSearch={handleSearch} />}
          {handleButton && (
            <Button variant="contained" color="btnColor" onClick={handleButton && handleButton}>
              <AddIcon />
              {buttonTitle}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;

BreadCrumb.defaultProps = {
  itemName: 'Default',
  page: 'Test'
};
