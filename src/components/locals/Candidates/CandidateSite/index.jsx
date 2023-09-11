import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import Grid from '@mui/material/Grid';
import Banner from 'assets/images/banner.png';
import banner2 from 'assets/images/banner2.png';
import CandidateImage1 from 'assets/images/candidate1.png';
import facebook from 'assets/images/facebook.png';
import insta from 'assets/images/insta.png';
import linkedin from 'assets/images/linkedin.png';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleTeams } from 'redux/homepage/actions';
import CandidateTabs from './CandidateTabs';
const CandidateSite = () => {
  const dispatch = useDispatch();
  const candidateImages = {
    profileBannerImage: Banner,
    profileImage: CandidateImage1
  };
  const currentUser = {
    name: 'Restaurant',
    designation: 'Chairman'
  };
  const candidateData = {
    username: 'GuyHawkins12',
    email: 'guy.hawkins@gmail.com',
    phone: '+1231 124391 129381',
    address: 'Kathmandu, Bagmati',
    country: 'Nepal'
  };

  const { candidate } = useParams();
  const { single_teams } = useSelector((state) => state.homepage);
  console.log({ candidate, single_teams });
  useEffect(() => {
    dispatch(getSingleTeams(candidate));
  }, [candidate]);

  return (
    <div className="main_content">
      <div className="container">
        <div className="candidate_page">
          <div
            className="candidate_page_banner"
            style={{
              // backgroundImage: `url('${candidateImages?.profileBannerImage}')`,
              backgroundImage: `url('${banner2}')`,
              backgroundPosition: 'center'
              // backgroundSize: 'cover'
            }}></div>
          <div className="candidate_page_lower_banner">
            <div className="candidate_page_lower_banner_wrapper">
              <div className="candidate_page_lower_banner_wrapper_box">
                <div className="img_container_profile">
                  <img src={single_teams?.member?.profile_image} alt="" />
                </div>
                <div className="candidate_name_box">
                  <div className="candidate_name">{single_teams?.member?.name}</div>
                  <div className="candidate_designation">{single_teams?.designation ?? ''}</div>
                </div>
              </div>
            </div>
            <div className="candidate_social">
              <div className="candidate_social_wrapper_box">
                <div className="candidate_social_wrapper">
                  <div className="candidate_social_icons_box">
                    <img src={facebook} alt="" className="candidate_social_icons" />
                  </div>
                  <div className="candidate_social_icons_box">
                    <img src={insta} alt="" className="candidate_social_icons" />
                  </div>
                  <div className="candidate_social_icons_box">
                    <img src={linkedin} alt="" className="candidate_social_icons" />
                  </div>
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
                      <span className="contact_list_item">
                        {single_teams?.member?.username ?? ''}
                      </span>
                    </li>
                    <li>
                      <div className="contact_list_subtitle">Email Address</div>
                      <span className="contact_list_item">{single_teams?.member?.email ?? ''}</span>
                    </li>
                    <li>
                      <div className="contact_list_subtitle">Phone no.</div>
                      <span className="contact_list_item">{single_teams?.member?.phone ?? ''}</span>
                    </li>
                    <li>
                      <div className="contact_list_subtitle">Address</div>
                      <span className="contact_list_item">
                        {single_teams?.member?.address ?? ''}
                      </span>
                    </li>
                    <li>
                      <div className="contact_list_subtitle">Country Of Residence</div>
                      <span className="contact_list_item">
                        {single_teams?.member?.country_of_residence ?? ''}
                      </span>
                    </li>
                  </ul>
                  {/* <div className="social_links">
                <a href={candidateData?.facebook ?? '#'} target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href={candidateData?.instagram ?? '#'} target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href={candidateData?.twitter ?? '#'} target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div> */}
                </div>
              </Grid>
              <Grid item sm={8}>
                <CandidateTabs />
              </Grid>
            </Grid>
            {/* <div className="candidate_page_content">
              {candidateData?.dynamic_description &&
                candidateData?.dynamic_description?.map((data, index) => (
                  <div key={index}>
                    <div className="candidate_page_content_title">{data?.title}</div>
                    <div
                      className="candidate_page_content_description"
                      dangerouslySetInnerHTML={{ __html: data?.description }}></div>
                  </div>
                ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateSite;
