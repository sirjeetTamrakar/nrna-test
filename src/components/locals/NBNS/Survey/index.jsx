import { Box, Button, Container, Grid, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';
import CustomModal from 'components/common/CustomModal/CustomModal';
import CustomAutoComplete from 'components/common/Form/CustomAutoComplete';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import CustomInput from 'components/common/Form/CustomInput';
import Login from 'components/globals/login';
import PageBanner from 'components/globals/PageBanner';
import Register from 'components/globals/register';
import { getCountries } from 'components/locals/dashboard/ncc/redux/actions';
import useToggle from 'hooks/useToggle';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emailCheck, saveDetails } from 'redux/homepage/actions';
import * as Yup from 'yup';
import useStyles from './styles';

const validationSchema = Yup.object({
  first_name: Yup.string().required('Please enter first name'),
  last_name: Yup.string().required('Please enter last name'),
  phone: Yup.string().required('Please enter phone').min(10).max(10),
  email: Yup.string().required('Please enter email'),
  country_of_residence: Yup.string().required('Please select a country')
});
const Survey = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, openFunction] = useToggle(false);
  const [openRegister, openFunctionRegister] = useToggle(false);
  const [openForm, formOpenFunction] = useToggle(false);
  const [userFormDetails, setUserFormDetails] = useState([]);

  const startSurvey = () => {
    // navigate(`/nbns/survey/questions`);
    formOpenFunction();
  };

  const { user } = useSelector((state) => state.auth);
  const { nbns_settings, email_check_loading } = useSelector((state) => state.homepage);
  console.log('dsadsdddddddddd', { nbns_settings });
  console.log({ user });
  const { countries_list } = useSelector((state) => state.ncc);
  console.log({ countries_list });

  const countryList = countries_list?.map((item, index) => ({
    label: item,
    value: item
  }));

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const refetch = (data) => {
    dispatch(saveDetails(data));
    navigate(`questions`);
  };
  const onSubmitDetails = (data) => {
    console.log({ details: data });
    setUserFormDetails(data);
    dispatch(emailCheck({ email: data?.email }, () => refetch(data)));
  };
  const handleCancel = () => {
    formOpenFunction();
  };

  return (
    <>
      <PageBanner image={nbns_settings?.survey_banner} title={nbns_settings?.survey_title} />

      <Container>
        <Box className={classes.root}>
          <Box>
            <Box className={classes.headerWrapper}>
              <Typography className={classes.title}>
                Elevate Your Voice: Join Our Survey Today!
              </Typography>
              <Typography className={classes.subtitle}>
                Nepali Lineage Citizenship Association
              </Typography>
            </Box>
            <Box textAlign="center" marginTop={4}>
              {/* {isLoggedIn() ? ( */}
              <Button
                // disabled={user?.has_taken_survey ? true : false}
                variant="contained"
                onClick={startSurvey}>
                Start Making a Differences
              </Button>
              {/* ) : (
                <Button variant="contained" onClick={openFunction}>
                  Login to take survey
                </Button>
              )} */}
              {/* {user?.has_taken_survey && (
                <Typography sx={{ marginTop: '20px', fontSize: '20px' }}>
                  You have already taken the survey.
                </Typography>
              )} */}
            </Box>
            <Box marginTop={4}>
              <Typography className={classes.description}>
                Join hands with us in making a lasting impact through our transformative survey.
                Your participation isn't just a response; it's a powerful statement that you believe
                in the strength of collective action for our cause.
              </Typography>
              <Typography className={classes.description}>
                By participating, you're not just sharing your opinions; you're contributing to a
                movement. A movement that seeks to break down barriers, foster inclusivity, and sow
                the seeds of positive transformation. Each response ignites a ripple effect,
                inspiring others to stand up and be heard.
              </Typography>
              <Typography className={classes.description}>
                Your voice, alongside countless others, will shape policies, influence decisions,
                and champion causes that demand attention. Together, we're not just answering
                questions; we're taking action. Let's rise above the ordinary and work towards an
                extraordinary society. Participate now, and be the change we all aspire to see."
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <CustomModal open={open} handleClose={openFunction} width={`22rem`}>
        <Login handleClose={openFunction} registerOpen={openFunctionRegister} />
      </CustomModal>
      <CustomModal open={openRegister} handleClose={openFunctionRegister} width={`22rem`}>
        <Register handleClose={openFunctionRegister} loginOpen={openFunction} />
      </CustomModal>
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
                    {email_check_loading ? <CircularProgress /> : 'Next'}
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

export default Survey;
