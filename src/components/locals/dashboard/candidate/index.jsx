import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Box, Button, Typography } from '@mui/material';
import CustomDeleteModal from 'components/common/CustomModal/CustomDeleteModal';
import CustomModal from 'components/common/CustomModal/CustomModal';
import CustomStatusModal from 'components/common/CustomModal/CustomStatusModal';
import CustomPopover from 'components/common/CustomPopover/CustomPopover';
import CustomTable from 'components/common/table';
import useToggle from 'hooks/useToggle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Edit from './Edit';
import { changeCandidateStatus, deleteCandidate, getCandidate } from './redux/actions';
import Register from './Register';
import { useStyles } from './styles';
import View from './View';

const Candidate = () => {
  const dispatch = useDispatch();
  const [openForm, formOpenFunction] = useToggle(false);
  const [openEdit, editOpenFunction] = useToggle(false);
  const [openDelete, deleteOpenFunction] = useToggle(false);
  const [openStatus, statusOpenFunction] = useToggle(false);
  const [openView, viewOpenFunction] = useToggle(false);
  const [detail, setDetail] = useState();
  const [page, setPage] = useState();
  const [rowsPerPage, setRowsPerPage] = useState();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getCandidate());
  }, []);

  const { candidateData, get_candidate_loading, delete_candidate_loading } = useSelector(
    (state) => state.candidate
  );

  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },

    {
      title: 'Name',
      minWidth: 180,
      field: (row) => {
        return (
          <Box>
            <Typography variant="body2">{row?.member?.name}</Typography>
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
            <Typography variant="body2">{row?.member?.email}</Typography>
            <Typography variant="subtitle1">{row?.member?.phone}</Typography>
          </Box>
        );
      }
    },

    {
      title: 'Address',
      minWidth: 100,
      field: (row) => {
        return <Typography variant="body2">{`${row?.member?.country_of_residence}`}</Typography>;
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
            {row?.status === 1 ? (
              <Button
                sx={{ width: '100px' }}
                variant="contained"
                color="success"
                onClick={() => handleStatus(row)}>
                Active
              </Button>
            ) : (
              <Button
                sx={{ width: '100px' }}
                variant="contained"
                color="error"
                onClick={() => handleStatus(row)}>
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
            <ul className={classes.listWrapper}>
              <li onClick={() => handleEdit(row)}>Edit Candidate </li>
              <li onClick={() => handleView(row)}>View Details</li>
              <li onClick={() => handleDelete(row)}>Delete</li>
            </ul>
          </CustomPopover>
        );
      }
    }
  ];

  const handleConfirm = (slug) => {
    dispatch(deleteCandidate(slug, deleteOpenFunction));
  };

  const handleStatusConfirm = (slug) => {
    const finalData = {
      slug: slug,
      status: detail?.status == 0 ? 1 : 0,
      _method: 'PATCH'
    };
    dispatch(changeCandidateStatus(finalData, statusOpenFunction));
  };

  const handleEdit = (row) => {
    setDetail(row);
    editOpenFunction();
  };

  const handleDelete = (row) => {
    setDetail(row);
    deleteOpenFunction();
  };

  const handleStatus = (row) => {
    setDetail(row);
    statusOpenFunction();
  };

  const handleView = (row) => {
    setDetail(row);
    viewOpenFunction();
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
          <Box>Candidate</Box>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            display="flex"
            onClick={formOpenFunction}>
            Add Candidate
          </Button>
        </Box>
        <CustomTable
          tableHeads={tableHeads}
          tableData={candidateData}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
          total={30}
          loading={get_candidate_loading}
        />
        <CustomModal
          open={openForm}
          handleClose={formOpenFunction}
          modalTitle="Create Candidate"
          modalSubtitle=""
          icon={<PersonAddIcon />}
          width={`40rem`}>
          <Register handleClose={formOpenFunction} />
        </CustomModal>
        <CustomModal
          open={openEdit}
          handleClose={editOpenFunction}
          modalTitle={`Update Candidate`}
          modalSubtitle=""
          icon={<PersonAddIcon />}
          width={`40rem`}>
          <Edit data={detail} handleClose={editOpenFunction} />
        </CustomModal>
        <CustomModal
          open={openView}
          handleClose={viewOpenFunction}
          modalTitle={`${detail?.name}`}
          modalSubtitle="Get full detail"
          icon={<PersonIcon />}
          width={`40rem`}>
          <View data={detail} />
        </CustomModal>
        <CustomDeleteModal
          handleConfirm={handleConfirm}
          slug={detail?.id}
          open={openDelete}
          handleClose={deleteOpenFunction}
          isLoading={delete_candidate_loading}
        />
        <CustomStatusModal
          open={openStatus}
          handleClose={statusOpenFunction}
          status={detail?.status}
          id={detail?.id}
          handleConfirm={handleStatusConfirm}
        />
      </Box>
    </>
  );
};

export default Candidate;
