import { Box, Grid } from '@mui/material';
import CustomAutoComplete from 'components/common/Form/CustomAutoComplete';
import CustomInput from 'components/common/Form/CustomInput';
import { useStyles } from './styles';

const MemberForm = () => {
  const classes = useStyles();
  const countries = [
    {
      label: 'Nepal',
      value: 'Nepal'
    },
    { label: 'United Kingdom', value: 'uk' }
  ];
  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <CustomInput name="name" label="Name" required />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="email" type="email" label="Email" required />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="phone" label="Phone" type="number" />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="city" label="City" />
        </Grid>
        <Grid item sm={6}>
          <CustomAutoComplete
            name="country_of_residence"
            label="Country of Residence"
            options={countries}
            required
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MemberForm;
