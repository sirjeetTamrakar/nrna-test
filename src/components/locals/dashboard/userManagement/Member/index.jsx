import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Box, Button, Typography } from '@mui/material';
import CustomApproveModal from 'components/common/CustomModal/CustomApproveModal';
import CustomDeleteModal from 'components/common/CustomModal/CustomDeleteModal';
import CustomModal from 'components/common/CustomModal/CustomModal';
import CustomRoleChangeModal from 'components/common/CustomModal/CustomRoleChnageModal';
import CustomStatusModal from 'components/common/CustomModal/CustomStatusModal';
import CustomPopover from 'components/common/CustomPopover/CustomPopover';
import CustomTable from 'components/common/table';
import useToggle from 'hooks/useToggle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDateFormat } from 'utils/dateUtils';
import { changeApproval, changeStatus, getAllUsers } from '../redux/actions';
import Edit from './Edit';
import Register from './Register';
import { useStyles } from './styles';
import View from './View';
const Member = () => {
  const dispatch = useDispatch();
  const [openForm, formOpenFunction] = useToggle(false);
  const [openEdit, editOpenFunction] = useToggle(false);
  const [openDelete, deleteOpenFunction] = useToggle(false);
  const [openRole, roleOpenFunction] = useToggle(false);
  const [openStatus, statusOpenFunction] = useToggle(false);
  const [openApprove, approveOpenFunction] = useToggle(false);
  const [openView, viewOpenFunction] = useToggle(false);
  const { users, users_loading, user_status_loading, approve_user_loading } = useSelector(
    (state) => state.user
  );
  console.log({ users });
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
            <Typography variant="body2">{row?.name}</Typography>
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
            <Typography variant="body2">{row?.email}</Typography>
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
          <Typography variant="body2">{`${row?.city}, ${row?.country_of_residence}`}</Typography>
        );
      }
    },

    {
      title: 'Role',
      minWidth: 100,
      field: 'role'
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
      title: 'Status',
      minWidth: 100,
      field: (row) => {
        return (
          <Box>
            {row?.status === 1 ? (
              <Button
                variant="contained"
                color="success"
                onClick={() => handleStatus(row)}
                sx={{ width: '100px' }}>
                Active
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={{ width: '100px' }}
                color="error"
                onClick={() => handleStatus(row)}>
                Inactive
              </Button>
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
              <li onClick={() => handleEdit(row)}>Edit Member </li>
              <li onClick={() => handleView(row)}>View Details</li>
              <li onClick={() => handleRole(row)}>Change role</li>
              <li onClick={() => handleApprove(row)}>Approve User</li>
              <li onClick={() => handleDelete(row)}>Delete</li>
            </ul>
          </CustomPopover>
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

  const handleStatus = (row) => {
    setDetail(row);
    statusOpenFunction();
  };

  const handleApprove = (row) => {
    setDetail(row);
    approveOpenFunction();
  };

  const handleView = (row) => {
    setDetail(row);
    viewOpenFunction();
  };

  const handleChangeStatus = () => {
    dispatch(
      changeStatus(detail?.username, { status: detail?.status == 1 ? 0 : 1 }, () => {
        statusOpenFunction();
        refetch();
      })
    );
  };

  const handleApproveStatus = (value) => {
    const status = value === 'approved' ? 'approved' : 'rejected';
    dispatch(
      changeApproval(detail?.username, { approval_status: status }, () => {
        approveOpenFunction();
        refetch();
      })
    );
  };

  const refetch = () => {
    const data = { page: page + 1, pagination_limit: rowsPerPage };
    dispatch(getAllUsers(data));
  };

  useEffect(() => {
    refetch();
  }, [page, rowsPerPage]);

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
          <Box>Member</Box>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            display="flex"
            onClick={formOpenFunction}>
            Add Member
          </Button>
        </Box>
        <CustomTable
          tableHeads={tableHeads}
          tableData={users?.data}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          loading={users_loading}
          setPage={setPage}
          total={users?.meta?.total}
        />
        <CustomModal
          open={openForm}
          handleClose={formOpenFunction}
          modalTitle="Create Member"
          modalSubtitle="Become a member of NRNA Global"
          icon={<PersonAddIcon />}
          width={`40rem`}>
          <Register handleClose={formOpenFunction} />
        </CustomModal>
        <CustomModal
          open={openEdit}
          handleClose={editOpenFunction}
          modalTitle={`Update Member`}
          modalSubtitle="Become a member of NRNA Global"
          icon={<PersonAddIcon />}
          width={`40rem`}>
          <Edit data={detail} handleClose={editOpenFunction} refetch={refetch} />
        </CustomModal>
        <CustomModal
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
          // handleConfirm={handleChangeStatus}
          handleClose={roleOpenFunction}
          // status={detail?.status == 1 ? 'Active' : 'Inactive'}
          isLoading={user_status_loading}
        />
        <CustomDeleteModal open={openDelete} handleClose={deleteOpenFunction} />
        <CustomStatusModal
          open={openStatus}
          handleConfirm={handleChangeStatus}
          handleClose={statusOpenFunction}
          status={detail?.status == 1 ? 'Active' : 'Inactive'}
          isLoading={user_status_loading}
        />
        <CustomApproveModal
          open={openApprove}
          handleClose={approveOpenFunction}
          row={detail}
          isLoading={approve_user_loading}
          handleApprove={() => handleApproveStatus('approved')}
          handleReject={() => handleApproveStatus('rejected')}
        />
      </Box>
    </>
  );
};

export default Member;
