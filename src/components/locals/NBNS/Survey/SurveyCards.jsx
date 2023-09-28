import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSurvey } from 'redux/homepage/actions';

const SurveyCards = ({ data, handleClick }) => {
  const dispatch = useDispatch();
  const cardData = [
    {
      title: 'Web development covers a broad range of services',
      desc: 'Communications covers a broad range of services — from data to voice and video calls. An IT provider can configure your communication systems.'
    },
    {
      title: 'Web development',
      desc: 'Communications covers a broad range of services — from data to voice and video calls. An IT provider can configure your communication systems.'
    },
    {
      title: 'Web development',
      desc: 'Communications covers a broad range of services — from data to voice and video calls. An IT provider can configure your communication systems.'
    },
    {
      title: 'Web development',
      desc: 'Communications covers a broad range of services'
    }
  ];

  const { survey } = useSelector((state) => state.homepage);
  useEffect(() => {
    dispatch(getAllSurvey());
  }, []);

  console.log('jjjajj', { survey });

  return (
    <Box marginY={6}>
      {/* <Container> */}
      <Grid container spacing={3}>
        {survey?.length !== 0 ? (
          survey?.map((item) => {
            return (
              <Grid item sm={3} key={survey?.id}>
                <div
                  style={{
                    boxShadow: '0px 8px 20px 0px rgba(18, 17, 39, 0.10)',
                    backgroundColor: '#fff',
                    borderRadius: '6px'
                  }}>
                  <div
                    style={{
                      padding: '10px 15px'
                    }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start'
                      }}>
                      <p
                        style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          marginTop: '13px',
                          marginBottom: '6px',
                          height: '40px',
                          textAlign: 'start'
                        }}>
                        Survey title:{' '}
                        {item?.title?.length < 39
                          ? item?.title
                          : `${item?.title.substring(0, 40)}...`}
                      </p>
                      <p
                        style={{
                          fontSize: '12px',
                          fontWeight: '400',
                          height: '35px',
                          textAlign: 'start'
                        }}>
                        Survey Description:{' '}
                        {item?.description?.length < 44
                          ? item?.description
                          : `${item?.description.substring(0, 45)}...`}
                      </p>
                    </div>
                    <Button
                      style={{
                        marginBottom: '10px'
                      }}
                      variant="contained"
                      onClick={() => handleClick(item?.id)}>
                      Take part
                    </Button>
                  </div>
                </div>
              </Grid>
            );
          })
        ) : (
          <Box sx={{ fontSize: '25px', marginLeft: '25px' }}>No serveys available</Box>
        )}
      </Grid>
      {/* </Container> */}
    </Box>
  );
};

export default SurveyCards;
