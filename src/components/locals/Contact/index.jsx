const Contact = ({ siteSettings, handleSubmit }) => {
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
                  <i className="fa fa-map-marker-alt"></i>
                  <span className="contact_list_item">{siteSettings?.address || ''}</span>
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
            <form onSubmit={handleSubmit} className="contact_form">
              <div className="form-group">
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
