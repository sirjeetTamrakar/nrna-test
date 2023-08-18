import { Box, Button } from '@mui/material';
import CustomTable from 'components/common/table';

const Advice = () => {
  const tableHeads = [
    { title: 'S.N.', type: 'Index', isSortable: true, minWidth: 20 },

    {
      title: 'Subject',
      minWidth: 100,
      isSortable: true,
      field: 'subject'
    },
    {
      title: 'Name',
      minWidth: 100,
      isSortable: true,
      field: 'name'
    },
    {
      title: 'Email',
      minWidth: 100,
      isSortable: true,
      field: 'email'
    },
    {
      title: 'Advice',
      minWidth: 100,
      isSortable: true,
      field: 'advice'
    },
    {
      title: 'Status',
      minWidth: 100,
      isSortable: true,
      field: 'status'
    },
    {
      title: 'Actions',
      minWidth: 100,
      isSortable: true,
      field: 'actions'
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
          <Box>Advice</Box>
          <Button sx={{ marginLeft: 'auto' }} variant="contained">
            Add
          </Button>
        </Box>
        <CustomTable tableHeads={tableHeads} />
      </Box>
    </>
  );
};

export default Advice;
