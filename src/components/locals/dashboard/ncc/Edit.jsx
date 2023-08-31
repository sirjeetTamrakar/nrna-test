import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useDispatch } from 'react-redux';
import MemberForm from './Form';
import { editValidationSchema } from './ValidationSchema';
import { updateNCC } from './redux/actions';
import { useStyles } from './styles';

const EditForm = ({ handleClose, detail }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('country_name', data?.country_name);
    if (data?.logo?.length > 0) {
      formData.append('logo', data?.logo[0]);
    }
    dispatch(updateNCC(formData, detail?.slug, handleClose));
  };

  return (
    <CustomForm onSubmit={onSubmit}>
      <MemberForm logo={detail?.logo} />
      <Box className={classes.footerRoot}>
        <CustomButton buttonName="Update" loading={false} />
      </Box>
    </CustomForm>
  );
};
const Edit = ({ data, handleClose }) => {
  const defaultValues = { country_name: data?.country_name };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(editValidationSchema)}>
        <EditForm detail={data} handleClose={handleClose} />
      </CustomFormProvider>
    </>
  );
};

export default Edit;
