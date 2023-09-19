import Grid from '@mui/material/Grid';
import Banner from 'assets/images/banner.png';
import CandidateImage1 from 'assets/images/candidate1.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDepartment, getSingleUser, getTeams } from 'redux/homepage/actions';
import SecondaryNav from './SecondaryNav';
const Profile = () => {
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

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const { username, ncc } = useParams();
  const data = useParams();

  const { teams, team_loading, department, department_loading, single_teams, single_user } =
    useSelector((state) => state.homepage);

  const recentTeam = teams?.filter((list) => list?.slug !== username).slice(0, 4);
  console.log('xxxxxxxxxx', { recentTeam, single_teams, single_user });

  const [selected, setSelected] = useState(
    single_teams?.news_category_id
      ? parseInt(single_teams?.our_team_category_id)
      : department?.[0]?.id
  );
  console.log('zxzxzxzxz', { selected });

  useEffect(() => {
    dispatch(getSingleUser(username));
    dispatch(getTeams({ ncc_id: user?.ncc?.id }));
    dispatch(getDepartment({ ncc_id: user?.ncc?.id }));
  }, [username]);

  return (
    <>
      <SecondaryNav
        id={ncc}
        category={department}
        setSelected={setSelected}
        selected={selected}
        teams
      />
      <div className="main_content">
        <div className="container">
          <div className="candidate_page">
            <div
              className="candidate_page_banner"
              style={{
                backgroundImage: `url('${single_user?.profile_banner}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}></div>
            <div className="candidate_page_lower_banner">
              <div className="candidate_page_lower_banner_wrapper">
                <div className="img_container">
                  <img src={single_user?.profile_image} alt="" />
                </div>
                <div className="candidate_name">{single_user?.name}</div>
                <div className="candidate_designation">{candidateData?.designation ?? ''}</div>
              </div>
            </div>
            <div className="candidate_page_wrapper">
              <Grid container>
                <Grid item sm={5}>
                  <div className="candidate_page_sidebar">
                    <ul className="contact_list">
                      <li>
                        <i className="fa fa-map-marker-alt"></i>
                        <span className="contact_list_item">{single_user?.address ?? ''}</span>
                      </li>
                      <li>
                        <i className="fa fa-phone"></i>
                        <span className="contact_list_item">{single_user?.phone ?? ''}</span>
                      </li>
                      <li>
                        <i className="fa fa-envelope"></i>
                        <span className="contact_list_item">{single_user?.email ?? ''}</span>
                      </li>
                    </ul>
                    <div className="social_links">
                      <a href={single_user?.facebook ?? '#'} target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a href={single_user?.instagram ?? '#'} target="_blank" rel="noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href={single_user?.twitter ?? '#'} target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </Grid>
                <Grid item sm={7}>
                  <div style={{ backgroundColor: '#F9F9FB', padding: '20px', marginTop: '15px' }}>
                    <p
                      style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        marginBottom: '17px'
                      }}>
                      About Us
                    </p>
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: '400'
                      }}>
                      <div dangerouslySetInnerHTML={{ __html: single_user?.description }} />
                    </p>
                  </div>
                </Grid>
              </Grid>

              {/* <div className="candidate_page_content">
                {single_user?.description &&
                  single_user?.description?.map((data, index) => (
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
    </>
  );
};

export default Profile;
