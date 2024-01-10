import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  getBusiness,
  getBusinessCategory,
  getSingleNCC,
  resetBusinessState
} from 'redux/homepage/actions';
import SecondaryNav from './SecondaryNav';

const BusinessNcc = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  console.log({ location });

  const { user } = useSelector((state) => state.auth);
  const { business, business_loading, business_category, business_category_loading, single_ncc } =
    useSelector((state) => state.homepage);
  const { ncc } = useParams();
  const [filteredBusiness, setFilteredBusiness] = useState();
  const [selected, setSelected] = useState();

  useEffect(() => {
    setSelected(location?.state ? location?.state : selected ? selected : 'ALL');
  }, [location?.state, business_category]);
  const [search, setSearch] = useState('');
  console.log('dsadddddddcxx', { filteredBusiness });
  useEffect(() => {
    const finalData = {
      country: ncc
    };
    dispatch(getBusiness(finalData));
    dispatch(getBusinessCategory());
  }, []);
  console.log({ ncc });

  console.log({ single_ncc });
  useEffect(() => {
    dispatch(getSingleNCC(ncc));
  }, [ncc]);

  useEffect(() => {
    dispatch(resetBusinessState());
  }, []);

  useEffect(() => {
    if (business) {
      const newBusiness = business?.data?.filter(
        (list) =>
          list?.fullname?.toLowerCase()?.includes(search?.toLowerCase()) &&
          Number(list?.business_category_id) == Number(selected)
      );
      setFilteredBusiness(selected === 'ALL' ? business?.data : newBusiness);
    }
  }, [search, business?.data, selected, business_category]);

  console.log('cxcxcxcxcxcx', { ncc });
  return (
    <>
      <SecondaryNav
        category={business_category}
        setSelected={setSelected}
        selected={selected}
        setSearch={setSearch}
        id={ncc}
        color={'#fff'}
        business
        data={business?.data}
      />
      <div className="main_content">
        <section className="all_events">
          {/* <div className="all_events_title">Business</div> */}
          <div className="container">
            <div className="row">
              {filteredBusiness?.length > 0
                ? filteredBusiness?.map((businessItem) => (
                    // <NewsCard
                    //   key={newsItem.id}
                    //   news={newsItem}
                    //   linkUrl={`/ncc/${ncc}/news/${newsItem?.slug}`}
                    // />
                    <div key={businessItem?.id} className={'col-md-4 col-lg-3 col-sm-6 col-12'}>
                      <Link
                        to={`/ncc/${ncc}/business/${businessItem.slug}`}
                        className="political_item">
                        <div className="img_container">
                          <img src={businessItem?.image} alt="" />
                        </div>
                        <div
                          style={{ paddingBottom: '10px' }}
                          className="political_item_title text-center">
                          {businessItem.fullname}
                        </div>
                      </Link>
                    </div>
                  ))
                : ''}
            </div>
            {business_loading || business_category_loading ? (
              <Box display="flex" justifyContent="center" alignItems="center">
                <CircularProgress size={24} />
              </Box>
            ) : (
              filteredBusiness?.length === 0 && (
                <div className="col-md-12 mt-5 mb-5">
                  <h3 className="text-center">No business available</h3>
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default BusinessNcc;
