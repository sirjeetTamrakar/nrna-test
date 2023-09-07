import { Box, Container, Typography } from '@mui/material';
import { useStyles } from './styles';

const SecondaryNav = ({ category, selected, setSelected }) => {
  const classes = useStyles();

  const checkActive = (slug) => {
    if (slug === selected) {
      return 'active';
    } else return '';
  };
  return (
    <Box className={classes.root}>
      <Container>
        <Box paddingY={2}>
          <Typography variant="h5" className={classes.title}>
            Business
          </Typography>
        </Box>
        <ul className={classes.list}>
          {category?.map((list, index) => (
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
