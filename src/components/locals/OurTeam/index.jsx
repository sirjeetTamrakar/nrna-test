import CandidateImage1 from 'assets/images/candidate1.png';
import CandidateImage2 from 'assets/images/candidate2.png';
import CandidateImage3 from 'assets/images/candidate3.png';
import OurTeamCard from './OurTeamCard';

const OurTeam = () => {
  const candidates = [
    {
      id: '1',
      image: CandidateImage1,
      name: 'John Doe',
      username: 'john'
    },
    {
      id: 2,
      image: CandidateImage2,
      name: 'Jason Momoa',
      username: 'jason'
    },
    { id: 3, image: CandidateImage3, name: 'Chris Bumsterd', username: 'chris' }
  ];
  return (
    <div className="main_content">
      <section className="all_events">
        <div className="all_events_title">Our Team</div>
        <div className="container">
          <div className="row">
            {candidates.length > 0 ? (
              candidates.map((candidate) => (
                <div key={candidate.id} className="col-xl-3 col-md-4 col-sm-6 col-12">
                  <OurTeamCard candidate={candidate} />
                </div>
              ))
            ) : (
              <div className="col-md-12 mt-5 mb-5">
                <h3 className="text-center">No candidates available</h3>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
