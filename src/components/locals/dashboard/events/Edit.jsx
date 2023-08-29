import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import { useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import EventForm from './Form';
import { updateEvents } from './redux/actions';
import { useStyles } from './styles';

const EditForm = ({ slug, handleClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
    clearErrors
  } = useFormContext();

  console.log('watchnnnnni', watch());

  const { update_events_loading } = useSelector((state) => state.events);

  // const refetch = () => {
  //   dispatch(getEvents());
  // };

  const onSubmit = (data) => {
    console.log('dssssssata', data);
    const formdata = new FormData();
    console.log('formdata', formdata);

    formdata.append('title', data?.title);
    formdata.append('description', data?.description);
    formdata.append('status', data?.status);
    formdata.append('location', data?.location);
    formdata.append('venue', data?.venue);
    formdata.append('event_date', data?.event_date);
    formdata.append('event_time', data?.event_time);
    formdata.append('contact_email', data?.contact_email);
    formdata.append('contact_phone', data?.contact_phone);
    formdata.append('map_url', data?.map_url);
    formdata.append('status', 'active');

    formdata.append('_method', 'PUT');

    if (watch('feature_image') && typeof watch('feature_image') === 'object') {
      console.log({ filetype: typeof watch('feature_image') });
      if (data?.feature_image?.length > 0) {
        formdata.append('feature_image', data?.feature_image?.[0]);
      }
    }
    console.log({ data });
    dispatch(updateEvents(formdata, data?.slug, handleClose));
  };

  return (
    <CustomForm onSubmit={onSubmit}>
      <EventForm />
      <Box className={classes.footerRoot}>
        <CustomButton buttonName="Update" loading={update_events_loading} />
      </Box>
    </CustomForm>
  );
};
const Edit = ({ data, handleClose }) => {
  const defaultValues = { ...data };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        // resolver={useYupValidationResolver(validationSchema)}
      >
        <EditForm slug={data?.slug} handleClose={handleClose} />
      </CustomFormProvider>
    </>
  );
};

export default Edit;
