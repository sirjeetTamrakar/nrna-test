import useStyles from '../../styles';
import BasicTabs from './Tabs';

const SiteSettings = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BasicTabs />
    </div>
  );
};

export default SiteSettings;
