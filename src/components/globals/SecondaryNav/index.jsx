import { Box, Container, Typography } from '@mui/material';
import { useStyles } from './styles';

const SecondaryNav = ({ options, selected, title, color }) => {
  const classes = useStyles();
  const checkActive = (slug) => {
    if (selected) {
      if (slug === selected) {
        return 'active';
      } else return '';
    } else if (slug === options?.value) {
      return 'active';
    } else {
      return '';
    }
  };
  return (
    <Box className={classes.root} sx={color && { backgroundColor: color }}>
      <Container>
        {title && (
          <Box className={classes.header}>
            <Typography variant="h5" className={classes.title}>
              {title}
            </Typography>
          </Box>
        )}
        <ul className={classes.list}>
          {options?.map((list, index) => (
            <li className={checkActive(list?.value)} key={index} onClick={list?.clickFunction}>
              {list?.title}
            </li>
          ))}
        </ul>
      </Container>
    </Box>
  );
};

export default SecondaryNav;
