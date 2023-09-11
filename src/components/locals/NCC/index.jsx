import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNcc } from 'redux/homepage/actions';
import NCCItem from './NCCItem';
import SecondaryNav from './SecondaryNav';

const AllNCCSection = () => {
  const dispatch = useDispatch();
  const { ncc, ncc_loading } = useSelector((state) => state.homepage);
  const [filteredNcc, setFilteredNcc] = useState([]);

  useEffect(() => {
    dispatch(getNcc());
  }, []);

  const category = [
    {
      title: 'Asia',
      slug: 'Asia'
    },
    {
      title: 'Europe',
      slug: 'Europe'
    },
    {
      title: 'North America',
      slug: 'North America'
    },
    {
      title: 'South America',
      slug: 'South_America'
    },
    {
      title: 'Africa',
      slug: 'Africa'
    },
    {
      title: 'Australia',
      slug: 'Oceania'
    }
  ];
  const [selected, setSelected] = useState(category?.[0]?.slug);
  console.log('selected', { selected });

  const filteredNCC = ncc?.filter((item) => item?.continent === selected);
  console.log({ filteredNCC });

  useEffect(() => {
    if (ncc) {
      const data = ncc?.filter((list) => list?.continent == selected);
      setFilteredNcc(data);
    }
  }, [ncc, selected]);

  return (
    <>
      <SecondaryNav category={category} setSelected={setSelected} selected={selected} />
      <section className="all_events">
        <div className="container">
          {ncc_loading ? (
            <Box display="flex" justifyContent="center" height="60vh" alignItems="center">
              <CircularProgress size={24} />
            </Box>
          ) : (
            <div className="row">
              {filteredNcc?.length > 0 ? (
                filteredNcc?.map((nccItem) => (
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
    </>
  );
};

export default AllNCCSection;
