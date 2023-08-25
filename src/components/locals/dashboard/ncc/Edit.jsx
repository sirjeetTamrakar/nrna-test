import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch } from 'react-redux';
import MemberForm from './Form';
import { getNCC, updateNCC } from './redux/actions';
import { useStyles } from './styles';
import { validationSchema } from './ValidationSchema';

const EditForm = ({ handleClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const refetch = () => {
    dispatch(getNCC());
  };
  const onSubmit = (data) => {
    console.log('dssssssata', data);
    const formdata = new FormData();
    console.log('formdata', formdata);

    formdata.append('country_name', data?.country_name);

    if (data?.logo?.length > 0) {
      formdata.append('logo', data?.logo[0]);
    }
    console.log({ data });
    dispatch(updateNCC(formdata, refetch));
    handleClose();
    // dispatch(postSiteSettings(data));
  };

  return (
    <CustomForm onSubmit={onSubmit}>
      <MemberForm />
      <Box className={classes.footerRoot}>
        <CustomButton buttonName="Update" loading={false} />
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
        resolver={useYupValidationResolver(validationSchema)}>
        <EditForm handleClose={handleClose} />
      </CustomFormProvider>
    </>
  );
};

export default Edit;
