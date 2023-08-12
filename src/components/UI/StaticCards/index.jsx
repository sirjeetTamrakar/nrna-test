/* Build in libraries */
import React from 'react';
import PropTypes from 'prop-types';

/* Third party libraries */
import { CardContent, Card, Typography } from '@mui/material';
import { Box } from '@mui/system';

/* Style */
import Styles from './styles';

function StaticCards({ icon, title, count, description }) {
  const classes = Styles();
  return (
    <>
      <Card className={classes.cardWrapper}>
        <CardContent>
          <Box display="flex" columnGap="2rem" alignItems="center">
            {/* {icon} */}
            <Box className="icon">{icon}</Box>
            <Box>
              <Typography
                sx={{ fontWeight: 'bold', textTransform: 'capitalize', fontSize: '14px' }}
                variant="h6"
                color="#4C4B63">
                {title}
              </Typography>
              <Typography color="#4559BD" className={count ? 'number underline' : 'subTitle'}>
                {count ?? description}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

StaticCards.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes?.string,
  description: PropTypes?.string
  //   icon: React.PropTypes.node
};

export default StaticCards;
