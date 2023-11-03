import { Box, Typography } from '@mui/material';
import CustomTable from 'components/common/table';
import useToggle from 'hooks/useToggle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDateFormat } from 'utils/dateUtils';
import { getBusinessFollow } from '../../redux/actions';

// import {
//   changeApproval,
//   changeUserRole,
//   deleteUsers,
//   setUserSearch
// } from '../../userManagement/redux/actions';
// import { getNCC } from '../redux/actions';
// import {
//   changeApproval,
//   changeStatus,
//   changeUserRole,
//   getAllUsers,
//   getNCC,
//   setUserSearch
// } from '../redux/actions';
import { useStyles } from './styles';
const ViewFollowerTable = ({ countrySlug, businessId }) => {
  const dispatch = useDispatch();
  const [openForm, formOpenFunction] = useToggle(false);
  const [openEdit, editOpenFunction] = useToggle(false);
  const [openDelete, deleteOpenFunction] = useToggle(false);
  const [openRole, roleOpenFunction] = useToggle(false);
  const [openStatus, statusOpenFunction] = useToggle(false);
  const [openApprove, approveOpenFunction] = useToggle(false);
  const [openView, viewOpenFunction] = useToggle(false);
  const {
    users,
    user_search,
    users_loading,
    user_status_loading,
    approve_user_loading,
    change_role_loading
  } = useSelector((state) => state.user);
  const { user, delete_users_loading } = useSelector((state) => state.auth);
  const { nccData } = useSelector((state) => state.ncc);
  const { businessFollowData } = useSelector((state) => state.business);
  console.log({ user, users, nccData, businessFollowData });
  const [roleIDData, setRoleIDData] = useState();

  // const findNCCUserId = nccData?.data?.filter((item) => item?.slug === user?.ncc?.slug);

  useEffect(() => {
    const newArray = nccData?.data?.filter((item) => item?.slug === user?.ncc?.slug);
    const newObj = {};

    newArray?.forEach((item, index) => {
      newObj[`roleId${index + 1}`] = item;
    });
    setRoleIDData(newObj);
  }, [nccData?.data]);
  console.log('ssssss', roleIDData);

  const [detail, setDetail] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // const [userSearch, setUserSearch] = useState('');
  const classes = useStyles();
  // useEffect(() => {
  //   dispatch(getNCC());
  // }, []);
  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },
    {
      title: 'Name',
      minWidth: 150,
      field: (row) => {
        return (
          <Box>
            <Typography variant="body2">
              {row?.user?.first_name && row?.user?.first_name}{' '}
              {row?.user?.first_name && row?.user?.last_name}{' '}
              {!row?.user?.first_name && row?.user?.username}
            </Typography>
          </Box>
        );
      }
    },
    {
      title: 'Created at',
      minWidth: 150,
      field: (row) => {
        return (
          <Box>
            <Typography variant="subtitle1">{changeDateFormat(row?.created_at)}</Typography>
          </Box>
        );
      }
    },
    {
      title: 'Email/Phone',
      minWidth: 100,
      field: (row) => {
        return (
          <Box>
            <Typography variant="body2">{row?.user?.email}</Typography>
            <Typography variant="subtitle1">{row?.phone}</Typography>
          </Box>
        );
      }
    },

    {
      title: 'Country of residence',
      minWidth: 120,
      field: (row) => {
        return (
          <Typography variant="body2">{` ${row?.user?.country_of_residence ?? '-'}`}</Typography>
        );
      }
    }
  ];

  const handleEdit = (row) => {
    setDetail(row);
    editOpenFunction();
  };

  const handleRole = (row) => {
    setDetail(row);
    roleOpenFunction();
  };

  const handleDelete = (row) => {
    setDetail(row);
    deleteOpenFunction();
  };

  const handleApprove = (row) => {
    setDetail(row);
    approveOpenFunction();
  };

  const handleView = (row) => {
    setDetail(row);
    viewOpenFunction();
  };

  // const handleConfirm = (slug) => {
  //   let typeData;
  //   // if (user?.role_name == Roles?.NCC) {
  //   //   typeData = { id: user?.ncc?.id, page: page + 1, pagination_limit: rowsPerPage };
  //   // } else {
  //   //   typeData = { page: page + 1, pagination_limit: rowsPerPage };
  //   // }
  //   typeData = { page: page + 1, pagination_limit: rowsPerPage, country: countrySlug };

  //   dispatch(deleteUsers(slug, deleteOpenFunction, typeData));
  // };

  // const handleChangeRole = (value) => {
  //   dispatch(
  //     changeUserRole(detail?.username, { role_name: value, _method: 'PATCH' }, () => {
  //       roleOpenFunction();
  //       refetch();
  //     })
  //   );
  // };

  // const handleApproveStatus = (value) => {
  //   const status = value === 'approved' ? 'approved' : 'rejected';
  //   dispatch(
  //     changeApproval(detail?.username, { approval_status: status, _method: 'PATCH' }, () => {
  //       approveOpenFunction();
  //       refetch();
  //     })
  //   );
  // };

  // const handleUserSearch = (e) => {
  //   setPage(0);
  //   dispatch(setUserSearch(inputValue));
  //   e.preventDefault();
  // };
  // const [inputValue, setInputValue] = useState(''); // Track the input field value

  // const nameChangeHandler = (e) => {
  //   const newValue = e.target.value;
  //   setInputValue(newValue); // Update the input field value
  //   const timeout = setTimeout(() => {
  //     dispatch(setUserSearch(e.target.value));
  //   }, [1000]);
  //   return () => clearTimeout(timeout);
  // };

  // const nameClearHandler = () => {
  //   setPage(0);
  //   setInputValue('');
  //   dispatch(setUserSearch(''));
  // };

  // console.log({ userSearch });

  // const filterData = { search: user_search };
  // const refetch = () => {
  //   // let roleData;
  //   // if (user?.role_name === 'ncc') {
  //   //   const roleData = { country: countrySlug };
  //   //   dispatch(getAllUsers(filterData, roleData));
  //   // } else {
  //   //   dispatch(getAllUsers(filterData));
  //   // }
  //   const roleData = { business_id: detail?.id };
  //   dispatch(getBusinessFollow( roleData));
  // };

  // useEffect(() => {
  //   // let roleData;
  //   // if (user?.role_name === 'ncc') {
  //   //   const roleData = { country: countrySlug };
  //   //   dispatch(getAllUsers(filterData, roleData));
  //   // } else {
  //   //   dispatch(getAllUsers(filterData));
  //   // }
  //   const roleData = { country: countrySlug };
  //   dispatch(getAllUsers( roleData));
  // }, [JSON.stringify(filterData)]);

  // useEffect(() => {
  //   // refetch();
  // }, [page, rowsPerPage]);

  const refetch = () => {
    const data = { page: page + 1, pagination_limit: rowsPerPage, business_id: businessId };
    dispatch(getBusinessFollow(data));
  };

  useEffect(() => {
    refetch();
  }, [page, rowsPerPage, businessId]);

  return (
    <>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '15px'
          }}>
          <Box>
            <Box sx={{ textTransform: 'capitalize' }}>Followers</Box>
            {/* <Box sx={{ marginTop: '10px' }}>
              <form onClick={handleUserSearch}>
                <input
                  style={{
                    padding: '5px 10px',
                    width: '250px',
                    border: 'none',
                    outline: 'none'
                    // borderRadius: '4px'
                  }}
                  type="text"
                  value={inputValue}
                  onChange={nameChangeHandler}
                  placeholder="Search user"
                />

                <button
                  onClick={nameClearHandler}
                  style={
                    inputValue
                      ? {
                          padding: '5px 10px',
                          border: 'none',
                          backgroundColor: '#fff',
                          color: 'red'
                        }
                      : {
                          padding: '5px 10px',
                          border: 'none',
                          backgroundColor: '#fff',
                          color: '#fff'
                        }
                  }>
                  x
                </button>
              </form>
            </Box> */}
          </Box>
          {/* <Button
            startIcon={<AddIcon />}
            variant="contained"
            display="flex"
            onClick={formOpenFunction}>
            Add Member
          </Button> */}
        </Box>
        <CustomTable
          tableHeads={tableHeads}
          tableData={businessFollowData}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          loading={users_loading}
          setPage={setPage}
          total={businessFollowData?.data?.length}
        />
        {/* <CustomModal
          open={openForm}
          handleClose={formOpenFunction}
          modalTitle="Create Member"
          modalSubtitle="Become a member of NRNA Global"
          icon={<PersonAddIcon />}
          width={`40rem`}>
          <Register handleClose={formOpenFunction} countrySlug={countrySlug} />
        </CustomModal> */}
        {/* <CustomModal
          open={openEdit}
          handleClose={editOpenFunction}
          modalTitle={`Update Member`}
          modalSubtitle="Become a member of NRNA Global"
          icon={<PersonAddIcon />}
          width={`40rem`}>
          <Edit
            data={detail}
            handleClose={editOpenFunction}
            refetch={refetch}
            countrySlug={countrySlug}
          />
        </CustomModal> */}
        {/* <CustomModal
          open={openView}
          handleClose={viewOpenFunction}
          modalTitle="Get full detail of the member"
          // modalSubtitle="Get full detail of the member"
          icon={<PersonIcon />}
          width={`40rem`}>
          <View data={detail} />
        </CustomModal>
        <CustomRoleChangeModal
          open={openRole}
          handleConfirm={handleChangeRole}
          handleClose={roleOpenFunction}
          role={detail?.role_name}
          isLoading={change_role_loading}
        /> */}
        {/* <CustomDeleteModal open={openDelete} handleClose={deleteOpenFunction} /> */}
        {/* <CustomDeleteModal
          handleConfirm={handleConfirm}
          slug={detail?.id}
          open={openDelete}
          handleClose={deleteOpenFunction}
          isLoading={delete_users_loading}
        /> */}
        {/* <CustomApproveModal
          open={openApprove}
          handleClose={approveOpenFunction}
          row={detail}
          isLoading={approve_user_loading}
          handleApprove={() => handleApproveStatus('approved')}
          handleReject={() => handleApproveStatus('rejected')}
        /> */}
      </Box>
    </>
  );
};

export default ViewFollowerTable;
