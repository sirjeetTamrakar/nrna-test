import { Box, Button, CircularProgress, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBusiness, getBusinessCategory, getSiteSettings } from 'redux/homepage/actions';
import BusinessItem from './BusinessItem';
import BusinessItemOne from './BusinessItemOne';
import SecondaryNav from './SecondaryNav';

const Business = () => {
  const dispatch = useDispatch();
  const { business, business_category, business_loading, business_category_loading, settings } =
    useSelector((state) => state.homepage);
  console.log('dasldsalda', business_category?.[0]?.id);
  const [filteredBusiness, setFilteredBusiness] = useState();
  const [allFilteredBusiness, setAllFilteredBusiness] = useState();
  const [businessLimit, setBusinessLimit] = useState(9);
  const [selected, setSelected] = useState();
  const [search, setSearch] = useState('');
  useEffect(() => {
    setSelected(location?.state ? location?.state : selected ? selected : 'ALL');
  }, [business_category]);

  console.log({ selected });

  useEffect(() => {
    const finalData = {
      limit: businessLimit
    };
    dispatch(getBusiness(finalData));
    dispatch(getBusinessCategory());
  }, [businessLimit]);

  // useEffect(() => {
  //   if (business) {
  //     const allNewBusiness = business?.filter((list) =>
  //       list?.fullname?.toLowerCase()?.includes(search?.toLowerCase())
  //     );
  //     setAllFilteredBusiness(allNewBusiness);
  //   }
  // }, [search, business]);

  useEffect(() => {
    if (business?.data) {
      const newBusiness = business?.data?.filter(
        (list) =>
          list?.fullname?.toLowerCase()?.includes(search?.toLowerCase()) &&
          Number(list?.business_category_id) === Number(selected)
      );
      setFilteredBusiness(selected === 'ALL' ? business?.data : newBusiness);
    }
  }, [search, business?.data, selected, business_category]);

  const handleShowMore = () => {
    setBusinessLimit((prev) => prev + 4);
  };

  useEffect(() => {
    dispatch(getSiteSettings());
  }, []);

  console.log({ selected });

  console.log('llll', business?.meta?.total);
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
          <div className="row">
            {filteredBusiness?.length > 0 ? (
              <>
                {selected === 'ALL' ? (
                  <>
                    <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
                      <Grid item sm={5}>
                        {/* {filteredBusiness?.slice(0, 1)?.map((item) => ( */}
                        <div className="">
                          <BusinessItemOne
                            settingsData={settings}
                            mainGrid
                            linkUrl={`/nrna/business`}
                          />
                        </div>
                        {/* ))} */}
                      </Grid>
                      <Grid item sm={7}>
                        <Grid container spacing={2} item>
                          <Grid item sm={4}>
                            {filteredBusiness?.slice(0, 1)?.map((item) => (
                              <div key={item.id} className="" style={{ marginTop: '-30px' }}>
                                <BusinessItem businessItem={item} />
                              </div>
                            ))}
                          </Grid>
                          <Grid item sm={4}>
                            {filteredBusiness?.slice(1, 2)?.map((item) => (
                              <div key={item.id} className="" style={{ marginTop: '-30px' }}>
                                <BusinessItem businessItem={item} />
                              </div>
                            ))}
                          </Grid>
                          <Grid item sm={4}>
                            {filteredBusiness?.slice(2, 3)?.map((item) => (
                              // <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6 col-12">
                              <div key={item.id} className="" style={{ marginTop: '-30px' }}>
                                <BusinessItem businessItem={item} />
                              </div>
                            ))}
                          </Grid>
                          <Grid item sm={4}>
                            {filteredBusiness?.slice(3, 4)?.map((item) => (
                              <div key={item.id} className="" style={{ marginTop: '-60px' }}>
                                {/* <BusinessItem businessItem={item} /> */}
                                <BusinessItem businessItem={item} />
                              </div>
                            ))}
                          </Grid>
                          <Grid item sm={4}>
                            {filteredBusiness?.slice(4, 5)?.map((item) => (
                              <div key={item.id} className="" style={{ marginTop: '-60px' }}>
                                {/* <BusinessItem businessItem={item} /> */}
                                <BusinessItem businessItem={item} />
                              </div>
                            ))}
                          </Grid>
                          <Grid item sm={4}>
                            {filteredBusiness?.slice(5, 6)?.map((item) => (
                              <div key={item.id} className="" style={{ marginTop: '-60px' }}>
                                {/* <BusinessItem businessItem={item} /> */}
                                <BusinessItem businessItem={item} />
                              </div>
                            ))}
                          </Grid>
                          <Grid item sm={4}>
                            {filteredBusiness?.slice(6, 7)?.map((item) => (
                              <div key={item.id} className="" style={{ marginTop: '-60px' }}>
                                {/* <BusinessItem businessItem={item} /> */}
                                <BusinessItem businessItem={item} />
                              </div>
                            ))}
                          </Grid>
                          <Grid item sm={4}>
                            {filteredBusiness?.slice(7, 8)?.map((item) => (
                              <div key={item.id} className="" style={{ marginTop: '-60px' }}>
                                {/* <BusinessItem businessItem={item} /> */}
                                <BusinessItem businessItem={item} />
                              </div>
                            ))}
                          </Grid>
                          <Grid item sm={4}>
                            {filteredBusiness?.slice(8, 9)?.map((item) => (
                              <div key={item.id} className="" style={{ marginTop: '-60px' }}>
                                {/* <BusinessItem businessItem={item} /> */}
                                <BusinessItem businessItem={item} />
                              </div>
                            ))}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    {filteredBusiness?.slice(9)?.map((item) => (
                      <div
                        key={item.id}
                        className="col-xl-3 col-lg-4 col-sm-6 col-12"
                        style={{ marginTop: '-30px' }}>
                        {/* <BusinessItem businessItem={item} /> */}
                        <BusinessItem businessItem={item} />
                      </div>
                    ))}
                  </>
                ) : (
                  filteredBusiness?.map((item) => (
                    <div
                      key={item.id}
                      className="col-xl-3 col-lg-4 col-sm-6 col-12"
                      style={{ marginTop: '-30px' }}>
                      {/* <BusinessItem businessItem={item} /> */}
                      <BusinessItem businessItem={item} />
                    </div>
                  ))
                )}
                <>
                  {business?.meta?.to !== business?.meta?.total &&
                    !(business_loading || business_category_loading) && (
                      <div
                        style={{
                          marginTop: '20px',
                          marginBottom: '20px',
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'center'
                        }}>
                        <Button
                          style={{
                            border: 'none',
                            backgroundColor: '#E1F5FF',
                            color: '#6F83CE',
                            padding: '10px 20px',
                            borderRadius: '4px'
                          }}
                          onClick={handleShowMore}>
                          Show More
                        </Button>
                      </div>
                    )}
                </>
              </>
            ) : (
              ''
            )}
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
    </>
  );
};

export default Business;
