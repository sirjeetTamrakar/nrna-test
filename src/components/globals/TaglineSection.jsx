const TaglineSection = ({ taglineAuthor }) => {
  const tagline =
    'The date of inauguration of the First NRN Global Conference, i e., 11th October 2003 is considered to be the establishment date of NRNA';
  return (
    <section className="tagline">
      <div className="container">
        <div className="tagline_title">{tagline ? tagline.replace(/(<([^>]+)>)/gi, '') : ''}</div>
        <div className="tagline_name">- {taglineAuthor ? taglineAuthor : 'Author'}</div>
      </div>
    </section>
  );
};

export default TaglineSection;
