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
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDateFormat } from 'utils/dateUtils';
import Edit from './Edit';
import { changeEventsStatus, deleteEvents, getEvents } from './redux/actions';
import Register from './Register';
import { useStyles } from './styles';
import View from './View';

const Events = () => {
  const dispatch = useDispatch();
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

  const { eventsData, get_events_loading } = useSelector((state) => state.events);
  console.log({ eventsData });

  useEffect(() => {
    dispatch(getEvents());
  }, []);

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
            <Typography variant="subtitle1">{`${row?.start_date} ${row?.event_time}`}</Typography>
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
            {row?.status === 'Active' ? (
              <Button
                sx={{ width: '100px' }}
                variant="contained"
                color="success"
                onClick={() => handleStatus(row)}>
                Active
              </Button>
            ) : (
              <Button
                sx={{ width: '100px' }}
                variant="contained"
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
              <li onClick={() => handleEdit(row)}>Edit Event </li>
              <li onClick={() => handleView(row)}>View Details</li>
              <li onClick={() => handleApprove(row)}>Approve User</li>
              <li onClick={() => handleDelete(row)}>Delete</li>
            </ul>
          </CustomPopover>
        );
      }
    }
  ];

  const finalData = eventsData?.map((data) => ({
    ...data,
    created_at: changeDateFormat(data?.created_at),
    created_by: data?.created_by?.name ?? '-',
    location: data?.location ?? '-',
    start_date: data?.start_date ?? '',
    event_time: data?.event_time ?? ''
    // approved_by: data?.created_by?.name ?? '-'
  }));

  console.log({ finalData });

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

  const refetch = () => {
    dispatch(getEvents());
  };

  const handleConfirm = (slug) => {
    dispatch(deleteEvents(slug, refetch));
    deleteOpenFunction();
  };

  const handleStatusConfirm = (slug) => {
    const finalData = {
      slug: slug,
      status: detail?.status === 'Active' ? 'inactive' : 'active',
      // status: true,
      _method: 'PATCH'
    };
    dispatch(changeEventsStatus(finalData, refetch));
    statusOpenFunction();
  };

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
          tableData={finalData}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
          total={30}
          loading={get_events_loading ? true : false}
        />
        <CustomModal
          open={openForm}
          handleClose={formOpenFunction}
          modalTitle="Create Event"
          modalSubtitle=""
          icon={<PersonAddIcon />}
          width={`60rem`}>
          <Register handleClose={formOpenFunction} />
        </CustomModal>
        <CustomModal
          open={openEdit}
          handleClose={editOpenFunction}
          modalTitle={`Update Event`}
          modalSubtitle=""
          icon={<PersonAddIcon />}
          width={`60rem`}>
          <Edit data={detail} handleClose={editOpenFunction} />
        </CustomModal>
        <CustomModal
          open={openView}
          handleClose={viewOpenFunction}
          modalTitle="Events Details"
          // modalSubtitle="Get full detail "
          icon={<PersonIcon />}
          width={`40rem`}>
          <View data={detail} />
        </CustomModal>
        <CustomDeleteModal
          handleConfirm={handleConfirm}
          slug={detail?.slug}
          open={openDelete}
          handleClose={deleteOpenFunction}
          // modalTitle="Delete Events"
        />
        <CustomStatusModal
          open={openStatus}
          handleClose={statusOpenFunction}
          status={detail?.status}
          status={detail?.status === 'Active' ? 'Active' : 'Inactive'}
          id={detail?.slug}
          handleConfirm={handleStatusConfirm}
        />
        <CustomApproveModal open={openApprove} handleClose={approveOpenFunction} row={detail} />
      </Box>
    </>
  );
};

export default Events;
