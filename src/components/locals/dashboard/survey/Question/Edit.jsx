import { Box } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuestion } from '../redux/actions';
import QuestionForm from './Form';
import { useStyles } from './styles';

const EditForm = ({ handleClose, id }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { update_question_loading } = useSelector((state) => state.question);

  const onSubmit = (data) => {
    dispatch(updateQuestion(id, data, handleClose));
  };

  return (
    <CustomForm onSubmit={onSubmit}>
      <QuestionForm />
      <Box className={classes.footerRoot}>
        <CustomButton buttonName="Update" loading={update_question_loading} />
      </Box>
    </CustomForm>
  );
};
const Edit = ({ data, handleClose }) => {
  const defaultValues = {
    question: data?.question,
    options: data?.options?.map((item) => item?.option)
  };

  return (
    <>
      <CustomFormProvider
        defaultValues={defaultValues}
        // resolver={useYupValidationResolver(validationSchema)}
      >
        <EditForm handleClose={handleClose} id={data?.id} />
      </CustomFormProvider>
    </>
  );
};

export default Edit;
