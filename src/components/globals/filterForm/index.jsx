// this will be the componene for filterForm
import { Box } from '@mui/system';
import React, { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Button, TextField } from '@mui/material';
import useStyles from './styles';
import { FormattedMessage } from 'react-intl';

// const Example = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />;
// };

const Filterform = () => {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(new Date('2014-08-18T21:11:54'));
  const [endDate, setEndDate] = useState(new Date('2014-08-18T21:11:54'));

  return (
    <div className={classes.root}>
      <div className={classes.optionWrap}>
        <Box className={classes.dateWrapper}>
          <DesktopDatePicker
            inputFormat="MM/DD/YYYY"
            value={startDate}
            onChange={(value) => setStartDate(value)}
            renderInput={(params) => <TextField {...params} />}
          />
          <div className={classes.hyphen}>-</div>
          <DesktopDatePicker
            inputFormat="MM/DD/YYYY"
            value={endDate}
            onChange={(value) => setEndDate(value)}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
        <select className={classes.select}>
          <option>Type of Contract</option>
          <option value="">Contract of Employment</option>
          <option value="">Management Contract</option>
          <option value="">Dividend</option>
        </select>
        <select className={classes.select}>
          <option>Visibility</option>
          <option value="">Contract of Employment</option>
          <option value="">Management Contract</option>
          <option value="">Dividend</option>
        </select>
        <select className={classes.select}>
          <option>Status</option>
          <option value="">Contract of Employment</option>
          <option value="">Management Contract</option>
          <option value="">Dividend</option>
        </select>
      </div>
      <Button variant="outlined">
        <FormattedMessage id="Search" defaultMessage="Search" />
      </Button>
    </div>
  );
};

export default Filterform;
