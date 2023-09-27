import { Box, Button, Grid, Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomModal from 'components/common/CustomModal/CustomModal';
import CustomAutoComplete from 'components/common/Form/CustomAutoComplete';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import CustomInput from 'components/common/Form/CustomInput';
import { getCountries } from 'components/locals/dashboard/ncc/redux/actions';
import { postQuestionFront } from 'components/locals/dashboard/survey/redux/actions';
import useToggle from 'hooks/useToggle';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateSurveyTaken } from 'redux/auth/actions';
import * as Yup from 'yup';
import useStyles from './styles';

const validationSchema = Yup.object({
  first_name: Yup.string().required('Please enter first name'),
  last_name: Yup.string().required('Please enter last name'),
  phone: Yup.string().required('Please enter phone').min(10).max(10),
  email: Yup.string().required('Please enter email'),
  country_of_residence: Yup.string().required('Please select a country')
});

const FormTwo = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const { post_question_front_loading } = useSelector((state) => state.question);
  const { questions } = useSelector((state) => state.homepage);
  const { user } = useSelector((state) => state.auth);
  const [openForm, formOpenFunction] = useToggle(true);

  const [answers, setAnswers] = useState([]);
  const [userFormDetails, setUserFormDetails] = useState([]);
  console.log({ userFormDetails });
  const handleOptionChange = (questionId, selectedOptionId) => {
    const updatedAnswers = answers.filter((answer) => answer.questionId !== questionId);
    updatedAnswers.push({ questionId, selectedOptionId });
    setAnswers(updatedAnswers);
  };

  const handleSuccess = () => {
    navigate('/nbns/survey');
    dispatch(updateSurveyTaken());
  };

  const onSubmit = (data) => {
    console.log({ data });
    const finalData = {
      ...userFormDetails,
      question_answers: answers.map((answer) => ({
        question_id: answer.questionId,
        option_id: answer.selectedOptionId
      }))
    };
    console.log({ finalData });
    dispatch(postQuestionFront(finalData, handleSuccess));
  };

  const onSubmitDetails = (data) => {
    console.log({ details: data });
    setUserFormDetails(data);
    formOpenFunction();
  };

  const { countries_list } = useSelector((state) => state.ncc);
  console.log({ countries_list });

  const countryList = countries_list?.map((item, index) => ({
    label: item,
    value: item
  }));

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const handleCancel = () => {
    navigate(`/nbns/survey`);
  };

  return (
    <>
      <CustomFormProvider>
        <CustomForm onSubmit={onSubmit}>
          <Box className={classes.questionSection}>
            {questions.map((questionData, index) => (
              <Box className={classes.questionWrapper} key={index}>
                <Typography variant="h6" className={classes.question}>
                  {index + 1}. {questionData?.question} ?
                </Typography>
                <ul className={classes.answerWrapper}>
                  {questionData.options.map((option) => (
                    <li key={option.id}>
                      <input
                        type="radio"
                        name={`question-${index}`}
                        id={option?.id}
                        value={option.id}
                        onChange={() => handleOptionChange(questionData.id, option.id)}
                        checked={
                          answers.find((answer) => answer.questionId === questionData.id)
                            ?.selectedOptionId === option.id
                        }
                      />
                      <label htmlFor={option?.id}> {option?.option}</label>
                    </li>
                  ))}
                </ul>
              </Box>
            ))}

            <Box marginTop={8}>
              <CustomButton
                justifyContent="center"
                variant="contained"
                type="submit"
                buttonName="Submit"
                loading={post_question_front_loading}
              />
            </Box>
            {/* <Button type="submit">Submit</Button> */}
          </Box>
        </CustomForm>
      </CustomFormProvider>
      <CustomModal
        open={openForm}
        handleClose={formOpenFunction}
        modalTitle="Submit information before survey submission"
        // modalSubtitle=""
        nonClose
        padding
        width={`40rem`}>
        <CustomFormProvider resolver={useYupValidationResolver(validationSchema)}>
          <CustomForm onSubmit={onSubmitDetails}>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <CustomInput name="first_name" label="First Name" required />
              </Grid>
              <Grid item sm={6}>
                <CustomInput name="last_name" label="Last Name" required />
              </Grid>
              <Grid item sm={6}>
                <CustomInput name="email" label="Email" type="email" required />
              </Grid>
              <Grid item sm={6}>
                <CustomInput name="phone" label="Phone Number" type="text" />
              </Grid>

              <Grid item sm={12}>
                <CustomAutoComplete
                  placeholder="Country of residence"
                  name="country_of_residence"
                  label="Country of residence"
                  options={countryList ?? []}
                  required
                />
              </Grid>
              <Grid item sm={6}>
                <Button
                  onClick={() => handleCancel()}
                  variant="outlined"
                  style={{ color: '#F10056', borderColor: '#F10056', width: '100%' }}>
                  {' '}
                  Cancel
                </Button>
              </Grid>
              <Grid item sm={6}>
                <Tooltip title={'Please fill all field before submitting'}>
                  <Button
                    type="submit"
                    variant="contained"
                    // disabled={!isFormValid}
                    style={{ color: '#fff', backgroundColor: '#1769AA', width: '100%' }}>
                    {' '}
                    Next
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </CustomForm>
        </CustomFormProvider>
      </CustomModal>
    </>
  );
};

export default FormTwo;
