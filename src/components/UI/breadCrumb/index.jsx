import { NavigateNext } from '@mui/icons-material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
// import SearchBar from '../SearchBar';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './styles';

// Actual Component (item name --> item behind this arrow(>))
const BreadCrumb = ({ itemName, page, handleButton, handleSearch, buttonTitle }) => {
  const classes = useStyles();

  return (
    <div className={classes.main} role="presentation">
      <div className={classes.wrap}>
        <div>
          <Typography className={classes.breadcrumbHeading}>{page}</Typography>
          <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/" className={classes.breadcrumbItem}>
              Home
            </Link>
            {itemName && <Typography className={classes.breadcrumbItem}>{itemName}</Typography>}
          </Breadcrumbs>
        </div>
        <div className={classes.rightWrap}>
          {/* {handleSearch && <SearchBar handleSearch={handleSearch} />} */}
          {handleButton && (
            <Button
              variant="contained"
              className={classes.btnColor}
              onClick={handleButton && handleButton}>
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
