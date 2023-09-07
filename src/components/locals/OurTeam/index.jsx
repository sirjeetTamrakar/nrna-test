import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeams } from 'redux/homepage/actions';
import OurTeamCard from './OurTeamCard';
import SecondaryNav from './SecondaryNav';

const OurTeam = () => {
  const dispatch = useDispatch();
  const { teams, team_loading } = useSelector((state) => state.homepage);
  const [filteredTeam, setFilteredTeam] = useState();

  const departments = [
    {
      title: 'Advisory Board',
      slug: 'advisory_board'
    },
    {
      title: 'Board of Directors',
      slug: 'board_of_directors'
    },
    {
      title: 'General Members',
      slug: 'general_members'
    },
    {
      title: 'Task Force',
      slug: 'task_force'
    }
  ];
  const [selected, setSelected] = useState(departments?.[0]?.slug);
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(getTeams());
  }, []);

  useEffect(() => {
    if (teams) {
      const newTeam = teams?.filter((list) =>
        list?.member?.name?.toLowerCase()?.includes(search?.toLowerCase())
      );
      setFilteredTeam(newTeam);
    }
  }, [search, teams]);

  return (
    <>
      <SecondaryNav
        departments={departments}
        selected={selected}
        setSelected={setSelected}
        setSearch={setSearch}
      />
      <section className="all_events">
        <div className="container">
          {team_loading ? (
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
