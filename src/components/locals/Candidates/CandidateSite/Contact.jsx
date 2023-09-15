import { Box, Grid } from '@mui/material';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import CustomInput from 'components/common/Form/CustomInput';
import CustomTextArea from 'components/common/Form/CustomTextarea';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleUser, teamsContactUs } from 'redux/homepage/actions';
import { useStyles } from './styles';

const Contact = ({ siteSettings }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { candidate } = useParams();
  const { single_user, teams_contact_loading } = useSelector((state) => state.homepage);
  console.log('ffffffff', { teams_contact_loading });
  useEffect(() => {
    dispatch(getSingleUser(candidate));
  }, [candidate]);
  const { setValue } = useForm({});
  const handleSuccess = () => {
    const array = ['name', 'email', 'phone', 'message'];
    array?.map((item) => setValue(item, ''));
  };
  const submitHandler = (data) => {
    console.log({ data });
    dispatch(teamsContactUs({ ...data, user_id: single_user?.id }, handleSuccess));
  };

  return (
    <section className="contact_page" id="contact_main">
      <div className="contact_page_title">Contact us</div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 offset-md-1">
            <div className="contact_content">
              <div className="contact_content_title">Contact Information</div>
              <div className="contact_content_subtitle">
                Fill up the form to get in touch with the candidate and fill up the form.
              </div>
              <ul className="contact_list">
                <li>
                  <i className="fa fa-map-marker-alt"></i>
                  <span className="contact_list_item">{single_user?.address || ''}</span>
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  <span className="contact_list_item">{single_user?.phone || ''}</span>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <span className="contact_list_item">{single_user?.email || ''}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact_form" style={{ paddingTop: '-20px' }}>
              <CustomFormProvider>
                <Box className={classes.contactRoot}>
                  <CustomForm onSubmit={submitHandler}>
                    <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                      <Grid item sm={12}>
                        <CustomInput name="name" label="Name" placeholder="Enter your name" />
                      </Grid>
                      <Grid item sm={6}>
                        <CustomInput
                          name="email"
                          label="Email"
                          type="email"
                          placeholder="Enter your email"
                        />
                      </Grid>
                      <Grid item sm={6}>
                        <CustomInput name="phone" label="Phone" placeholder="Enter your phone" />
                      </Grid>
                      <Grid item sm={12}>
                        <CustomTextArea
                          name="message"
                          label="Description"
                          placeholder="Write some message"
                          rows={5}
                        />
                      </Grid>
                      <Grid item sm={12}>
                        <Box className={classes.footerRoot}>
                          <CustomButton buttonName="Submit Form" loading={teams_contact_loading} />
                        </Box>
                      </Grid>
                    </Grid>
                  </CustomForm>
                </Box>
              </CustomFormProvider>
              {/* <div className="form-group">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  id=""
                  cols="30"
                  rows="4"
                  required></textarea>
              </div>
              <div className="btn_container">
                <button type="submit" className="btn-md">
                  Send
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
