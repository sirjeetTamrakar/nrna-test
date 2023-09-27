import { Box, Container, Grid, Typography } from '@mui/material';
import PageBanner from 'components/globals/PageBanner';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHomeData } from 'redux/homepage/actions';
import AdviceForm from './Form';
import useStyles from './styles';

const Advise = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [adviceData, setAdviceData] = useState();
  const { home_data } = useSelector((state) => state.homepage);
  console.log('bttttt', { adviceData });
  useEffect(() => {
    const data = {
      type: 'nbns',
      id: 1
    };
    dispatch(getAllHomeData(data));
  }, []);

  useEffect(() => {
    const newArray = home_data?.data?.filter((item) => item?.slug === 'advice');
    const newObj = {};

    newArray.forEach((item, index) => {
      newObj[`advice${index + 1}`] = item;
    });
    setAdviceData(newObj);
  }, [home_data?.data]);

  return (
    <>
      <PageBanner
        title={adviceData?.advice1?.title}
        subtitle={adviceData?.advice1?.subtitle}
        image={adviceData?.advice1?.banner_image}
      />

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
    </>
  );
};

export default Advise;
