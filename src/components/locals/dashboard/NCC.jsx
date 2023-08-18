import { Box, Button } from '@mui/material';
import CustomTable from 'components/common/table';

const NCC = () => {
  const tableHeads = [
    { title: 'S.N.', type: 'Index', isSortable: true, minWidth: 20 },

    {
      title: 'Country',
      minWidth: 100,
      isSortable: true,
      field: 'country'
    },
    {
      title: 'Member',
      minWidth: 100,
      isSortable: true,
      field: 'member'
    },
    {
      title: 'Committee',
      minWidth: 100,
      isSortable: true,
      field: 'committee'
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
          <Box>NCC</Box>
          <Button sx={{ marginLeft: 'auto' }} variant="contained">
            Add
          </Button>
        </Box>
        <CustomTable tableHeads={tableHeads} />
      </Box>
    </>
  );
};

export default NCC;
