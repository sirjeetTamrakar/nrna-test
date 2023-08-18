import { Box, Button } from '@mui/material';
import CustomTable from 'components/common/table';

const OurTeam = () => {
  const tableHeads = [
    { title: 'S.N.', type: 'Index', isSortable: true, minWidth: 20 },

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
      field: 'member'
    },
    {
      title: 'Phone',
      minWidth: 100,
      isSortable: true,
      field: 'phone'
    },

    {
      title: 'Country of Resident',
      minWidth: 100,
      isSortable: true,
      field: 'country_of_resident'
    },
    {
      title: 'City',
      minWidth: 100,
      isSortable: true,
      field: 'city'
    },
    {
      title: 'Position',
      minWidth: 100,
      isSortable: true,
      field: 'position'
    },
    {
      title: 'Order',
      minWidth: 100,
      isSortable: true,
      field: 'order'
    },
    {
      title: 'Join date',
      minWidth: 100,
      isSortable: true,
      field: 'join date'
    },

    {
      title: 'Role',
      minWidth: 100,
      isSortable: true,
      field: 'role'
    },
    {
      title: 'Status',
      minWidth: 100,
      isSortable: true,
      field: 'Status'
    },
    {
      title: 'View profile',
      minWidth: 100,
      isSortable: true,
      field: 'view_profile'
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
          <Box>Our Team</Box>
          <Button sx={{ marginLeft: 'auto' }} variant="contained">
            Add
          </Button>
        </Box>
        <CustomTable tableHeads={tableHeads} />
      </Box>
    </>
  );
};

export default OurTeam;
