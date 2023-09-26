import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useStyles } from './styles';

const SecondaryNav = ({ options, selected, title, color, setSelected }) => {
  const classes = useStyles();

  const [localSelected, setLocalSelected] = useState(selected);

  useEffect(() => {
    setLocalSelected(selected);
  }, [selected]);

  const handleOptionClick = (value) => {
    console.log('Clicked value:', value);

    setSelected(value);
  };
  const checkActive = (slug) => {
    if (localSelected) {
      if (slug === localSelected) {
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
            <li
              className={checkActive(list?.value)}
              key={index}
              onClick={() => {
                handleOptionClick(list.value);
                list.clickFunction();
              }}>
              {list?.title}
            </li>
          ))}
        </ul>
      </Container>
    </Box>
  );
};

export default SecondaryNav;
