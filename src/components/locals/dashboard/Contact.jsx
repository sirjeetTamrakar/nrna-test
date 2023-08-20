import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Typography } from '@mui/material';
import CustomPopover from 'components/common/CustomPopover/CustomPopover';
import CustomTable from 'components/common/table';
const Contact = () => {
  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },

    {
      title: 'Subject',
      minWidth: 250,

      field: 'subject'
    },
    {
      title: 'Name',
      minWidth: 100,

      field: 'name'
    },
    {
      title: 'Email',
      minWidth: 100,

      field: 'email'
    },
    {
      title: 'Date',
      minWidth: 100,

      field: 'created_at'
    },

    {
      title: 'Actions',
      minWidth: 85,
      field: (row) => {
        return (
          <CustomPopover ButtonComponent={<MoreVertIcon />}>
            <Box padding={2}>
              <Typography>View Message</Typography>
              <Typography>Delete</Typography>
            </Box>
          </CustomPopover>
        );
      }
    }
  ];

  const tableData = [
    {
      subject: 'Canada wildfires: The past 2 days in 75 seconds',
      name: 'Bishwo Raj Raut',
      email: 'bishowraut@gmail.com',
      message:
        'Canada wildfires: The past 2 days in 75 seconds Canada wildfires: The past 2 days in 75 seconds Canada wildfires: The past 2 days in 75 secondsCanada wildfires: The past 2 days in 75 seconds Canada wildfires: The past 2 days in 75 secondsCanada wildfires: The past 2 days in 75 secondsCanada wildfires: The past 2 days in 75 secondsCanada wildfires: The past 2 days in 75 seconds Canada wildfires: The past 2 days in 75 seconds Canada wildfires: The past 2 days in 75 seconds Canada wildfires: The past 2 days in 75 secondsCanada wildfires: The past 2 days in 75 seconds Canada wildfires: The past 2 days in 75 secondsCanada wildfires: The past 2 days in 75 secondsCanada wildfires: The past 2 days in 75 secondsCanada wildfires: The past 2 days in 75 seconds Canada wildfires: The past 2 days in 75 seconds Canada wildfires: The past 2 days in 75 seconds Canada wildfires: The past 2 days in 75 secondsCanada wildfires: The past 2 days in 75 seconds Canada wildfires: The past 2 days in 75 secondsCanada wildfires: The past 2 days in 75 secondsCanada wildfires: The past 2 days in 75 secondsCanada wildfires: The past 2 days in 75 seconds Canada wildfires: The past 2 days in 75 seconds Canada wildfires: The past 2 days in 75 seconds Canada wildfires: The past 2 days in 75 secondsCanada wildfires: The past 2 days in 75 seconds Canada wildfires: The past 2 days in 75 secondsCanada wildfires: The past 2 days in 75 secondsCanada wildfires: The past 2 days in 75 secondsCanada wildfires: The past 2 days in 75 seconds',
      created_at: '20-Aug-2023'
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
          <Box>Contact</Box>
        </Box>
        <CustomTable tableHeads={tableHeads} tableData={tableData} />
      </Box>
    </>
  );
};

export default Contact;
