import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/material';
import CustomDeleteModal from 'components/common/CustomModal/CustomDeleteModal';
import CustomPopover from 'components/common/CustomPopover/CustomPopover';
import CustomTable from 'components/common/table';
import useToggle from 'hooks/useToggle';
import { useState } from 'react';
import { useStyles } from './styles';
const Contact = () => {
  const [openDelete, deleteOpenFunction] = useToggle(false);
  const [detail, setDetail] = useState();
  const classes = useStyles();

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
            <ul className={classes.listWrapper}>
              <li onClick={() => handleDelete(row)}>Delete</li>
            </ul>
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

  const handleDelete = (row) => {
    setDetail(row);
    deleteOpenFunction();
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
          <Box>Contact</Box>
        </Box>
        <CustomTable tableHeads={tableHeads} tableData={tableData} />
        <CustomDeleteModal open={openDelete} handleClose={deleteOpenFunction} />
      </Box>
    </>
  );
};

export default Contact;
