import { Box, Button, Grid, Typography } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomModal from 'components/common/CustomModal/CustomModal';
import CustomAutoComplete from 'components/common/Form/CustomAutoComplete';
import CustomForm from 'components/common/Form/CustomForm';
import CustomInput from 'components/common/Form/CustomInput';
import { getCountries } from 'components/locals/dashboard/ncc/redux/actions';
import { postQuestionFront } from 'components/locals/dashboard/survey/redux/actions';
import useToggle from 'hooks/useToggle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateSurveyTaken } from 'redux/auth/actions';
import useStyles from './styles';

const FormTwo = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const { questions, post_question_front_loading } = useSelector((state) => state.question);
  const { user } = useSelector((state) => state.auth);

  const [answers, setAnswers] = useState([]);

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
      ...data,
      question_answers: answers.map((answer) => ({
        question_id: answer.questionId,
        option_id: answer.selectedOptionId
      }))
    };
    dispatch(postQuestionFront(finalData, handleSuccess));
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

  const [openForm, formOpenFunction] = useToggle(false);

  const handleOpenForm = () => {
    formOpenFunction();
  };

  return (
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
          <Button
            justifyContent="center"
            variant="contained"
            buttonName="Next"
            onClick={() => handleOpenForm()}>
            Next
          </Button>
        </Box>
        <CustomModal
          open={openForm}
          handleClose={formOpenFunction}
          modalTitle="Submit information before survey submission"
          // modalSubtitle=""
          padding
          width={`40rem`}>
          <>
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
                {/* <CustomInput name="country_of_residence" label="Country of Residence" required /> */}
              </Grid>
            </Grid>

            <Box marginTop={8}>
              <CustomButton
                justifyContent="center"
                variant="contained"
                type="submit"
                buttonName="Submit"
                loading={post_question_front_loading}
              />
            </Box>
          </>
        </CustomModal>
      </Box>
    </CustomForm>
  );
};

export default FormTwo;
