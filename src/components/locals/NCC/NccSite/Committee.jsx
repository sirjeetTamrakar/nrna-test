import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getDepartment, getSingleNCC, getTeams } from 'redux/homepage/actions';
import SecondaryNav from './SecondaryNav';

const CommitteeMembers = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  console.log({ location });

  const { user } = useSelector((state) => state.auth);
  const { teams, team_loading, department, department_loading, single_ncc } = useSelector(
    (state) => state.homepage
  );
  const [filteredTeams, setFilteredTeams] = useState();
  console.log({ filteredTeams });
  const { ncc } = useParams();
  const [selected, setSelected] = useState();
  useEffect(() => {
    setSelected(location?.state ? location?.state : department?.[0]?.id);
  }, [location?.state, department]);
  const [search, setSearch] = useState('');
  console.log('dsadddddddcxx', { selected, filteredTeams, single_ncc });
  useEffect(() => {
    dispatch(getTeams({ ncc_id: single_ncc?.id }));
    dispatch(getDepartment({ ncc_id: single_ncc?.id }));
  }, []);

  useEffect(() => {
    if (teams) {
      const newTeams = teams?.filter(
        (list) =>
          list?.member?.name?.toLowerCase()?.includes(search?.toLowerCase()) &&
          list?.our_team_category_id == Number(selected)
      );
      setFilteredTeams(newTeams);
    }
  }, [search, teams, selected, department]);
  useEffect(() => {
    dispatch(getSingleNCC(ncc));
  }, [ncc]);

  console.log('cxcxcxcxcxcx', { ncc });

  // const { ncc } = useParams();

  return (
    <>
      <SecondaryNav
        category={department}
        setSelected={setSelected}
        selected={selected}
        setSearch={setSearch}
        id={ncc}
        teams
        color={single_ncc?.color}
      />
      <div className="main_content">
        <section className="all_events">
          <div className="all_events_title">All Committee Members</div>
          <div className="container">
            <div className="row">
              {filteredTeams && filteredTeams?.length > 0 ? (
                filteredTeams?.map((committee, index) => (
                  <div className="col-md-3" key={index}>
                    <Link
                      to={`/ncc/${ncc}/committee/${committee?.member?.username}`}
                      className="candidateCard">
                      <div className="img_container">
                        <img src={committee?.member?.profile_image} alt="" />
                      </div>
                      <div className="candidateCard_content_wrap">
                        <div className="candidateCard_title text-center">
                          {committee?.member?.name}
                        </div>
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
    </>
  );
};

export default CommitteeMembers;
