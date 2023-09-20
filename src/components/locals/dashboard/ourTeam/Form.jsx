import { Box, Grid } from '@mui/material';
import CustomAutoComplete from 'components/common/Form/CustomAutoComplete';
import CustomInput from 'components/common/Form/CustomInput';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';

const OurTeamForm = () => {
  const classes = useStyles();

  const { users } = useSelector((state) => state.user);
  const { departmentData } = useSelector((state) => state.department);

  const createdByUsers = users?.data?.map((item) => ({
    label: item?.full_name ? item?.full_name : item?.username,
    value: item?.id
  }));
  const department = departmentData?.data?.map((item) => ({
    label: item?.title,
    value: item?.id
  }));

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <CustomAutoComplete
            name="member_id"
            label="Member"
            options={createdByUsers || []}
            required
          />
        </Grid>
        <Grid item sm={6}>
          <CustomAutoComplete
            name="our_team_category_id"
            label="Department"
            options={department || []}
            required
          />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="designation" label="Designation" required />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="order" label="Order" required type="number" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurTeamForm;
