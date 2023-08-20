import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, Typography } from '@mui/material';
import CustomPopover from 'components/common/CustomPopover/CustomPopover';
import CustomTable from 'components/common/table';
const OurTeam = () => {
  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },

    {
      title: 'Name',
      minWidth: 180,
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
      minWidth: 100,
      field: (row) => {
        return (
          <Typography variant="body2">{`${row?.city}, ${row?.country_of_residence}`}</Typography>
        );
      }
    },
    {
      title: 'Designation',
      minWidth: 100,
      field: 'designation'
    },
    {
      title: 'Order',
      minWidth: 100,
      field: 'order'
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
              <Typography>View Profile</Typography>
              <Typography>Delete</Typography>
            </Box>
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
      designation: 'Chairman',
      order: '1',
      status: 'Active'
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
          <Box>Our Team</Box>
          <Button startIcon={<AddIcon />} variant="contained" display="flex">
            Add Our Team
          </Button>
        </Box>
        <CustomTable tableHeads={tableHeads} tableData={tableData} />
      </Box>
    </>
  );
};

export default OurTeam;
