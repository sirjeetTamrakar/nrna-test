import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Container, Skeleton, Typography } from '@mui/material';
import CustomModal from 'components/common/CustomModal/CustomModal';
import Register from 'components/globals/register';
import useToggle from 'hooks/useToggle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useStyles } from './styles';

import { getBusinessFollow, postBusinessJoin } from 'redux/homepage/actions';
import { isLoggedIn } from 'utils';

const SecondaryNav = ({
  options,
  selected,
  title,
  color,
  setSelected,
  ncc,
  business,
  nbns,
  single_business
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [localSelected, setLocalSelected] = useState(selected);
  const [open, openFunction] = useToggle(false);
  const [openRegister, openFunctionRegister] = useToggle(false);
  const [filteredNcc, setFilteredNcc] = useState();

  console.log('kkkskkkksss', { single_business });

  const {
    ncc: nccData,
    businessFollowData,
    get_business_follow_loading
  } = useSelector((state) => state.homepage);
  const { user } = useSelector((state) => state.auth);
  console.log('kdlaskjndu', { user });
  const defaultValues = {};

  const { ncc: slug } = useParams();
  const { slug: businessSlug } = useParams();

  console.log({ businessFollowData });

  console.log('params_data', { slug, businessSlug });

  useEffect(() => {
    const newArray = nccData?.data?.filter((item) => item?.slug === slug);
    const newObj = {};

    newArray?.forEach((item, index) => {
      newObj[`nccID${index + 1}`] = item;
    });
    setFilteredNcc(newObj);
  }, [nccData?.data, slug]);

  const handleRegisterClick = () => {
    openFunctionRegister();
  };

  useEffect(() => {
    setLocalSelected(selected);
  }, [selected]);

  const handleOptionClick = (value) => {
    console.log('Clicked value:', value);

    setSelected(value);
  };
  const checkActive = (slug) => {
    if (localSelected) {
      if (slug === localSelected) {
        return 'active';
      } else return '';
    } else if (slug === options?.value) {
      return 'active';
    } else {
      return '';
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (business) {
      const formDataBusiness = new FormData();
      formDataBusiness.append('business_id', single_business?.id);
      formDataBusiness.append('user_id', user?.id);
      formDataBusiness.append('nbns', 0);
      const fetchData = {
        user_id: user?.id,
        business_id: single_business?.id
      };
      dispatch(postBusinessJoin(formDataBusiness, fetchData));
    } else if (nbns) {
      const formDataNbns = new FormData();
      formDataNbns.append('nbns', 1);
      formDataNbns.append('user_id', user?.id);
      const fetchData = {
        user_id: user?.id
      };

      dispatch(postBusinessJoin(formDataNbns, fetchData));
    } else {
      return;
    }
    // alert('sdad');

    // dispatch(postBusinessJoin(formData, handleClose, typeData));
  };

  useEffect(() => {
    if (business) {
      const data = {
        user_id: user?.id,
        business_id: single_business?.id
      };
      dispatch(getBusinessFollow(data));
    } else if (nbns) {
      const data = {
        user_id: user?.id
      };
      dispatch(getBusinessFollow(data));
    } else {
      return;
    }
    // const data = {
    //   user_id: user?.id,
    //   business_id: single_business?.id
    // };
    // dispatch(getBusinessFollow(data));
  }, [single_business?.id]);

  return (
    <>
      <Box className={`${classes.root} second-nav-root`} sx={color && { backgroundColor: color }}>
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {title && (
              <Typography variant="h5" className={classes.title}>
                {title}
              </Typography>
            )}
            {ncc && (
              <Box className={`${classes.header} second-nav-title`} sx={{ marginTop: '10px' }}>
                <Box className={`${classes.header} second-nav-title`}>
                  <button
                    variant="contained"
                    className={classes.joinBtnNavbar}
                    onClick={handleRegisterClick}
                    style={
                      color && {
                        backgroundColor: color
                      }
                    }>
                    {' '}
                    Join
                  </button>
                </Box>
              </Box>
            )}
            {business && isLoggedIn() && (
              <>
                {!businessFollowData?.[0]?.business_id ? (
                  <Box className={`${classes.header} second-nav-title`} sx={{ marginTop: '10px' }}>
                    <Box className={`${classes.header} second-nav-title`}>
                      <form onSubmit={onSubmit}>
                        <button
                          variant="contained"
                          className={classes.joinBtnNavbar}
                          type="submit"
                          // onClick={handleRegisterClick}
                          style={{
                            backgroundColor: '#276FC4'
                          }}>
                          {' '}
                          {get_business_follow_loading ? (
                            <Skeleton
                              variant="rounded"
                              width="100%"
                              height={20}
                              style={{ backgroundColor: 'gray' }}
                            />
                          ) : (
                            'Follow'
                          )}
                          {/* Follow */}
                        </button>
                      </form>
                    </Box>
                  </Box>
                ) : (
                  <Box className={`${classes.header} second-nav-title`} sx={{ marginTop: '10px' }}>
                    <Box className={`${classes.header} second-nav-title`}>
                      <button
                        variant="contained"
                        className={classes.joinBtnNavbar}
                        type="submit"
                        // onClick={handleRegisterClick}
                        style={{
                          backgroundColor: '#fff',
                          display: 'flex',
                          color: '#276FC4'
                        }}>
                        {' '}
                        {get_business_follow_loading ? (
                          <Skeleton
                            variant="rounded"
                            width="100%"
                            height={20}
                            style={{ backgroundColor: 'gray' }}
                          />
                        ) : (
                          <div style={{ display: 'flex' }}>
                            Following
                            <span style={{ marginLeft: '5px' }}>
                              <CheckCircleIcon sx={{ color: '#276FC4' }} />
                            </span>
                          </div>
                        )}
                      </button>
                    </Box>
                  </Box>
                )}
              </>
            )}
            {nbns && isLoggedIn() && (
              <>
                {businessFollowData?.business_follower_nbns?.length !== '0' ? (
                  <Box className={`${classes.header} second-nav-title`} sx={{ marginTop: '10px' }}>
                    <Box className={`${classes.header} second-nav-title`}>
                      <button
                        variant="contained"
                        className={classes.joinBtnNavbar}
                        type="submit"
                        // onClick={handleRegisterClick}
                        style={{
                          backgroundColor: '#fff',
                          color: '#276FC4',
                          display: 'flex'
                        }}>
                        {' '}
                        {get_business_follow_loading ? (
                          <Skeleton
                            variant="rounded"
                            width="100%"
                            height={20}
                            style={{ backgroundColor: 'gray' }}
                          />
                        ) : (
                          <div style={{ display: 'flex' }}>
                            Following
                            <span style={{ marginLeft: '5px' }}>
                              <CheckCircleIcon sx={{ color: '#276FC4' }} />
                            </span>
                          </div>
                        )}{' '}
                      </button>
                    </Box>
                  </Box>
                ) : (
                  <Box className={`${classes.header} second-nav-title`} sx={{ marginTop: '10px' }}>
                    <Box className={`${classes.header} second-nav-title`}>
                      <form onSubmit={onSubmit}>
                        <button
                          variant="contained"
                          className={classes.joinBtnNavbar}
                          type="submit"
                          // onClick={handleRegisterClick}
                          style={{
                            backgroundColor: '#276FC4'
                          }}>
                          {' '}
                          {get_business_follow_loading ? (
                            <Skeleton
                              variant="rounded"
                              width="100%"
                              height={20}
                              style={{ backgroundColor: 'gray' }}
                            />
                          ) : (
                            'Follow'
                          )}
                        </button>
                      </form>
                    </Box>
                  </Box>
                )}
              </>
            )}
          </Box>
          <ul className={`${classes.list} second-nav-list`}>
            {options?.map((list, index) => (
              <li
                className={checkActive(list?.value)}
                key={index}
                onClick={() => {
                  handleOptionClick(list.value);
                  list.clickFunction();
                }}>
                {list?.title}
              </li>
            ))}
          </ul>
        </Container>
      </Box>
      <CustomModal open={openRegister} handleClose={openFunctionRegister} width={`22rem`}>
        <Register
          handleClose={openFunctionRegister}
          loginOpen={openFunction}
          defaultNccCountry={filteredNcc?.nccID1?.country_name}
        />
      </CustomModal>
    </>
  );
};

export default SecondaryNav;
