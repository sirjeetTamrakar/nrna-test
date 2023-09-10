import { Box, Grid } from '@mui/material';
import CustomAutoComplete from 'components/common/Form/CustomAutoComplete';
import CustomInput from 'components/common/Form/CustomInput';
import { useSelector } from 'react-redux';
import { useStyles } from './styles';

const CandidateForm = () => {
  const classes = useStyles();

  const { users } = useSelector((state) => state.user);

  const createdByUsers = users?.data?.map((item) => ({
    label: item?.name,
    value: item?.id
  }));

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <CustomAutoComplete
            name="member_id"
            label="Member"
            options={createdByUsers || []}
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

export default CandidateForm;
