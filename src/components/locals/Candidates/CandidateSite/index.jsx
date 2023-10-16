import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import bannerImage from 'assets/images/bannerImage.jpg';
import facebook from 'assets/images/facebook.png';
import insta from 'assets/images/insta.png';
import linkedin from 'assets/images/linkedin.png';
import profileImage2 from 'assets/images/profileImage2.jpg';
import { getCountries } from 'components/locals/dashboard/ncc/redux/actions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleUser } from 'redux/homepage/actions';
import About from './About';
const CandidateSite = () => {
  const dispatch = useDispatch();

  const pathname = window.location.pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { candidate } = useParams();

  const data = useParams();

  const { single_user } = useSelector((state) => state.homepage);
  const { countries_list } = useSelector((state) => state.ncc);
  const [filteredData, setFilteredData] = useState('');

  console.log({ candidate, single_user, data });
  useEffect(() => {
    dispatch(getSingleUser(candidate));
    dispatch(getCountries());
  }, [candidate]);

  useEffect(() => {
    const newArray = countries_list.filter(
      (item, index) => index === parseInt(single_user?.country_of_residence)
    );
    const newObj = {};

    newArray.forEach((item, index) => {
      newObj[`country${index + 1}`] = item;
    });
    setFilteredData(newObj);
  }, [single_user]);

  console.log({ filteredData });

  return (
    <div className="main_content">
      <div style={{}}>
        <div
          className="candidate_page_banner"
          style={{
            backgroundImage: `url('${
              single_user?.profile_banner ? single_user?.profile_banner : bannerImage
            }')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}></div>
        <div className="container">
          <div className="candidate_page_lower_banner">
            <div className="candidate_page_lower_banner_wrapper">
              <div className="candidate_page_lower_banner_wrapper_box">
                <div className="img_container_profile">
                  <img
                    src={single_user?.profile_image ? single_user?.profile_image : profileImage2}
                    alt=""
                  />
                </div>
                <div className="candidate_name_box">
                  <div className="candidate_name">
                    {single_user?.full_name !== '' ? single_user?.full_name : single_user?.username}
                  </div>
                  <div className="candidate_designation">{single_user?.role_name ?? ''}</div>
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
        </div>
      </div>
      <div className="container">
        <div className="candidate_page">
          <div>
            <hr />
          </div>
          <div className="candidate_page_wrapper">
            <Grid container spacimg={2}>
              <Grid item className="col-lg-4">
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
              <Grid item className="col-lg-8 about_data">
                {/* <CandidateTabs /> */}
                <Box
                  sx={{ backgroundColor: '#F9F9FB', marginTop: '12px', padding: '20px', order: 2 }}>
                  <About data={single_user?.description} />
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
