import { Box, CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNcc } from 'redux/homepage/actions';
import NCCItem from './NCCItem';

const AllNCCSection = () => {
  const dispatch = useDispatch();
  const { ncc, ncc_loading } = useSelector((state) => state.homepage);

  useEffect(() => {
    dispatch(getNcc());
  }, []);

  return (
    <div className="main_content">
      <section className="all_events">
        <div className="all_events_title">All NCC</div>
        <div className="container">
          {ncc_loading ? (
            <Box display="flex" justifyContent="center" height="60vh" alignItems="center">
              <CircularProgress size={24} />
            </Box>
          ) : (
            <div className="row">
              {ncc?.length > 0 ? (
                ncc?.map((nccItem) => (
                  <div key={nccItem.id} className="col-6 col-md-4 col-lg-3 col-xl-2">
                    <NCCItem nccItem={nccItem} />
                  </div>
                ))
              ) : (
                <div className="col-md-12 mt-5 mb-5">
                  <h3 className="text-center">No NCC items available</h3>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AllNCCSection;
