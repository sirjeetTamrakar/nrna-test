import { Roles } from 'constants/RoleConstant';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from '../../styles';
import { getSiteSettings } from '../redux/actions';
import BasicTabs from './Tabs';

const SiteSettings = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user, admin_ncc_id_details, admin_role_details } = useSelector((state) => state.auth);

  useEffect(() => {
    let typeData;
    if (user) {
      if (user?.role_name == Roles?.NCC) {
        typeData = { settingable_type: user?.role_name, settingable_id: user?.ncc?.id };
      }
      if (user?.role_name == Roles?.SuperAdmin && admin_role_details === 'ncc') {
        typeData = { settingable_type: 'ncc', settingable_id: admin_ncc_id_details };
      }
      dispatch(getSiteSettings(typeData));
    }
  }, [user]);
  return (
    <div className={classes.root}>
      <BasicTabs />
    </div>
  );
};

export default SiteSettings;
