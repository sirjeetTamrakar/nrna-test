import { Box, Typography } from '@mui/material';
import CustomTable from 'components/common/table';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeDateFormat } from 'utils/dateUtils';
import { getParticipants } from '../redux/actions';
const Participants = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState();
  const [rowsPerPage, setRowsPerPage] = useState();
  const { participants, participants_loading } = useSelector((state) => state.question);
  console.log({ participants });
  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },

    {
      title: 'Name',
      minWidth: 150,
      field: (row) => {
        return <Typography variant="body2">{row?.first_name}</Typography>;
      }
    },
    {
      title: 'Email/Phone',
      minWidth: 100,
      field: (row) => {
        console.log({ row });
        return (
          <Box>
            <Typography variant="body2">{row?.email}</Typography>
            <Typography variant="subtitle1">{row?.phone}</Typography>
          </Box>
        );
      }
    },

    {
      title: 'Country of residence',
      minWidth: 120,
      field: (row) => {
        return <Typography variant="body2">{` ${row?.country_of_residence}`}</Typography>;
      }
    },

    {
      title: 'Participated Date',
      minWidth: 120,
      field: (row) => {
        return <Typography variant="subtitle1">{changeDateFormat(row?.created_at)}</Typography>;
      }
    }
    // {
    //   title: 'Survey',
    //   minWidth: 100,
    //   field: (row) => {
    //     return (
    //       <Box>
    //         <Button
    //           variant="contained"
    //           color="success"
    //           sx={{ width: '100px' }}
    //           onClick={() => navigate(`/dashboard/survey/participants/${row?.id}`)}>
    //           View
    //         </Button>
    //       </Box>
    //     );
    //   }
    // }
  ];

  useEffect(() => {
    dispatch(getParticipants());
  }, []);

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
          tableData={participants?.data}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
          loading={participants_loading}
          total={30}
        />
      </Box>
    </>
  );
};

export default Participants;
