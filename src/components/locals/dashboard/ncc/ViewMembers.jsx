import { Box, Typography } from '@mui/material';
import CustomTable from 'components/common/table';
import useToggle from 'hooks/useToggle';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './styles';

const ViewMembers = ({ data }) => {
  const dispatch = useDispatch();
  const [openDelete, deleteOpenFunction] = useToggle(false);
  const [openView, viewOpenFunction] = useToggle(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [detail, setDetail] = useState();
  const classes = useStyles();
  const { user } = useSelector((state) => state.auth);
  const { contact, contact_loading, contact_delete_loading } = useSelector(
    (state) => state.homepage
  );

  console.log('dataattt', { data });

  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },

    {
      title: 'Name',
      minWidth: 200,
      field: (row) => {
        return (
          <Box>
            <Typography variant="body2">{row?.first_name}</Typography>
          </Box>
        );
      }
    },
    {
      title: 'Email',
      minWidth: 200,
      field: (row) => {
        return (
          <Box>
            <Typography variant="body2">{row?.email}</Typography>
          </Box>
        );
      }
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
          <Box>{data?.country_name}'s NCC Members</Box>
        </Box>
        <CustomTable
          tableHeads={tableHeads}
          tableData={data?.members}
          loading={contact_loading}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
          total={data?.members?.length}
        />
      </Box>
    </>
  );
};

export default ViewMembers;
