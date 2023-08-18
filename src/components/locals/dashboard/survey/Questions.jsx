import { Box, Button } from '@mui/material';
import CustomTable from 'components/common/table';

const Questions = () => {
  const tableHeads = [
    { title: 'S.N.', type: 'Index', isSortable: true, minWidth: 20 },

    {
      title: 'Question',
      minWidth: 100,
      isSortable: true,
      field: 'name'
    },
    {
      title: 'Option A',
      minWidth: 100,
      isSortable: true,
      field: 'option_a'
    },
    {
      title: 'Option B',
      minWidth: 100,
      isSortable: true,
      field: 'option_b'
    },
    {
      title: 'Option C',
      minWidth: 100,
      isSortable: true,
      field: 'option_c'
    },
    {
      title: 'Option D',
      minWidth: 100,
      isSortable: true,
      field: 'option_d'
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
          <Box>Questions</Box>
          <Button sx={{ marginLeft: 'auto' }} variant="contained">
            Add
          </Button>
        </Box>
        <CustomTable tableHeads={tableHeads} />
      </Box>
    </>
  );
};

export default Questions;
