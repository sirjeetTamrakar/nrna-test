import { Box, Grid } from '@mui/material';
import CustomAutoComplete from 'components/common/Form/CustomAutoComplete';
import CustomInput from 'components/common/Form/CustomInput';
import { useForm } from 'react-hook-form';
import { useStyles } from './styles';

const OurTeamForm = () => {
  const classes = useStyles();
  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
    clearErrors
  } = useForm({});
  console.log('watch', watch());
  const members = [
    {
      label: 'Q',
      value: 'q'
    },
    { label: 'Murr', value: 'murr' },
    { label: 'Joe', value: 'joe' }
  ];
  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <CustomAutoComplete name="member" label="Member" options={members} required />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="designation" label="Designation" required />
        </Grid>
        <Grid item sm={6}>
          <CustomInput name="order" label="Order" required />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurTeamForm;
