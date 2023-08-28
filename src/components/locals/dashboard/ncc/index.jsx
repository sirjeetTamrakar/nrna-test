import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Box, Button } from '@mui/material';
import CustomApproveModal from 'components/common/CustomModal/CustomApproveModal';
import CustomDeleteModal from 'components/common/CustomModal/CustomDeleteModal';
import CustomModal from 'components/common/CustomModal/CustomModal';
import CustomStatusModal from 'components/common/CustomModal/CustomStatusModal';
import CustomPopover from 'components/common/CustomPopover/CustomPopover';
import CustomTable from 'components/common/table';
import useToggle from 'hooks/useToggle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDateFormat } from 'utils/dateUtils';
import Edit from './Edit';
import { deleteNCC, getNCC } from './redux/actions';
import Register from './Register';
import { useStyles } from './styles';
import View from './View';

const NCC = () => {
  const dispatch = useDispatch();
  const [openForm, formOpenFunction] = useToggle(false);
  const [openEdit, editOpenFunction] = useToggle(false);
  const [openDelete, deleteOpenFunction] = useToggle(false);
  const [openStatus, statusOpenFunction] = useToggle(false);
  const [openApprove, approveOpenFunction] = useToggle(false);
  const [openView, viewOpenFunction] = useToggle(false);
  const [detail, setDetail] = useState();
  const [page, setPage] = useState();
  const [rowsPerPage, setRowsPerPage] = useState();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getNCC());
  }, []);

  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },

    {
      title: 'Country',
      minWidth: 100,

      field: 'country'
    },
    {
      title: 'Member',
      minWidth: 100,

      field: (row) => {
        return (
          <Button variant="contained" color="primary">
            {row?.members}
          </Button>
        );
      }
    },
    {
      title: 'Committee',
      minWidth: 100,

      field: (row) => {
        return (
          <Button variant="contained" color="primary">
            {row?.committee}
          </Button>
        );
      }
    },

    {
      title: 'Status',
      minWidth: 100,
      field: (row) => {
        return (
          <Box>
            {row?.status === 'Active' ? (
              <Button variant="contained" color="success" onClick={() => handleStatus(row)}>
                Active
              </Button>
            ) : (
              <Button variant="contained" color="error" onClick={() => handleStatus(row)}>
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
              <li onClick={() => handleEdit(row)}>Edit Member </li>
              <li onClick={() => handleView(row)}>View Details</li>
              <li onClick={() => handleApprove(row)}>Approve User</li>
              <li onClick={() => handleDelete(row)}>Delete</li>
            </ul>
          </CustomPopover>
        );
      }
    }
  ];
  const tableData = [
    {
      country: 'Nepal',
      slug: 'nepal',
      members: 456,
      committee: 24,
      status: 'Active'
    },
    {
      country: 'United Kingdom',
      slug: 'uk',
      members: 456,
      committee: 24,
      status: 'Inactive'
    }
  ];

  const { nccData, get_ncc_loading } = useSelector((state) => state.ncc);
  const finalData = nccData?.map((data) => ({
    ...data,
    created_at: changeDateFormat(data?.created_at),
    created_by: data?.created_by?.name ?? '-',
    country: data?.country_name ?? '-'
    // approved_by: data?.created_by?.name ?? '-'
  }));

  console.log({ finalData, nccData });

  const refetch = () => {
    dispatch(getNCC());
  };

  const handleConfirm = (slug) => {
    dispatch(deleteNCC(slug, refetch));
    deleteOpenFunction();
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

  const handleApprove = (row) => {
    setDetail(row);
    approveOpenFunction();
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
          <Box>NCC</Box>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            display="flex"
            onClick={formOpenFunction}>
            Add NCC
          </Button>
        </Box>
        <CustomTable
          tableHeads={tableHeads}
          tableData={finalData}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
          total={30}
          loading={get_ncc_loading ? true : false}
        />
        <CustomModal
          open={openForm}
          handleClose={formOpenFunction}
          modalTitle="Create NCC"
          modalSubtitle=""
          icon={<PersonAddIcon />}
          width={`40rem`}>
          <Register handleClose={formOpenFunction} />
        </CustomModal>
        <CustomModal
          open={openEdit}
          handleClose={editOpenFunction}
          modalTitle={`Update NCC`}
          modalSubtitle=""
          icon={<PersonAddIcon />}
          width={`40rem`}>
          <Edit data={detail} handleClose={formOpenFunction} />
        </CustomModal>
        <CustomModal
          open={openView}
          handleClose={viewOpenFunction}
          modalTitle={`NCC Details`}
          // modalSubtitle="Get full detail"
          icon={<PersonIcon />}
          width={`40rem`}>
          <View data={detail} />
        </CustomModal>
        <CustomDeleteModal
          handleConfirm={handleConfirm}
          slug={detail?.slug}
          open={openDelete}
          handleClose={deleteOpenFunction}
          // modalTitle="Delete"
        />
        <CustomStatusModal
          open={openStatus}
          handleClose={statusOpenFunction}
          status={detail?.status}
        />
        <CustomApproveModal open={openApprove} handleClose={approveOpenFunction} row={detail} />
      </Box>
    </>
  );
};

export default NCC;
