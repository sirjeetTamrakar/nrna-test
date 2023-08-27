import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch } from 'react-redux';
import EventForm from './Form';
import { getEvents, postEvents } from './redux/actions';
import { useStyles } from './styles';
import { validationSchema } from './ValidationSchema';

const Register = ({ handleClose }) => {
  const dispatch = useDispatch();
  const defaultValues = {};
  const classes = useStyles();

  const refetch = () => {
    dispatch(getEvents());
  };

  const onSubmit = (data) => {
    console.log('dssssssata', data);
    const formdata = new FormData();
    console.log('formdata', formdata);

    formdata.append('title', data?.title);
    formdata.append('description', data?.description);
    formdata.append('status', 'active');
    formdata.append('location', data?.location);
    formdata.append('venue', data?.venue);
    formdata.append('event_date', data?.event_date);
    formdata.append('event_time', data?.event_time);
    formdata.append('contact_email', data?.contact_email);
    formdata.append('contact_phone', data?.contact_phone);
    formdata.append('map_url', data?.map_url);

    if (data?.feature_image?.length > 0) {
      formdata.append('feature_image', data?.feature_image?.[0]);
    }
    console.log({ data });
    dispatch(postEvents(formdata, refetch));
    handleClose();
    // alert('dsads');
    // dispatch(postSiteSettings(data));
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(validationSchema)}>
        <CustomForm onSubmit={onSubmit}>
          <EventForm />
          <Box className={classes.footerRoot}>
            <CustomButton buttonName="Submit" loading={false} />
          </Box>
        </CustomForm>
      </CustomFormProvider>
    </>
  );
};

export default Register;
