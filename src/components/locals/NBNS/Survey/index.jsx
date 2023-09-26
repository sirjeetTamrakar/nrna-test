import { Box, Button, Container, Typography } from '@mui/material';
import CustomModal from 'components/common/CustomModal/CustomModal';
import Login from 'components/globals/login';
import PageBanner from 'components/globals/PageBanner';
import Register from 'components/globals/register';
import useToggle from 'hooks/useToggle';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';

const Survey = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, openFunction] = useToggle(false);
  const [openRegister, openFunctionRegister] = useToggle(false);

  const startSurvey = () => {
    navigate(`/nbns/survey/questions`);
  };

  const { user } = useSelector((state) => state.auth);
  const { nbns_settings } = useSelector((state) => state.homepage);
  console.log('dsadsdddddddddd', { nbns_settings });
  console.log({ user });
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
    </>
  );
};

export default Survey;
