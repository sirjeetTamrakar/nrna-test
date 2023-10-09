import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Typography } from '@mui/material';
import CustomModal from 'components/common/CustomModal/CustomModal';
import CustomPopover from 'components/common/CustomPopover/CustomPopover';
import CustomTable from 'components/common/table';
import useToggle from 'hooks/useToggle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBusinessService, getBusinessService } from '../redux/actions';
import { useStyles } from './styles';
import ViewContact from './ViewContact';

const ContactTable = ({ serviceId, data }) => {
  const dispatch = useDispatch();
  const [openForm, formOpenFunction] = useToggle(false);
  const [openEdit, editOpenFunction] = useToggle(false);
  const [openDelete, deleteOpenFunction] = useToggle(false);
  const [openStatus, statusOpenFunction] = useToggle(false);
  const [openApprove, approveOpenFunction] = useToggle(false);
  const [openService, serviceOpenFunction] = useToggle(false);
  const [openView, viewOpenFunction] = useToggle(false);

  const [detail, setDetail] = useState();
  const [page, setPage] = useState();
  const [rowsPerPage, setRowsPerPage] = useState();
  const [singleService, setSingleService] = useState();
  console.log({ singleService });
  const classes = useStyles();

  console.log({ singleService });
  console.log('jjjj', { data });

  const { business_service, get_business_service_loading, delete_business_service_loading } =
    useSelector((state) => state.business);
  console.log({ business_service });
  const { user } = useSelector((state) => state.auth);
  console.log('userreerr', { user });

  useEffect(() => {
    dispatch(getBusinessService());
  }, []);

  useEffect(() => {
    const single = business_service?.filter((list) => list?.business_id == serviceId);
    setSingleService(single);
  }, [business_service]);

  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },

    {
      title: 'Name',
      minWidth: 200,
      field: (row) => {
        return (
          <Box>
            <Typography variant="body2">{row?.name}</Typography>
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
    },
    {
      title: 'Subject',
      minWidth: 200,
      field: (row) => {
        return (
          <Box>
            <Typography variant="body2">{row?.subject}</Typography>
          </Box>
        );
      }
    },
    {
      title: 'Description',
      minWidth: 120,
      field: (row) => {
        return (
          <Box>
            <Typography variant="body2">
              {row?.description?.length > 59
                ? `${row?.description?.substring(0, 60)}...`
                : row?.description}
            </Typography>
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
              <li onClick={() => handleView(row)}>View contact</li>
            </ul>
          </CustomPopover>
        );
      }
    }
  ];

  const handleDelete = (row) => {
    setDetail(row);
    deleteOpenFunction();
  };

  const handleConfirm = (slug) => {
    dispatch(deleteBusinessService(slug, deleteOpenFunction));
  };

  const handleView = (row) => {
    setDetail(row);
    viewOpenFunction();
  };

  return (
    <>
      <Box>
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '15px'
          }}>
          <Box>Business</Box>
        </Box> */}
        <CustomTable
          tableHeads={tableHeads}
          tableData={data}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
          total={30}
          padding
          loading={get_business_service_loading}
        />
        <CustomModal
          open={openView}
          handleClose={viewOpenFunction}
          modalTitle={`Contact Details`}
          icon={<PersonIcon />}
          width={`40rem`}>
          <ViewContact data={detail} />
        </CustomModal>
      </Box>
    </>
  );
};

export default ContactTable;
