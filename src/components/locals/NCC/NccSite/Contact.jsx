import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CustomButton from 'components/common/CustomButton/CustomButton';
import CustomForm from 'components/common/Form/CustomForm';
import CustomFormProvider from 'components/common/Form/CustomFormProvider';
import CustomInput from 'components/common/Form/CustomInput';
import CustomTextArea from 'components/common/Form/CustomTextarea';
import PageBanner from 'components/globals/PageBanner';
import useYupValidationResolver from 'hooks/useYupValidationResolver';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { contactUs, getSingleNCC } from 'redux/homepage/actions';
import * as Yup from 'yup';

const Contact = ({ siteSettings, handleSubmit }) => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    name: Yup.string().required('Please enter name'),
    email: Yup.string().required('Please enter email'),
    phone: Yup.string().required('Please enter phone').min(10).max(10),
    message: Yup.string().required('Please enter description')
  });

  const { single_ncc, contact_loading } = useSelector((state) => state.homepage);
  const { setValue } = useForm({});
  const { ncc } = useParams();
  useEffect(() => {
    dispatch(getSingleNCC(ncc));
  }, [ncc]);
  const handleSuccess = () => {
    const array = ['name', 'email', 'phone', 'message'];
    array?.map((item) => setValue(item, ''));
  };

  const submitHandler = (data) => {
    console.log('businessFormData', { data });
    dispatch(
      contactUs({ ...data, contactable_type: 'ncc', contactable_id: single_ncc?.id }, handleSuccess)
    );
  };

  return (
    <>
      <PageBanner />
      <section className="contact_page" id="contact_main" style={{ background: '#e5e5e58f' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 offset-md-1">
              <div className="contact_content">
                <div className="contact_content_title">Contact Information</div>
                <div className="contact_content_subtitle">
                  Fill up the form to get in touch with the NRNA Global team.
                </div>
                <ul className="contact_list">
                  <li>
                    <i className="fa fa-map-marker-alt"></i>
                    <span className="contact_list_item">{single_ncc?.address || ''}</span>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>
                    <span className="contact_list_item">{siteSettings?.phone || ''}</span>
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <span className="contact_list_item">{siteSettings?.email || ''}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact_form" style={{ paddingTop: '-20px' }}>
                <CustomFormProvider resolver={useYupValidationResolver(validationSchema)}>
                  <Box>
                    <CustomForm onSubmit={submitHandler}>
                      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                        <Grid item sm={12}>
                          <CustomInput
                            name="name"
                            label="Name"
                            placeholder="Guy Hawkins"
                            rows={15}
                          />
                        </Grid>
                        <Grid item sm={6}>
                          <CustomInput
                            name="email"
                            label="Email address"
                            type="email"
                            placeholder="guy.hawkin@gmail.com"
                            rows={15}
                          />
                        </Grid>
                        <Grid item sm={6}>
                          <CustomInput
                            name="phone"
                            label="Phone"
                            placeholder="Enter Subject"
                            rows={15}
                          />
                        </Grid>
                        <Grid item sm={12}>
                          <CustomInput
                            name="subject"
                            label="Subject"
                            placeholder="Enter Subject"
                            rows={15}
                          />
                        </Grid>
                        <Grid item sm={12}>
                          <CustomTextArea
                            name="message"
                            label="Message"
                            placeholder="Say something"
                            rows={5}
                          />
                        </Grid>
                        <Grid item sm={12}>
                          <Box>
                            <CustomButton buttonName="Submit Form" loading={contact_loading} />
                          </Box>
                        </Grid>
                      </Grid>
                    </CustomForm>
                  </Box>
                </CustomFormProvider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
