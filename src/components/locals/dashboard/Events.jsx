import { Box, Button } from '@mui/material';
import CustomTable from 'components/common/table';

const Events = () => {
  const tableHeads = [
    { title: 'S.N.', type: 'Index', isSortable: true, minWidth: 20 },

    {
      title: 'Title',
      minWidth: 100,
      isSortable: true,
      field: 'title'
    },
    {
      title: 'Start date',
      minWidth: 100,
      isSortable: true,
      field: 'start_date'
    },
    {
      title: 'End date',
      minWidth: 100,
      isSortable: true,
      field: 'end_date'
    },
    {
      title: 'location',
      minWidth: 100,
      isSortable: true,
      field: 'location'
    },
    {
      title: 'Map url',
      minWidth: 100,
      isSortable: true,
      field: 'map_url'
    },
    {
      title: 'time',
      minWidth: 100,
      isSortable: true,
      field: 'time'
    },
    {
      title: 'Created by',
      minWidth: 100,
      isSortable: true,
      field: 'created_by'
    },
    {
      title: 'Created at',
      minWidth: 100,
      isSortable: true,
      field: 'created_at'
    },
    {
      title: 'Status',
      minWidth: 100,
      isSortable: true,
      field: 'status'
    },
    {
      title: 'NRNA front',
      minWidth: 100,
      isSortable: true,
      field: 'nrna_front'
    },
    {
      title: 'NCC front',
      minWidth: 100,
      isSortable: true,
      field: 'ncc_front'
    },
    {
      title: 'Approved by',
      minWidth: 100,
      isSortable: true,
      field: 'approved_by'
    },
    {
      title: 'View',
      minWidth: 100,
      isSortable: true,
      field: 'view'
    },
    {
      title: 'Action',
      minWidth: 100,
      isSortable: true,
      field: 'action'
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
            marginBottom: '40px'
          }}>
          <Box>News</Box>
          <Button sx={{ marginLeft: 'auto' }} variant="contained">
            Add
          </Button>
        </Box>
        <CustomTable tableHeads={tableHeads} />
      </Box>
    </>
  );
};

export default Events;
