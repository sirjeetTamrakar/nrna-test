import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Typography } from '@mui/material';
import CustomDeleteModal from 'components/common/CustomModal/CustomDeleteModal';
import CustomModal from 'components/common/CustomModal/CustomModal';
import CustomPopover from 'components/common/CustomPopover/CustomPopover';
import CustomTable from 'components/common/table';
import useToggle from 'hooks/useToggle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContact } from 'redux/homepage/actions';
import { changeDateFormat } from 'utils/dateUtils';
import { useStyles } from './styles';
import View from './View';

const Contact = () => {
  const dispatch = useDispatch();
  const [openDelete, deleteOpenFunction] = useToggle(false);
  const [openView, viewOpenFunction] = useToggle(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [detail, setDetail] = useState();
  const classes = useStyles();

  // useEffect(() => {
  //   dispatch(getContact());
  // }, []);

  const { contact, contact_loading, contact_delete_loading } = useSelector(
    (state) => state.homepage
  );

  console.log({ contact });

  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },

    {
      title: 'Subject',
      minWidth: 200,
      field: (row) => {
        return (
          <Box>
            <Typography variant="body2">
              {row?.subject?.length > 49 ? `${row?.subject?.substring(0, 50)}...` : row?.subject}
            </Typography>
          </Box>
        );
      }
      // field: 'subject'
    },
    {
      title: 'Name',
      minWidth: 150,

      field: 'name'
    },
    {
      title: 'Email',
      minWidth: 150,

      field: 'email'
    },
    {
      title: 'Date',
      minWidth: 150,

      field: (row) => {
        return changeDateFormat(row?.created_at);
      }
    },

    {
      title: 'Actions',
      minWidth: 85,
      field: (row) => {
        return (
          <CustomPopover ButtonComponent={<MoreVertIcon />}>
            <ul className={classes.listWrapper}>
              <li onClick={() => handleView(row)}>View Details</li>
              <li onClick={() => handleDelete(row)}>Delete</li>
            </ul>
          </CustomPopover>
        );
      }
    }
  ];

  const handleView = (row) => {
    setDetail(row);
    viewOpenFunction();
  };

  const handleDelete = (row) => {
    setDetail(row);
    deleteOpenFunction();
  };

  const confirmDelete = () => {
    dispatch(deleteContact(detail?.id, deleteOpenFunction));
  };

  const refetch = () => {
    const data = { page: page + 1, pagination_limit: rowsPerPage };
    dispatch(getContact(data));
  };

  useEffect(() => {
    refetch();
  }, [page, rowsPerPage]);

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
        <CustomTable
          tableHeads={tableHeads}
          tableData={contact?.data}
          loading={contact_loading}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
          total={contact?.meta?.total}
        />
        <CustomModal
          open={openView}
          handleClose={viewOpenFunction}
          modalTitle={`Contact Details`}
          icon={<PersonIcon />}
          width={`40rem`}>
          <View data={detail} />
        </CustomModal>
        <CustomDeleteModal
          open={openDelete}
          handleClose={deleteOpenFunction}
          handleConfirm={confirmDelete}
          isLoading={contact_delete_loading}
        />
      </Box>
    </>
  );
};

export default Contact;
