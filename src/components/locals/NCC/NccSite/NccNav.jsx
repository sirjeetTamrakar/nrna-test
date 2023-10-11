import { Box, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';

const NccNav = ({ category, selected, setSelected, setSearch }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  console.log({ category });

  const checkActive = (slug) => {
    if (selected) {
      if (slug === selected) {
        return 'active';
      } else return '';
    } else if (slug === category?.[0]?.value) {
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

    slug !== 'home' && navigate(`/nrna/ncc/${slug}`, { state: slug });
    slug === 'home' && navigate(`/nrna/ncc`, { state: slug });
  };
  return (
    <Box className={classes.root}>
      <Container>
        <Box sx={{ padding: '10px 0px' }} className={classes.header}>
          <Typography variant="h5" className={classes.title}>
            Get to know about NCC
          </Typography>
          {/* <TextField placeholder="Search" name="search" onChange={handleSearch} /> */}
        </Box>
        <ul className={classes.list}>
          <li className={selected === 'home' && 'active'} onClick={() => handleSetSelected('home')}>
            Home
            {/* {JSON.stringify({ selected })} */}
          </li>
          {category?.map((list, index) => (
            <li
              className={checkActive(list?.value)}
              key={index}
              onClick={() => handleSetSelected(list?.value)}>
              {list?.title}
            </li>
          ))}
        </ul>
      </Container>
    </Box>
  );
};

export default NccNav;
