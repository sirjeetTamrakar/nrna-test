import CandidateImage1 from 'assets/images/candidate1.png';
import CandidateImage2 from 'assets/images/candidate2.png';
import CandidateImage3 from 'assets/images/candidate3.png';
import { Link, useParams } from 'react-router-dom';

const CommitteeMembers = () => {
  const candidates = [
    {
      id: '1',
      image: CandidateImage1,
      name: 'John Doe',
      username: 'john',
      designation: 'Manager'
    },
    {
      id: 2,
      image: CandidateImage2,
      name: 'Jason Momoa',
      username: 'jason',
      designation: 'Manager'
    },

    {
      id: 3,
      image: CandidateImage3,
      name: 'Chris Bumsterd',
      username: 'chris',
      designation: 'Manager'
    }
  ];
  const { ncc } = useParams();
  return (
    <div className="main_content">
      <section className="all_events">
        <div className="all_events_title">All Committee Members</div>
        <div className="container">
          <div className="row">
            {candidates && candidates?.length > 0 ? (
              candidates?.map((committee, index) => (
                <div className="col-md-3" key={index}>
                  <Link
                    to={`/ncc/${ncc}/committee/${committee?.username}`}
                    className="candidateCard">
                    <div className="img_container">
                      <img src={committee?.image} alt="" />
                    </div>
                    <div className="candidateCard_content_wrap">
                      <div className="candidateCard_title text-center">{committee?.name}</div>
                      <div className="candidateCard_subtitle text-center">
                        {committee?.designation}
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-md-12 mt-5 mb-5">
                <h3 className="text-center">No Members available</h3>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommitteeMembers;
