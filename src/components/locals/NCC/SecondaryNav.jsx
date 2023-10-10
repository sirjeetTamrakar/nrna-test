import { Box, Container, Typography } from '@mui/material';
import { useStyles } from './styles';

const SecondaryNav = ({ category, selected, setSelected }) => {
  const classes = useStyles();

  const checkActive = (slug) => {
    if (slug === selected) {
      return 'active';
    } else return '';
  };
  const handleSetSelected = (slug) => {
    setSelected(slug);
    // navigate(`/nrna/business`, { state: slug });
  };
  return (
    <Box className={classes.root}>
      <Container>
        <Box paddingY={2}>
          <Typography variant="h5" className={classes.title}>
            NCC
          </Typography>
        </Box>
        <ul className={classes.list}>
          <li className={selected === 'ALL' && 'active'} onClick={() => handleSetSelected('ALL')}>
            Home
          </li>
          {category?.map((list, index) => (
            <li
              className={checkActive(list?.slug)}
              key={index}
              onClick={() => handleSetSelected(list?.slug)}>
              {list?.title}
            </li>
          ))}
        </ul>
      </Container>
    </Box>
  );
};

export default SecondaryNav;
