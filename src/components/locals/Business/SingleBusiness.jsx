import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import Grid from '@mui/material/Grid';
import facebook from 'assets/images/facebook.png';
import insta from 'assets/images/insta.png';
import linkedin from 'assets/images/linkedin.png';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleBusiness } from 'redux/homepage/actions';
import BusinessTabs from './BusinessTabs';
const BusinessProfile = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { single_business } = useSelector((state) => state.homepage);
  console.log({ single_business });
  useEffect(() => {
    dispatch(getSingleBusiness(slug));
  }, [slug]);
  // const candidateImages = {
  //   profileBannerImage: Banner,
  //   profileImage: CandidateImage1
  // };
  // const currentUser = {
  //   name: 'Restaurant',
  //   designation: 'Chairman'
  // };
  // const candidateData = {
  //   email: 'yogen@ybcservices.com',
  //   phone: '+1231 124391 129381',
  //   address: 'North Lane, Aldershot, UK'
  // };
  return (
    <div className="main_content">
      <div className="container">
        <div className="candidate_page">
          <div
            className="candidate_page_banner"
            style={{
              // backgroundImage: `url('${candidateImages?.profileBannerImage}')`,
              backgroundImage: `url('${single_business?.banner_image}')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}></div>
          <div className="candidate_page_lower_banner">
            <div className="candidate_page_lower_banner_wrapper">
              <div className="candidate_page_lower_banner_wrapper_box">
                <div className="img_container">
                  <img src={single_business?.image} alt="" />
                </div>
                <div className="candidate_name_box">
                  <div className="candidate_name">{single_business?.fullname}</div>
                  <div className="candidate_designation">IT company</div>
                </div>
              </div>
            </div>
            <div className="candidate_social">
              <div className="candidate_social_wrapper_box">
                <div className="candidate_social_wrapper">
                  <div className="candidate_social_icons_box">
                    <a href={single_business?.facebook_url} target="_blank" rel="noreferrer">
                      <img src={facebook} alt="" className="candidate_social_icons" />
                    </a>
                  </div>
                  <a href={single_business?.instagram_url} target="_blank" rel="noreferrer">
                    <div className="candidate_social_icons_box">
                      <img src={insta} alt="" className="candidate_social_icons" />
                    </div>
                  </a>
                  <a href={single_business?.twitter_url} target="_blank" rel="noreferrer">
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
              <Grid item sm={5}>
                <div className="candidate_page_sidebar">
                  <ul className="contact_list">
                    <li className="contact_list_title_box">
                      {' '}
                      <PermContactCalendarIcon />
                      <span className="contact_list_title">Contact Details</span>
                    </li>
                    <li>
                      <div className="contact_list_subtitle">Email Address</div>
                      <span className="contact_list_item">{single_business?.email ?? ''}</span>
                    </li>
                    <li>
                      <div className="contact_list_subtitle">Phone no.</div>
                      <span className="contact_list_item">{single_business?.phone ?? ''}</span>
                    </li>
                    <li>
                      <div className="contact_list_subtitle">Address</div>
                      <span className="contact_list_item">{single_business?.address ?? ''}</span>
                    </li>
                    <li>
                      <div className="contact_list_subtitle">Map</div>
                      <div style={{ marginTop: '10px' }}>
                        <iframe
                          width="100%"
                          height="220"
                          frameBorder="0"
                          allowFullScreen
                          src={single_business?.google_map_link}></iframe>
                      </div>
                      {/* <span className="contact_list_item">{candidateData?.address ?? ''}</span> */}
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
              <Grid item sm={7}>
                <BusinessTabs singleBusinessData={single_business} />
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

export default BusinessProfile;
