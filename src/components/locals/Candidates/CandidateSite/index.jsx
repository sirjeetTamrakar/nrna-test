import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import Banner from 'assets/images/banner.png';
import CandidateImage1 from 'assets/images/candidate1.png';

const CandidateSite = () => {
  const candidateImages = {
    profileBannerImage: Banner,
    profileImage: CandidateImage1
  };
  const currentUser = {
    name: 'Yogen Bahadur Chhetri',
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
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}></div>
          <div className="candidate_page_lower_banner">
            <div className="candidate_page_lower_banner_wrapper">
              <div className="img_container">
                <img src={candidateImages?.profileImage} alt="" />
              </div>
              <div className="candidate_name">{currentUser?.name}</div>
              <div className="candidate_designation">{candidateData?.designation ?? ''}</div>
            </div>
          </div>
          <div className="candidate_page_wrapper">
            <div className="candidate_page_sidebar">
              <ul className="contact_list">
                <li>
                  <LocationOnIcon />
                  <span className="contact_list_item">{candidateData?.address ?? ''}</span>
                </li>
                <li>
                  <PhoneIcon />
                  <span className="contact_list_item">{candidateData?.phone ?? ''}</span>
                </li>
                <li>
                  <EmailIcon />
                  <span className="contact_list_item">{candidateData?.email ?? ''}</span>
                </li>
              </ul>
              <div className="social_links">
                <a href={candidateData?.facebook ?? '#'} target="_blank" rel="noreferrer">
                  <FacebookIcon />
                </a>
                <a href={candidateData?.instagram ?? '#'} target="_blank" rel="noreferrer">
                  <InstagramIcon />
                </a>
                <a href={candidateData?.twitter ?? '#'} target="_blank" rel="noreferrer">
                  <TwitterIcon />
                </a>
              </div>
            </div>

            <div className="candidate_page_content">
              {candidateData?.dynamic_description &&
                candidateData?.dynamic_description?.map((data, index) => (
                  <div key={index}>
                    <div className="candidate_page_content_title">{data?.title}</div>
                    <div
                      className="candidate_page_content_description"
                      dangerouslySetInnerHTML={{ __html: data?.description }}></div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateSite;
