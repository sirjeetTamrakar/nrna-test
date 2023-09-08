import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import Grid from '@mui/material/Grid';
import Banner from 'assets/images/banner.png';
import CandidateImage1 from 'assets/images/candidate1.png';
import BusinessTabs from './BusinessTabs';
const BusinessProfile = () => {
  const candidateImages = {
    profileBannerImage: Banner,
    profileImage: CandidateImage1
  };
  const currentUser = {
    name: 'Restaurant',
    designation: 'Chairman'
  };
  const candidateData = {
    email: 'yogen@ybcservices.com',
    phone: '+1231 124391 129381',
    address: 'North Lane, Aldershot, UK'
  };
  return (
    <div className="main_content">
      <div className="container">
        <div className="candidate_page">
          <div
            className="candidate_page_banner"
            style={{
              backgroundImage: `url('${candidateImages?.profileBannerImage}')`,
              backgroundPosition: 'center'
              // backgroundSize: 'cover'
            }}></div>
          <div className="candidate_page_lower_banner">
            <div className="candidate_page_lower_banner_wrapper">
              <div className="candidate_page_lower_banner_wrapper_box">
                <div className="img_container">
                  <img src={candidateImages?.profileImage} alt="" />
                </div>
                <div className="candidate_name_box">
                  <div className="candidate_name">{currentUser?.name}</div>
                  <div className="candidate_designation">
                    {candidateData?.designation ?? ''}IT company
                  </div>
                </div>
              </div>
            </div>
            <div className="candidate_social">
              <div className="candidate_social_wrapper_box">
                <div className="candidate_social_wrapper">
                  <div>
                    <FacebookOutlinedIcon className="candidate_social_icons" />
                  </div>
                  <div>
                    <InstagramIcon className="candidate_social_icons" />
                  </div>
                  <div>
                    <LinkedInIcon className="candidate_social_icons" />
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
                      <span className="contact_list_item">{candidateData?.email ?? ''}</span>
                    </li>
                    <li>
                      <div className="contact_list_subtitle">Phone no.</div>
                      <span className="contact_list_item">{candidateData?.phone ?? ''}</span>
                    </li>
                    <li>
                      <div className="contact_list_subtitle">Address</div>
                      <span className="contact_list_item">{candidateData?.address ?? ''}</span>
                    </li>
                    <li>
                      <div className="contact_list_subtitle">Map</div>
                      <span className="contact_list_item">{candidateData?.address ?? ''}</span>
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
                <BusinessTabs />
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
