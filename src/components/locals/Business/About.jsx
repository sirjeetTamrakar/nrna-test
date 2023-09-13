const About = ({ singleBusinessData }) => {
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
        <div dangerouslySetInnerHTML={{ __html: singleBusinessData?.description }} />
      </p>
    </div>
  );
};

export default About;
