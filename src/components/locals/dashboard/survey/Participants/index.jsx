import { Box, Button, Typography } from '@mui/material';
import CustomTable from 'components/common/table';
import { useState } from 'react';
const Participants = () => {
  const [page, setPage] = useState();
  const [rowsPerPage, setRowsPerPage] = useState();
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
      title: 'Date',
      minWidth: 120,
      field: 'created_at'
    },
    {
      title: 'Survey',
      minWidth: 100,
      field: (row) => {
        return (
          <Box>
            <Button variant="contained" color="success" sx={{ width: '100px' }}>
              View
            </Button>
          </Box>
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
          <Box>Survey Participants</Box>
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
      </Box>
    </>
  );
};

export default Participants;
