import React from 'react';
import useStyles from './styles';

function MainAreaLayout({ children }) {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}

export default MainAreaLayout;
