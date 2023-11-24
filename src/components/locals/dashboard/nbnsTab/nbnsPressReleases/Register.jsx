import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postPressRelease } from '../redux/actions';
import Form from './Form';
import { useStyles } from './styles';
import { validationSchema } from './ValidationSchema';

const Register = ({ handleClose }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const defaultValues = {};
  const classes = useStyles();
  const { press_release_loading } = useSelector((state) => state.nbns);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('title', data?.title);
    formData.append('description', data?.description);
    formData.append('excerpt', data?.excerpt);

    if (data?.pressReleaseImage?.length > 0) {
      formData.append('pressReleaseImage', data?.pressReleaseImage?.[0]);
    }

    const typeData = { page: page + 1, pagination_limit: rowsPerPage };

    dispatch(postPressRelease(formData, handleClose, typeData));
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        resolver={useYupValidationResolver(validationSchema)}>
        <CustomForm onSubmit={onSubmit}>
          <Form />
          <Box className={classes.footerRoot}>
            <CustomButton buttonName="Submit" loading={press_release_loading} />
          </Box>
        </CustomForm>
      </CustomFormProvider>
    </>
  );
};

export default Register;
