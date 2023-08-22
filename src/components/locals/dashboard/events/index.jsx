import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
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
import { useStyles } from './styles';
import View from './View';

const Events = () => {
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
      title: 'Title',
      minWidth: 200,

      field: 'title'
    },
    {
      title: 'Location / Date',
      minWidth: 150,

      field: (row) => {
        return (
          <Box>
            <Typography variant="body2">{row?.location}</Typography>
            <Typography variant="subtitle1">{`${row?.start_date}, ${row?.time}`}</Typography>
          </Box>
        );
      }
    },

    {
      title: 'Created by',
      minWidth: 150,

      field: (row) => {
        return (
          <Box>
            <Typography variant="body2">{row?.created_by}</Typography>
            <Typography variant="subtitle1">{row?.created_at}</Typography>
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
            {row?.approved_by ? (
              <Button variant="contained" color="success" onClick={() => handleStatus(row)}>
                Approved
              </Button>
            ) : (
              <Button variant="contained" color="error" onClick={() => handleStatus(row)}>
                Rejected
              </Button>
            )}
          </Box>
        );
      }
    },

    {
      title: 'Approved by',
      minWidth: 100,
      field: (row) => {
        return <Box>{row?.approved_by ? row?.approved_by : '-'}</Box>;
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
      title: 'Conference on Sustainable Economic growth of Nepal',
      start_date: '20-Aug-2023',
      location: 'NCC Hall, Dillibazar',
      time: '12 PM',
      created_by: 'Ramesh Kharel',
      created_at: '20-Aug-2023',
      approved_by: 'Yogen Bahadur Chhetri'
    },
    {
      title: 'Conference on Sustainable Economic growth of Nepal',
      start_date: '20-Aug-2023',
      location: 'NCC Hall, Dillibazar',
      time: '12 PM',
      created_by: 'Ramesh Kharel',
      created_at: '20-Aug-2023',
      approved_by: ''
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
          <Box>Event</Box>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            display="flex"
            onClick={formOpenFunction}>
            Add Event
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
          modalTitle="Create Event"
          modalSubtitle=""
          icon={<PersonAddIcon />}
          width={`40rem`}>
          <Register />
        </CustomModal>
        <CustomModal
          open={openEdit}
          handleClose={editOpenFunction}
          modalTitle={`Update Event`}
          modalSubtitle=""
          icon={<PersonAddIcon />}
          width={`40rem`}>
          <Edit data={detail} />
        </CustomModal>
        <CustomModal
          open={openView}
          handleClose={viewOpenFunction}
          modalTitle={`${detail?.name}`}
          modalSubtitle="Get full detail "
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

export default Events;
