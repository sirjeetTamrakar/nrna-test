import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Box, Button, Typography } from '@mui/material';
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
import { changeBusinessStatus, deleteBusiness, getBusiness } from '../redux/actions';
import Edit from './Edit';
import Register from './Register';
import Service from './Service';
import { useStyles } from './styles';

const Profile = () => {
  const dispatch = useDispatch();
  const [openForm, formOpenFunction] = useToggle(false);
  const [openEdit, editOpenFunction] = useToggle(false);
  const [openDelete, deleteOpenFunction] = useToggle(false);
  const [openStatus, statusOpenFunction] = useToggle(false);
  const [openApprove, approveOpenFunction] = useToggle(false);
  const [openService, serviceOpenFunction] = useToggle(false);
  const [detail, setDetail] = useState();
  const [page, setPage] = useState();
  const [rowsPerPage, setRowsPerPage] = useState();
  const classes = useStyles();

  const { businessData, get_business_loading, business_status_loading, delete_business_loading } =
    useSelector((state) => state.business);

  useEffect(() => {
    dispatch(getBusiness());
  }, []);

  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },

    {
      title: 'Business Name',
      minWidth: 200,
      field: (row) => {
        return (
          <Box>
            <Typography variant="body2">{row?.name}</Typography>
            <Typography variant="subtitle1">{row?.address}</Typography>
          </Box>
        );
      }
    },

    {
      title: 'Email/Phone',
      minWidth: 120,
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
      title: 'Created by',
      minWidth: 120,
      field: (row) => {
        return (
          <Box>
            <Typography variant="body2">{row?.created_by}</Typography>
            <Typography variant="subtitle1">{changeDateFormat(row?.created_at)}</Typography>
          </Box>
        );
      }
    },
    {
      title: 'Services',
      minWidth: 100,
      field: (row) => {
        return (
          <Button
            sx={{ width: '100px' }}
            variant="contained"
            color="primary"
            onClick={() => handleService(row)}>
            Update
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
            <ul className={classes.listWrapper}>
              <li onClick={() => handleEdit(row)}>Edit Business </li>
              <li onClick={() => handleApprove(row)}>Approve User</li>
              <li onClick={() => handleDelete(row)}>Delete</li>
            </ul>
          </CustomPopover>
        );
      }
    }
  ];

  const business = [
    {
      name: 'Scodus Innovations',
      address: 'Dillibazar, Kathmandu',
      email: 'info@scodus.com',
      phone: '9841587582',
      status: 'Active',
      approve_by: 'Yogen Bahadur Chhetri',
      created_by: 'Bishwo Raj Raut',
      created_at: '20-Sep-2023'
    }
  ];

  const handleConfirm = (slug) => {
    dispatch(deleteBusiness(slug, deleteOpenFunction));
  };

  const handleStatusConfirm = (slug) => {
    const finalData = {
      slug: slug,
      status: detail?.status === 'Active' ? 'inactive' : 'active',
      _method: 'PATCH'
    };
    dispatch(changeBusinessStatus(finalData, statusOpenFunction));
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

  const handleService = (row) => {
    setDetail(row);
    serviceOpenFunction();
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
          <Box>Business</Box>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            display="flex"
            onClick={formOpenFunction}>
            Add Business
          </Button>
        </Box>
        <CustomTable
          tableHeads={tableHeads}
          tableData={business}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
          total={30}
          loading={get_business_loading}
        />
        <CustomModal
          open={openForm}
          handleClose={formOpenFunction}
          modalTitle="Create Business"
          modalSubtitle=""
          icon={<PersonAddIcon />}
          width={`60rem`}>
          <Register handleClose={formOpenFunction} />
        </CustomModal>
        <CustomModal
          open={openEdit}
          handleClose={editOpenFunction}
          modalTitle={`Update Business`}
          modalSubtitle=""
          icon={<PersonAddIcon />}
          width={`60rem`}>
          <Edit data={detail} handleClose={editOpenFunction} />
        </CustomModal>
        <CustomModal
          open={openService}
          handleClose={serviceOpenFunction}
          modalTitle={`Services of ${detail?.name}`}
          modalSubtitle="Enlist your services"
          icon={<PersonAddIcon />}
          width={`60rem`}>
          <Service data={detail} handleClose={serviceOpenFunction} />
        </CustomModal>

        <CustomDeleteModal
          handleConfirm={handleConfirm}
          slug={detail?.slug}
          open={openDelete}
          isLoading={delete_business_loading}
          handleClose={deleteOpenFunction}
        />
        <CustomStatusModal
          open={openStatus}
          isLoading={business_status_loading}
          handleClose={statusOpenFunction}
          status={detail?.status === 'Active' ? 'Active' : 'Inactive'}
          id={detail?.slug}
          handleConfirm={handleStatusConfirm}
        />
        <CustomApproveModal
          open={openApprove}
          handleApprove={() => {}}
          handleReject={() => {}}
          handleClose={approveOpenFunction}
          row={detail}
        />
      </Box>
    </>
  );
};

export default Profile;
