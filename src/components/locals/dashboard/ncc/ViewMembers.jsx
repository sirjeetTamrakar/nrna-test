import { Box, Typography } from '@mui/material';
import CustomTable from 'components/common/table';
import useToggle from 'hooks/useToggle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDateFormat } from 'utils/dateUtils';
import { useStyles } from './styles';

const ViewMembers = ({ data }) => {
  const dispatch = useDispatch();
  const [openDelete, deleteOpenFunction] = useToggle(false);
  const [openView, viewOpenFunction] = useToggle(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [roleIDData, setRoleIDData] = useState();

  const [detail, setDetail] = useState();
  const classes = useStyles();
  const { user } = useSelector((state) => state.auth);
  const { nccData } = useSelector((state) => state.ncc);

  const { contact, contact_loading, contact_delete_loading } = useSelector(
    (state) => state.homepage
  );

  console.log('dataattt', { data });

  useEffect(() => {
    const newArray = nccData?.data?.filter((item) => item?.slug === user?.ncc?.slug);
    const newObj = {};

    newArray?.forEach((item, index) => {
      newObj[`roleId${index + 1}`] = item;
    });
    setRoleIDData(newObj);
  }, [nccData?.data]);
  console.log('ssssss', roleIDData);

  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },

    {
      title: 'Name',
      minWidth: 200,
      field: (row) => {
        return (
          <Box>
            <Typography variant="body2">
              {row?.first_name} {row?.last_name}
            </Typography>
            <Typography variant="subtitle1">{changeDateFormat(row?.created_at)}</Typography>
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
            <Typography variant="subtitle1">{row?.phone}</Typography>
          </Box>
        );
      }
    },
    {
      title: 'Address',
      minWidth: 120,
      field: (row) => {
        return (
          <Typography variant="body2">{`${row?.city}, ${row?.country_of_residence}`}</Typography>
        );
      }
    },
    {
      title: 'Role',
      minWidth: 100,
      field: (row) => {
        return (
          <>
            <Typography variant="body2">{`${row?.role_name}`}</Typography>
            <Typography variant="body2">{`${
              roleIDData?.roleId1?.admin?.id === row?.id ? 'Admin' : ''
            }`}</Typography>
          </>
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
