import { Box, Container, TextField, Typography } from '@mui/material';
import { useStyles } from './styles';

const SecondaryNav = ({ category, selected, setSelected, setSearch }) => {
  const classes = useStyles();

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
  return (
    <Box className={classes.root}>
      <Container>
        <Box sx={{ padding: '10px 0px' }} className={classes.header}>
          <Typography variant="h5" className={classes.title}>
            News
          </Typography>
          <TextField placeholder="Search" name="search" onChange={handleSearch} />
        </Box>
        <ul className={classes.list}>
          {category?.map((list, index) => (
            <li className={checkActive(list?.id)} key={index} onClick={() => setSelected(list?.id)}>
              {list?.title}
            </li>
          ))}
        </ul>
      </Container>
    </Box>
  );
};

export default SecondaryNav;
