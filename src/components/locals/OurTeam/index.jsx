import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartment, getTeams } from 'redux/homepage/actions';
import OurTeamCard from './OurTeamCard';
import SecondaryNav from './secondaryNav';

const OurTeam = () => {
  const dispatch = useDispatch();
  const { teams, team_loading, department, department_loading } = useSelector(
    (state) => state.homepage
  );
  const [filteredTeam, setFilteredTeam] = useState();

  const [selected, setSelected] = useState();
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSelected(department?.[0]?.id);
  }, [department]);

  useEffect(() => {
    dispatch(getTeams());
    dispatch(getDepartment());
  }, []);

  useEffect(() => {
    if (teams) {
      const newTeam = teams?.filter(
        (list) =>
          list?.member?.name?.toLowerCase()?.includes(search?.toLowerCase()) &&
          list?.our_team_category_id == Number(selected)
      );
      setFilteredTeam(newTeam);
    }
  }, [search, teams, selected, department]);

  return (
    <>
      <SecondaryNav
        departments={department}
        selected={selected}
        setSelected={setSelected}
        setSearch={setSearch}
      />
      <section className="all_events">
        <div className="container">
          {team_loading || department_loading ? (
            <Box display="flex" justifyContent="center" height="60vh" alignItems="center">
              <CircularProgress size={24} />
            </Box>
          ) : (
            <div className="row">
              {filteredTeam?.length > 0 ? (
                filteredTeam?.map((candidate) => (
                  <div key={candidate.id} className="col-xl-3 col-lg-4 col-sm-6 col-12">
                    <OurTeamCard candidate={candidate} />
                  </div>
                ))
              ) : (
                <div className="col-md-12 mt-5 mb-5">
                  <h3 className="text-center">No candidates available</h3>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default OurTeam;
