import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch, useSelector } from 'react-redux';
import EventForm from './Form';
import { validationSchema } from './ValidationSchema';
import { postEvents } from './redux/actions';
import { useStyles } from './styles';

const Register = ({ handleClose }) => {
  const dispatch = useDispatch();
  const defaultValues = {};
  const classes = useStyles();
  const { events_loading } = useSelector((state) => state.events);

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append('title', data?.title);
    formData.append('description', data?.description);
    formData.append('status', 'active');
    formData.append('location', data?.location);
    formData.append('venue', data?.venue);
    formData.append('event_date', data?.event_date);
    formData.append('event_time', data?.event_time);
    formData.append('contact_email', data?.contact_email);
    formData.append('contact_phone', data?.contact_phone);
    formData.append('map_url', data?.map_url);

    if (data?.feature_image?.length > 0) {
      formData.append('feature_image', data?.feature_image?.[0]);
    }
    dispatch(postEvents(formData, handleClose));
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(validationSchema)}>
        <CustomForm onSubmit={onSubmit}>
          <EventForm />
          <Box className={classes.footerRoot}>
            <CustomButton buttonName="Submit" loading={events_loading} />
          </Box>
        </CustomForm>
      </CustomFormProvider>
    </>
  );
};

export default Register;
