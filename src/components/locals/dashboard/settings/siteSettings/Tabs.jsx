import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import About from './about';
import HomeData from './banner';
import Contact from './contact';
import SettingsData from './settingsData';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const BasicTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Settings Data" {...a11yProps(0)} />
          <Tab label="About" {...a11yProps(1)} />
          <Tab label="Contact" {...a11yProps(2)} />
          <Tab label="Home Data" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <SettingsData />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <About />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Contact />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <HomeData />
      </CustomTabPanel>
    </Box>
  );
};

export default BasicTabs;
