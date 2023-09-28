import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSurvey } from '../redux/actions';
import NewsForm from './Form';
import { useStyles } from './styles';
import { editValidationSchema } from './ValidationSchema';

const EditForm = ({ detail, handleClose }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { update_survey_loading } = useSelector((state) => state.question);
  const { user } = useSelector((state) => state.auth);
  const [typeData, setTypeData] = useState();

  const onSubmit = (data) => {
    console.log('ssssssssdd', { data });

    dispatch(updateSurvey({ ...data, _method: 'PUT' }, detail?.slug, handleClose));
  };
  // useEffect(() => {
  //   if (user?.role_name == Roles?.Member) {
  //     setTypeData({ type: 'member', id: user?.id, page: 1, pagination_limit: 10 });
  //   } else if (user?.role_name == Roles?.NCC) {
  //     setTypeData({ type: 'ncc', id: user?.ncc?.id, page: 1, pagination_limit: 10 });
  //   }
  // }, []);

  return (
    <CustomForm onSubmit={onSubmit}>
      <NewsForm featureImage={detail?.feature_image} />
      <Box className={classes.footerRoot}>
        <CustomButton buttonName="Update" loading={update_survey_loading} />
      </Box>
    </CustomForm>
  );
};
const Edit = ({ data, handleClose }) => {
  const defaultValues = {
    title: data?.title,
    description: data?.description
  };

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
