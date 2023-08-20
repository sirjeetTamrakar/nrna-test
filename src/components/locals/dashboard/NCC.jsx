import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, Typography } from '@mui/material';
import CustomPopover from 'components/common/CustomPopover/CustomPopover';
import CustomTable from 'components/common/table';

const NCC = () => {
  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },

    {
      title: 'Country',
      minWidth: 100,

      field: 'country'
    },
    {
      title: 'Member',
      minWidth: 100,

      field: (row) => {
        return (
          <Button variant="contained" color="primary">
            {row?.members}
          </Button>
        );
      }
    },
    {
      title: 'Committee',
      minWidth: 100,

      field: (row) => {
        return (
          <Button variant="contained" color="primary">
            {row?.committee}
          </Button>
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
              <Button variant="contained" color="success">
                Active
              </Button>
            ) : (
              <Button variant="contained" color="error">
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
      country: 'Nepal',
      slug: 'nepal',
      members: 456,
      committee: 24,
      status: 'Active'
    },
    {
      country: 'United Kingdom',
      slug: 'uk',
      members: 456,
      committee: 24,
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
          <Box>NCC</Box>
          <Button startIcon={<AddIcon />} variant="contained" display="flex">
            Add NCC
          </Button>
        </Box>
        <CustomTable tableHeads={tableHeads} tableData={tableData} />
      </Box>
    </>
  );
};

export default NCC;
