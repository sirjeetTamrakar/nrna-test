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
import CustomStatusModal from 'components/common/CustomModal/CustomStatusModal';
import CustomPopover from 'components/common/CustomPopover/CustomPopover';
import CustomTable from 'components/common/table';
import useToggle from 'hooks/useToggle';
import { useState } from 'react';
import Edit from './Edit';
import Register from './Register';
import View from './View';
import { useStyles } from './styles';
const Member = () => {
  const [openForm, formOpenFunction] = useToggle(false);
  const [openEdit, editOpenFunction] = useToggle(false);
  const [openDelete, deleteOpenFunction] = useToggle(false);
  const [openStatus, statusOpenFunction] = useToggle(false);
  const [openApprove, approveOpenFunction] = useToggle(false);
  const [openView, viewOpenFunction] = useToggle(false);
  const [detail, setDetail] = useState();
  const [page, setPage] = useState();
  const [rowsPerPage, setRowsPerPage] = useState();
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
            <Typography variant="subtitle1">{row?.created_at}</Typography>
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
            {row?.approved_by ? (
              <Box display="flex" columnGap={0.5}>
                <TaskAltIcon sx={{ color: 'green' }} />
                <Typography color={'green'}>Approved</Typography>
              </Box>
            ) : row?.rejected_by ? (
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
            {row?.status === 'Active' ? (
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
              <li onClick={() => handleApprove(row)}>Approve User</li>
              <li onClick={() => handleDelete(row)}>Delete</li>
            </ul>
          </CustomPopover>
        );
      }
    }
  ];

  const tableData = [
    {
      name: 'Bishwo Raj Raut',
      slug: 'brraut',
      email: 'bishowraut@gmail.com',
      phone: '9841587582',
      country_of_residence: 'Nepal',
      city: 'Kathmandu',
      created_at: '20-Aug-2023',
      approved_by: 'Yogen Bahadur Chhetri',
      rejected_by: '',
      role: 'Super Admin',
      status: 'Active'
    },
    {
      name: 'Bishwo Raj Raut',
      slug: 'brraut',
      email: 'bishowraut@gmail.com',
      phone: '9841587582',
      country_of_residence: 'Nepal',
      city: 'Kathmandu',
      created_at: '20-Aug-2023',
      approved_by: '',
      rejected_by: 'Yogen Bahadur Chhetri',
      role: 'Super Admin',
      status: 'Active'
    },
    {
      name: 'Bishwo Raj Raut',
      slug: 'brraut',
      email: 'bishowraut@gmail.com',
      phone: '9841587582',
      country_of_residence: 'Nepal',
      city: 'Kathmandu',
      created_at: '20-Aug-2023',
      approved_by: '',
      rejected_by: '',
      role: 'Super Admin',
      status: 'Inactive'
    }
  ];

  const handleEdit = (row) => {
    setDetail(row);
    editOpenFunction();
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
          tableData={tableData}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
          total={30}
        />
        <CustomModal
          open={openForm}
          handleClose={formOpenFunction}
          modalTitle="Create Member"
          modalSubtitle="Become a member of NRNA Global"
          icon={<PersonAddIcon />}
          width={`40rem`}>
          <Register />
        </CustomModal>
        <CustomModal
          open={openEdit}
          handleClose={editOpenFunction}
          modalTitle={`Update Member`}
          modalSubtitle="Become a member of NRNA Global"
          icon={<PersonAddIcon />}
          width={`40rem`}>
          <Edit data={detail} />
        </CustomModal>
        <CustomModal
          open={openView}
          handleClose={viewOpenFunction}
          modalTitle={`${detail?.name}`}
          modalSubtitle="Get full detail of the member"
          icon={<PersonIcon />}
          width={`40rem`}>
          <View data={detail} />
        </CustomModal>
        <CustomDeleteModal open={openDelete} handleClose={deleteOpenFunction} />
        <CustomStatusModal
          open={openStatus}
          handleClose={statusOpenFunction}
          status={detail?.status}
        />
        <CustomApproveModal open={openApprove} handleClose={approveOpenFunction} row={detail} />
      </Box>
    </>
  );
};

export default Member;
