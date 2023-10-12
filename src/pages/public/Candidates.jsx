import { Box, CircularProgress } from '@mui/material';
import Button from '@mui/material/Button';
import profileImage2 from 'assets/images/profileImage2.jpg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCandidates } from 'redux/homepage/actions';

const CandidateHome = ({ siteSettingImages, about, title }) => {
  const { settings } = useSelector((state) => state.homepage);
  const [candidateLimit, setCandidateLimit] = useState(12);

  const dispatch = useDispatch();
  const { ncc } = useParams();
  console.log('ggsgggggg', { ncc });
  const { candidates, candidate_loading } = useSelector((state) => state.homepage);
  useEffect(() => {
    const finalData = {
      limit: candidateLimit
    };
    dispatch(getCandidates(finalData));
  }, [candidateLimit]);

  const handleShowMore = () => {
    setCandidateLimit((prev) => prev + 4);
  };

  return (
    <>
      <div className="main_content">
        <section className="all_events">
          <div className="container">
            <div className="row">
              {candidates?.data?.length > 0 ? (
                <>
                  <>
                    {candidates?.data?.map((candidate) => (
                      <div key={candidate.id} className="col-md-3">
                        {/* <CandidateItem candidate={candidate} /> */}
                        <Link
                          // to={`/candidate/${candidate?.member?.username}`}
                          to={`/${candidate?.member?.username}`}
                          className="political_item">
                          <div className="img_container">
                            <img
                              src={
                                candidate?.member?.profile_image
                                  ? candidate?.member?.profile_image
                                  : profileImage2
                              }
                              alt=""
                            />
                          </div>
                          <div className="political_item_title text-center">
                            {candidate?.member?.full_name}
                          </div>
                          <div className="political_item_subtitle text-center">
                            {candidate?.designation}
                          </div>
                        </Link>
                      </div>
                    ))}
                  </>
                  <>
                    {candidates?.meta?.to !== candidates?.meta?.total && !candidate_loading && (
                      <div
                        style={{
                          marginTop: '20px',
                          marginBottom: '20px',
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'center'
                        }}>
                        <Button
                          style={{
                            border: 'none',
                            backgroundColor: '#E1F5FF',
                            color: '#6F83CE',
                            padding: '10px 20px',
                            borderRadius: '4px'
                          }}
                          onClick={handleShowMore}>
                          Show More
                        </Button>
                      </div>
                    )}
                  </>
                </>
              ) : (
                ''
              )}
            </div>
            {candidate_loading ? (
              <Box display="flex" justifyContent="center" alignItems="center">
                <CircularProgress size={24} />
              </Box>
            ) : (
              candidates?.data?.length === 0 && (
                <div className="col-md-12 mt-5 mb-5">
                  <h3 className="text-center">No news available</h3>
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default CandidateHome;
