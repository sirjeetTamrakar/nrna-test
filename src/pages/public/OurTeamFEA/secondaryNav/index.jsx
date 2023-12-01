import { Box, Container } from '@mui/material';
import { useStyles } from './styles';

const SecondaryNav = ({ departments, selected, setSelected, setSearch }) => {
  const classes = useStyles();

  console.log({ departments });

  const checkActive = (slug) => {
    if (selected) {
      if (slug === selected) {
        return 'active';
      } else return '';
    } else if (slug === departments?.[0]?.id) {
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
  };
  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.header}>
          {/* <Typography variant="h5" className={classes.title}>
            Our Team
          </Typography>
          <TextField placeholder="Search" name="search" onChange={handleSearch} /> */}
        </Box>
        <ul className={classes.list}>
          {departments?.map((list, index) => (
            <li
              style={{ color: 'black' }}
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
