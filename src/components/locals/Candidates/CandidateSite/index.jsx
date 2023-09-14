import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import banner2 from 'assets/images/banner2.png';
import facebook from 'assets/images/facebook.png';
import insta from 'assets/images/insta.png';
import linkedin from 'assets/images/linkedin.png';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleUser } from 'redux/homepage/actions';
import About from './About';
const CandidateSite = () => {
  const dispatch = useDispatch();

  const { candidate } = useParams();

  const { single_user } = useSelector((state) => state.homepage);
  console.log({ candidate, single_user });
  useEffect(() => {
    dispatch(getSingleUser(candidate));
  }, [candidate]);

  return (
    <div className="main_content">
      <div className="container">
        <div className="candidate_page">
          <div
            className="candidate_page_banner"
            style={{
              backgroundImage: `url('${banner2}')`,
              backgroundPosition: 'center'
            }}></div>
          <div className="candidate_page_lower_banner">
            <div className="candidate_page_lower_banner_wrapper">
              <div className="candidate_page_lower_banner_wrapper_box">
                <div className="img_container_profile">
                  <img src={single_user?.profile_image} alt="" />
                </div>
                <div className="candidate_name_box">
                  <div className="candidate_name">{single_user?.name}</div>
                  <div className="candidate_designation">{single_user?.designation ?? ''}</div>
                </div>
              </div>
            </div>
            <div className="candidate_social">
              <div className="candidate_social_wrapper_box">
                <div className="candidate_social_wrapper">
                  <a href={single_user?.facebook_url} target="_blank" rel="noreferrer">
                    <div className="candidate_social_icons_box">
                      <img src={facebook} alt="" className="candidate_social_icons" />
                    </div>
                  </a>
                  <a href={single_user?.instagram_url} target="_blank" rel="noreferrer">
                    <div className="candidate_social_icons_box">
                      <img src={insta} alt="" className="candidate_social_icons" />
                    </div>
                  </a>
                  <a href={single_user?.linkedin_url} target="_blank" rel="noreferrer">
                    <div className="candidate_social_icons_box">
                      <img src={linkedin} alt="" className="candidate_social_icons" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div className="candidate_page_wrapper">
            <Grid container spacimg={2}>
              <Grid item sm={4}>
                <div className="candidate_page_sidebar">
                  <ul className="contact_list" style={{ width: '330px' }}>
                    <li className="contact_list_title_box">
                      {' '}
                      <PermContactCalendarIcon />
                      <span className="contact_list_title">Contact Details</span>
                    </li>
                    <li>
                      <div className="contact_list_subtitle">Username</div>
                      <span className="contact_list_item">{single_user?.username ?? ''}</span>
                    </li>
                    <li>
                      <div className="contact_list_subtitle">Email Address</div>
                      <span className="contact_list_item">{single_user?.email ?? ''}</span>
                    </li>
                    <li>
                      <div className="contact_list_subtitle">Phone no.</div>
                      <span className="contact_list_item">{single_user?.phone ?? ''}</span>
                    </li>
                    <li>
                      <div className="contact_list_subtitle">Address</div>
                      <span className="contact_list_item">{single_user?.address ?? ''}</span>
                    </li>
                    <li>
                      <div className="contact_list_subtitle">Country Of Residence</div>
                      <span className="contact_list_item">
                        {single_user?.country_of_residence ?? ''}
                      </span>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid item sm={8}>
                {/* <CandidateTabs /> */}
                <Box sx={{ backgroundColor: '#F9F9FB', marginTop: '12px', padding: '20px' }}>
                  <About />
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateSite;
