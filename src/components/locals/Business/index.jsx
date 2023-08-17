import CandidateImage1 from 'assets/images/candidate1.png';
import CandidateImage2 from 'assets/images/candidate2.png';
import CandidateImage3 from 'assets/images/candidate3.png';
import NCCItem from './BusinessItem';

const Business = () => {
  const nccItems = [
    {
      id: '1',
      image: CandidateImage1,
      name: 'Restaurant',
      username: 'portugal'
    },
    {
      id: 2,
      image: CandidateImage2,
      name: 'Hotels',
      username: 'usa'
    },
    { id: 3, image: CandidateImage3, name: 'IT Company', username: 'uk' },
    {
      id: 2,
      image: CandidateImage2,
      name: 'Laundry',
      username: 'usa'
    }
  ];
  return (
    <div className="main_content">
      <section className="all_events">
        <div className="all_events_title">Business</div>
        <div className="container">
          <div className="row">
            {nccItems.length > 0 ? (
              nccItems.map((nccItem) => (
                <div key={nccItem.id} className="col-md-3">
                  <NCCItem nccItem={nccItem} />
                </div>
              ))
            ) : (
              <div className="col-md-12 mt-5 mb-5">
                <h3 className="text-center">No NCC items available</h3>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;
