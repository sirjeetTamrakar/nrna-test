import { Box, Container, Grid, Typography } from '@mui/material';
import AdviceForm from './Form';
import useStyles from './styles';

const Advise = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.root}>
        <Box className={classes.headerWrapper}>
          <Typography className={classes.title}>
            Forging Pathways Together Through Shared Advice
          </Typography>
          <Typography className={classes.subtitle}>
            Nepali Lineage Citizenship Association
          </Typography>
        </Box>

        <Grid container justifyContent="center">
          <Grid item sm={8}>
            <Box className={classes.formContainer}>
              <Typography className={classes.formTitle}>Contribute Your Wisdom</Typography>
              <Typography className={classes.description}>
                Unlock the power of perspectives! We invite you to offer your valuable advice,
                shaping meaningful journeys with your insights.
              </Typography>

              <AdviceForm />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Advise;
