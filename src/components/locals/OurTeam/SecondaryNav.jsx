import { Box, Container, TextField, Typography } from '@mui/material';
import { useStyles } from './styles';

const SecondaryNav = ({ departments, selected, setSelected, setSearch }) => {
  const classes = useStyles();

  const checkActive = (slug) => {
    if (slug === selected) {
      return 'active';
    } else return '';
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.header}>
          <Typography variant="h5" className={classes.title}>
            Our Team
          </Typography>
          <TextField placeholder="Search" name="search" onChange={handleSearch} />
        </Box>
        <ul className={classes.list}>
          {departments?.map((list, index) => (
            <li
              className={checkActive(list?.slug)}
              key={index}
              onClick={() => setSelected(list?.slug)}>
              {list?.title}
            </li>
          ))}
        </ul>
      </Container>
    </Box>
  );
};

export default SecondaryNav;
