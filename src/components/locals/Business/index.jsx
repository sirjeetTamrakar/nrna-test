import { Box, CircularProgress } from '@mui/material';
import CandidateImage1 from 'assets/images/candidate1.png';
import CandidateImage2 from 'assets/images/candidate2.png';
import CandidateImage3 from 'assets/images/candidate3.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBusiness, getBusinessCategory } from 'redux/homepage/actions';
import BusinessItem from './BusinessItem';
import SecondaryNav from './SecondaryNav';

const Business = () => {
  const dispatch = useDispatch();
  const { business, business_category, business_loading, business_category_loading } = useSelector(
    (state) => state.homepage
  );
  console.log({ business });
  const [filteredBusiness, setFilteredBusiness] = useState();

  const [selected, setSelected] = useState(business_category?.[0]?.id);
  const [search, setSearch] = useState('');

  console.log({ selected });

  useEffect(() => {
    dispatch(getBusiness());
    dispatch(getBusinessCategory());
  }, []);

  useEffect(() => {
    if (business) {
      const newBusiness = business?.filter(
        (list) =>
          list?.fullname?.toLowerCase()?.includes(search?.toLowerCase()) &&
          list?.business_category_id == Number(selected)
      );
      setFilteredBusiness(newBusiness);
    }
  }, [search, business, selected, business_category]);

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
  const category = [
    {
      title: 'Tech & IT',
      slug: 'advisory_board'
    },
    {
      title: 'Consultancy',
      slug: 'board_of_directors'
    },
    {
      title: 'Construction',
      slug: 'general_members'
    },
    {
      title: 'Restaurant',
      slug: 'task_force'
    },
    {
      title: 'Travel & Tours',
      slug: 'travel'
    },
    {
      title: 'Education',
      slug: 'education'
    },
    {
      title: 'Entertainment',
      slug: 'entertainment'
    }
  ];

  return (
    <>
      <SecondaryNav
        category={business_category}
        setSelected={setSelected}
        selected={selected}
        setSearch={setSearch}
      />
      <section className="all_events">
        <div className="container">
          {business_loading || business_category_loading ? (
            <Box display="flex" justifyContent="center" height="60vh" alignItems="center">
              <CircularProgress size={24} />
            </Box>
          ) : (
            <div className="row">
              {filteredBusiness?.length > 0 ? (
                filteredBusiness?.map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6 col-12">
                    <BusinessItem businessItem={item} />
                  </div>
                ))
              ) : (
                <div className="col-md-12 mt-5 mb-5">
                  <h3 className="text-center">No business available</h3>
                </div>
              )}
            </div>
          )}
        </div>
        {/* <div className="container">
          <div className="row">
            {filteredBusiness.length > 0 ? (
              filteredBusiness.map((item) => (
                <div key={item.id} className="col-md-3">
                  <BusinessItem businessItem={item} />
                </div>
              ))
            ) : (
              <div className="col-md-12 mt-5 mb-5">
                <h3 className="text-center">No Business items available</h3>
              </div>
            )}
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Business;
