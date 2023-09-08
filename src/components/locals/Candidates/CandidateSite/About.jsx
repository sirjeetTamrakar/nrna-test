const About = () => {
  return (
    <div>
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
        The design, written content, and visual or video elements together tell an important story
        about who you are and why you do it.In this article, you’ll learn what makes an exceptional.
        Distilling your company’s ethos into a single web page sounds daunting at first. But the
        task becomes a lot more manageable when you realize that the best person for the job is you
        – after all, who knows more about your company and its values than yourself? On their about
        page, you’ll find a humorous 50-second video along with a short list of facts summarizing
        their love for tacos, travel, and karate – a theme that certainly permeates most of the
        content on the website. Because as much as you love good design and inspiring illustrations,
        you also want to meet the people that curate all the content for you. Furthermore, it’s
        equally rewarding when you realize that they are just as eager to start a visual dialogue
        with you. Nathan Strandberg and Katie Kirk are doing what makes them happy, and this is
        obvious. The first thing to keep in mind is that your About Us page is not just about you –
        it’s about what you can do for potential customers, and why you should be the one to do it.
        Therefore, you’ll want to make sure you provide some background on both your products and
        your team. You’ll also want to emphasize the core values that make your company unique.
      </p>
    </div>
  );
};

export default About;

// import AboutImg from 'assets/images/about.png';

// const About = ({ siteSettingImages, title = 'About' }) => {
//   const aboutImage = siteSettingImages?.about_image?.path
//     ? siteSettingImages.about_image.path
//     : AboutImg;

//   const aboutText =
//     'International Coordination Council (ICC) is the highest global representative executive body of the NRNA and provides overall guidance and directives to the executive committee. Each NCC nominates its members, in a number as prescribed by the NRNA Charter, to represent itself to the ICC. ICC also includes additional members co-opted by the ICC through its meetings. To seek advice on various issues of the NRNs, the ICC also nominates a number of recognized individuals as ICC Advisors.';
//   return (
//     <section className="about" id="about_main">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-5 col-xl-5">
//             <div className="img_container text-center">
//               <img src={aboutImage} alt="" />
//             </div>
//           </div>
//           <div className="col-lg-7 col-xl-7" id="about-section">
//             <div className="about_title">{title}dsa</div>
//             <div className="about_description">
//               <p>{aboutText || 'About Data Not Added'}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
