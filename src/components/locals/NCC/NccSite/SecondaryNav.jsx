import { Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStyles } from '../styles';

const SecondaryNav = ({
  category,
  selected,
  setSelected,
  setSearch,
  id,
  news,
  events,
  business,
  teams,
  color
}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const checkActive = (slug) => {
    if (selected) {
      if (slug === selected) {
        return 'active';
      } else return '';
    } else if (slug === category?.[0]?.id) {
      return 'active';
    } else {
      return '';
    }
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSetSelected = (slug) => {
    setSelected(slug);
    news && navigate(`/ncc/${id}/news`, { state: slug });
    events && navigate(`/ncc/${id}/events`, { state: slug });
    teams && navigate(`/ncc/${id}/committee`, { state: slug });
    business && navigate(`/ncc/${id}/business`, { state: slug });
  };
  return (
    <Box className={classes.root} sx={color && { backgroundColor: color }}>
      <Container>
        <Box sx={{ padding: '10px 0px' }} className={classes.header}>
          {/* <Typography variant="h5" className={classes.title}>
            News
          </Typography> */}
          {/* {setSearch && <TextField placeholder="Search" name="search" onChange={handleSearch} />} */}
        </Box>
        <ul className={classes.list}>
          {!teams && (
            <li className={selected === 'ALL' && 'active'} onClick={() => handleSetSelected('ALL')}>
              All
              {/* {JSON.stringify({ selected })} */}
            </li>
          )}

          {category?.map((list, index) => (
            <li
              className={checkActive(list?.id)}
              key={index}
              onClick={() => handleSetSelected(list?.id)}>
              {list?.title}
            </li>
          ))}
        </ul>
      </Container>
    </Box>
  );
};

export default SecondaryNav;
