import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, Typography } from '@mui/material';
import CustomPopover from 'components/common/CustomPopover/CustomPopover';
import CustomTable from 'components/common/table';

const Events = () => {
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
              <Button variant="contained" color="success">
                Approved
              </Button>
            ) : (
              <Button variant="contained" color="error">
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
            <Box padding={2}>
              <Typography>View Events</Typography>
              <Typography>Delete</Typography>
            </Box>
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
          <Box>Events</Box>
          <Button startIcon={<AddIcon />} variant="contained" display="flex">
            Add Events
          </Button>
        </Box>
        <CustomTable tableHeads={tableHeads} tableData={tableData} />
      </Box>
    </>
  );
};

export default Events;
