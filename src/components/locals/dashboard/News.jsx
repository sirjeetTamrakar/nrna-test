import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, Typography } from '@mui/material';
import CustomPopover from 'components/common/CustomPopover/CustomPopover';
import CustomTable from 'components/common/table';

const News = () => {
  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },

    {
      title: 'Title',
      minWidth: 250,
      field: 'title'
    },
    {
      title: 'Created by',
      minWidth: 120,
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
      title: 'Approved By',
      minWidth: 150,
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
              <Typography>View News</Typography>
              <Typography>Delete</Typography>
            </Box>
          </CustomPopover>
        );
      }
    }
  ];
  const tableData = [
    {
      title: 'A meteor shower and a satellite train caught on camera',
      slug: 'a_meteor_shower',
      created_by: 'Bishwo Raj Raut',
      created_at: '20-Aug-2023',
      approved_by: 'Yogen Bahadur Chhetri'
    },
    {
      title: 'A meteor shower and a satellite train caught on camera',
      slug: 'a_meteor_shower',
      created_by: 'Bishwo Raj Raut',
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
          <Box>News</Box>
          <Button startIcon={<AddIcon />} variant="contained" display="flex">
            Add News
          </Button>
        </Box>
        <CustomTable tableHeads={tableHeads} tableData={tableData} />
      </Box>
    </>
  );
};

export default News;
