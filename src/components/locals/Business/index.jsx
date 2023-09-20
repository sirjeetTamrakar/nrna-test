import { Box, CircularProgress } from '@mui/material';
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
  console.log('dasldsalda', business_category?.[0]?.id);
  const [filteredBusiness, setFilteredBusiness] = useState();

  const [selected, setSelected] = useState();
  const [search, setSearch] = useState('');
  useEffect(() => {
    setSelected(business_category?.[0]?.id);
  }, [business_category]);

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
          Number(list?.business_category_id) === Number(selected)
      );
      setFilteredBusiness(newBusiness);
    }
  }, [search, business, selected, business_category]);

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
