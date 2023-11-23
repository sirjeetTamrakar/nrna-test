import { Box, Grid } from '@mui/material';
import { CustomMultipleSelect } from 'components/common/CustomSelects/CustomMultipleSelect';
import CustomAutoComplete from 'components/common/Form/CustomAutoComplete';
import FileUploader from 'components/common/Form/CustomFileUpload';
import CustomInput from 'components/common/Form/CustomInput';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getRegion } from '../settings/region/redux/actions';
import { getAllUsers } from '../userManagement/redux/actions';
import { useStyles } from './styles';

const NCCForm = ({ logo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { countries_list } = useSelector((state) => state.ncc);
  const { users } = useSelector((state) => state.user);
  const { regionData } = useSelector((state) => state.region);

  const {
    control,
    watch,
    formState: { errors }
  } = useFormContext();

  console.log({ watch: watch() });

  const countryList = countries_list?.map((item, index) => ({
    label: item,
    value: item
  }));

  const createdByUsers = users?.data?.map((item) => ({
    label: item?.full_name ? item?.full_name : item?.username,
    value: item?.id
  }));

  const allRegions = regionData?.data?.map((item) => ({
    label: item?.name,
    value: item?.id
  }));

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getRegion());
  }, []);

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <CustomAutoComplete
            placeholder="Country Name"
            name="country_name"
            label="Country Name"
            options={countryList ?? []}
            required
          />
        </Grid>
        <Grid item sm={9}>
          <CustomAutoComplete
            placeholder="Assign NCC admin"
            name="admin_id"
            label="Assign NCC admin"
            options={createdByUsers ?? []}
            required
            key={createdByUsers}
          />
        </Grid>
        <Grid item sm={3}>
          <CustomInput name="color" label="Navbar color" type="color" required />
        </Grid>
        <Grid item sm={12}>
          <CustomMultipleSelect
            placeholder="Select Region"
            name="regions"
            title="Select Region"
            data={allRegions ?? []}
            control={control}
            errors={errors}
          />
        </Grid>
        <Grid item sm={12}>
          <FileUploader
            title="NCC Logo"
            name="logo"
            label="Select Logo"
            widthFull
            required
            image={logo}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default NCCForm;
