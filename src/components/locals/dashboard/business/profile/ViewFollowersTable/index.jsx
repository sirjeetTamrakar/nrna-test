import CancelIcon from '@mui/icons-material/Cancel';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Box, Typography } from '@mui/material';
import CustomPopover from 'components/common/CustomPopover/CustomPopover';
import CustomTable from 'components/common/table';
import useToggle from 'hooks/useToggle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const { businessFollowData, get_business_follow_loading } = useSelector(
    (state) => state.business
  );
  console.log({ user, users, nccData, businessFollowData });
  const [roleIDData, setRoleIDData] = useState();

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
  const classes = useStyles();

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
      title: 'Address',
      minWidth: 120,
      field: (row) => {
        return (
          <Typography variant="body2">{` ${row?.user?.country_of_residence ?? '-'}`}</Typography>
        );
      }
    },

    {
      title: 'Approved',
      minWidth: 100,
      field: (row) => {
        return (
          <Box>
            {row?.approval_status === 'approved' ? (
              <Box display="flex" columnGap={0.5}>
                <TaskAltIcon sx={{ color: 'green' }} />
                <Typography color={'green'}>Approved</Typography>
              </Box>
            ) : row?.approval_status === 'rejected' ? (
              <Box display="flex" columnGap={0.5}>
                <CancelIcon sx={{ color: 'red' }} />
                <Typography color={'red'}>Rejected</Typography>
              </Box>
            ) : (
              <Box display="flex" columnGap={0.5}>
                <PauseCircleFilledIcon sx={{ color: '#2196f3' }} />
                <Typography color={'#2196f3'}>Pending</Typography>
              </Box>
            )}
          </Box>
        );
      }
    },

    {
      title: 'Actions',
      minWidth: 85,
      field: (row) => {
        return (
          <CustomPopover ButtonComponent={<MoreVertIcon />}>
            <ul className={classes.listWrapper}>
              {/* <li onClick={() => handleEdit(row)}>Edit Business </li>
              {(user?.role_name === Roles?.SuperAdmin || user?.role_name === Roles?.Admin) && (
                <li onClick={() => handleApprove(row)}>Approve Business</li>
              )}
              <li onClick={() => handleTableServices(row)}>View services</li>
              <li onClick={() => handleDelete(row)}>Delete</li> */}
              <li>View</li>
            </ul>
          </CustomPopover>
        );
      }
    }
  ];

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
          </Box>
        </Box>
        <CustomTable
          tableHeads={tableHeads}
          tableData={businessFollowData}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          loading={get_business_follow_loading}
          setPage={setPage}
          total={businessFollowData?.data?.length}
        />
      </Box>
    </>
  );
};

export default ViewFollowerTable;
