import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import { useDispatch } from 'react-redux';
import NCCForm from './Form';
import { getNCC, postNCC } from './redux/actions';
import { useStyles } from './styles';

const Register = ({ handleClose }) => {
  const dispatch = useDispatch();
  const defaultValues = {};
  const classes = useStyles();

  const refetch = () => {
    dispatch(getNCC());
  };
  const onSubmit = (data) => {
    console.log('data', data);
    const formdata = new FormData();
    console.log('formdata', formdata);

    formdata.append('country_name', data?.country_name);

    if (data?.logo?.length > 0) {
      formdata.append('logo', data?.logo[0]);
    }
    console.log({ data });
    dispatch(postNCC(formdata, refetch));
    handleClose();
    // dispatch(postSiteSettings(data));
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        // resolver={useYupValidationResolver(validationSchema)}
      >
        <CustomForm onSubmit={onSubmit}>
          <NCCForm />
          <Box className={classes.footerRoot}>
            <CustomButton buttonName="Create NCC" loading={false} />
          </Box>
        </CustomForm>
      </CustomFormProvider>
    </>
  );
};

export default Register;
