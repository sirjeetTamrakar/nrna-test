import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { useSelector } from 'react-redux';
import ContactForm from './Form';

const Contact = ({ siteSettings, handleSubmit }) => {
  const { settings } = useSelector((state) => state.homepage);
  return (
    <section className="contact_page" id="contact_main" style={{ background: '#e5e5e58f' }}>
      <div className="contact_page_title">Contact Us</div>
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
                  <LocationOnIcon />
                  <span className="contact_list_item">{settings?.address || ''}</span>
                </li>
                <li>
                  <PhoneIcon />
                  <span className="contact_list_item">{settings?.phone || ''}</span>
                </li>
                <li>
                  <EmailIcon />
                  <span className="contact_list_item">{settings?.email || ''}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
