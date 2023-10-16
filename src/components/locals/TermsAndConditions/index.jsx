import { useEffect } from 'react';

const TermsAndConditions = () => {
  const pathname = window.location.pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="container" style={{ padding: '40px 0px' }}>
      <div className="policy_page">
        <div style={{ paddingBottom: '20px' }}>
          <h2 style={{ color: '#2C266C' }}>Terms And Conditions</h2>
        </div>

        <div className="about_description_single">
          <div style={{ backgroundColor: '#f5f5ff', padding: '20px', borderRadius: '4px' }}>
            <h5 style={{ color: '#423b8a', marginBottom: '10px' }}>
              Terms and Conditions Sample Generator Help protect your website and its users with
              clear and fair website terms and conditions.
            </h5>
            <p>
              These terms and conditions for a website set out key issues such as acceptable use,
              privacy, cookies, registration and passwords, intellectual property, links to other
              sites, termination and disclaimers of responsibility. Terms and conditions are used
              and necessary to protect a website owner from liability of a user relying on the
              information or the goods provided from the site then suffering a loss. Making your own
              terms and conditions for your website is hard, not impossible, to do. It can take a
              few hours to few days for a person with no legal background to make. But worry no
              more; we are here to help you out. All you need to do is fill up the blank spaces and
              then you will receive an email with your personalized terms and conditions.
              <br />
              Terms and Conditions Sample Generator Help protect your website and its users with
              clear and fair website terms and conditions. These terms and conditions for a website
              set out key issues such as acceptable use, privacy, cookies, registration and
              passwords, intellectual property, links to other sites, termination and disclaimers of
              responsibility. Terms and conditions are used and necessary to protect a website owner
              from liability of a user relying on the information or the goods provided from the
              site then suffering a loss. Making your own terms and conditions for your website is
              hard, not impossible, to do. It can take a few hours to few days for a person with no
              legal background to make. But worry no more; we are here to help you out. All you need
              to do is fill up the blank spaces and then you will receive an email with your
              personalized terms and conditions.
              <br />
            </p>
            <h5 style={{ color: '#423b8a', marginBottom: '10px' }}>
              All you need to do is fill up the blank spaces and then you will receive an email with
              your personalized terms and conditions.
            </h5>
            <p>
              These terms and conditions for a website set out key issues such as acceptable use,
              privacy, cookies, registration and passwords, intellectual property, links to other
              sites, termination and disclaimers of responsibility. Terms and conditions are used
              and necessary to protect a website owner from liability of a user relying on the
              information or the goods provided from the site then suffering a loss. Making your own
              terms and conditions for your website is hard, not impossible, to do. It can take a
              few hours to few days for a person with no legal background to make. But worry no
              more; we are here to help you out. All you need to do is fill up the blank spaces and
              then you will receive an email with your personalized terms and conditions.
              <br />
              Terms and Conditions Sample Generator Help protect your website and its users with
              clear and fair website terms and conditions. These terms and conditions for a website
              set out key issues such as acceptable use, privacy, cookies, registration and
              passwords, intellectual property, links to other sites, termination and disclaimers of
              responsibility. Terms and conditions are used and necessary to protect a website owner
              from liability of a user relying on the information or the goods provided from the
              site then suffering a loss. Making your own terms and conditions for your website is
              hard, not impossible, to do. It can take a few hours to few days for a person with no
              legal background to make. But worry no more; we are here to help you out. All you need
              to do is fill up the blank spaces and then you will receive an email with your
              personalized terms and conditions.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
