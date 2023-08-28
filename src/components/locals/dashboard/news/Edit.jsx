import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import { useDispatch } from 'react-redux';
import NewsForm from './Form';
import { getNews, updateNews } from './redux/actions';
import { useStyles } from './styles';

const EditForm = ({ slug, handleClose }) => {
  console.log('sluggggxxx', { slug });
  const dispatch = useDispatch();
  const classes = useStyles();

  const refetch = () => {
    dispatch(getNews());
  };

  const onSubmit = (data) => {
    console.log('dssssssataxxxx', data);
    const formdata = new FormData();
    console.log('formdata', formdata);

    formdata.append('title', data?.title);
    formdata.append('description', data?.description);
    formdata.append('status', data?.status);
    formdata.append('created_by', data?.created_by);
    formdata.append('status', 'active');
    formdata.append('_method', 'PUT');
    if (data?.feature_image?.length > 0) {
      formdata.append('feature_image', data?.feature_image?.[0]);
    }
    console.log({ data });
    // dispatch(updateNews({ ...formdata, _method: 'PUT' }, data?.slug));
    dispatch(updateNews(formdata, data?.slug, refetch));
    handleClose();
  };

  return (
    <CustomForm onSubmit={onSubmit}>
      <NewsForm />
      <Box className={classes.footerRoot}>
        <CustomButton buttonName="Update" loading={false} />
      </Box>
    </CustomForm>
  );
};
const Edit = ({ data, handleClose }) => {
  const defaultValues = { ...data };
  console.log('dataaaaaaa', { data });

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
