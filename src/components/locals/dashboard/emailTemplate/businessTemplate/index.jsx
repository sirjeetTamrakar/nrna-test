import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Box, Button, Typography } from '@mui/material';
import CustomDeleteModal from 'components/common/CustomModal/CustomDeleteModal';
import CustomModal from 'components/common/CustomModal/CustomModal';
import CustomPopover from 'components/common/CustomPopover/CustomPopover';
import CustomTable from 'components/common/table';
import useToggle from 'hooks/useToggle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmailTemplate, getEmailTemplate } from '../redux/actions';
import Edit from './Edit';
import Register from './Register';
import { useStyles } from './styles';
import View from './View';

const BusinessTemplate = () => {
  const dispatch = useDispatch();
  const [openForm, formOpenFunction] = useToggle(false);
  const [openEdit, editOpenFunction] = useToggle(false);
  const [openDelete, deleteOpenFunction] = useToggle(false);
  const [openStatus, statusOpenFunction] = useToggle(false);
  const [openView, viewOpenFunction] = useToggle(false);
  const [detail, setDetail] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const classes = useStyles();
  const { bannerData, banner_status_loading, delete_banner_loading, get_banner_loading } =
    useSelector((state) => state.banner);
  const { email_templateData, get_email_template_loading, delete_email_template_loading } =
    useSelector((state) => state.emailTemplate);
  const { user, admin_ncc_id_details, admin_role_details } = useSelector((state) => state.auth);

  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },

    {
      title: 'Template Title',
      minWidth: 250,
      field: 'title'
    },
    {
      title: 'Template decription',
      minWidth: 250,
      field: (row) => {
        return (
          <Box>
            <div dangerouslySetInnerHTML={{ __html: row?.description?.substring(0, 70) }} />
          </Box>
        );
      }
    },
    {
      title: 'Decription status',
      minWidth: 250,
      field: (row) => {
        return (
          <Box>
            <Typography variant="body2">{row?.default_description}</Typography>
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
              <li onClick={() => handleEdit(row)}>Edit Template </li>
              <li onClick={() => handleView(row)}>View Details</li>
              <li onClick={() => handleDelete(row)}>Delete</li>
            </ul>
          </CustomPopover>
        );
      }
    }
  ];

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

  const handleDeleteConfirm = () => {
    const data = {
      page: 1,
      pagination_limit: 10,
      email_type: 'business'
    };
    dispatch(deleteEmailTemplate(detail?.id, data, deleteOpenFunction));
  };

  const refetch = () => {
    const data = {
      page: 1,
      pagination_limit: 10,
      email_type: 'business'
    };
    dispatch(getEmailTemplate(data));
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
          <Box>Business Email Template</Box>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            display="flex"
            onClick={formOpenFunction}>
            Add template
          </Button>
        </Box>
        <CustomTable
          tableHeads={tableHeads}
          tableData={email_templateData?.data}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
          total={email_templateData?.meta?.total}
          loading={get_email_template_loading}
        />
        <CustomModal
          open={openForm}
          handleClose={formOpenFunction}
          modalTitle="Create email template"
          modalSubtitle=""
          icon={<PersonAddIcon />}
          width={`60rem`}>
          <Register handleClose={formOpenFunction} />
        </CustomModal>
        <CustomModal
          open={openEdit}
          handleClose={editOpenFunction}
          modalTitle={`Update email template`}
          modalSubtitle=""
          icon={<PersonAddIcon />}
          width={`60rem`}>
          <Edit data={detail} handleClose={editOpenFunction} />
        </CustomModal>
        <CustomModal
          open={openView}
          handleClose={viewOpenFunction}
          modalTitle="Business email template details"
          // modalSubtitle="Get full detail"
          icon={<PersonIcon />}
          width={`40rem`}>
          <View data={detail} />
        </CustomModal>
        <CustomDeleteModal
          open={openDelete}
          handleClose={deleteOpenFunction}
          handleConfirm={handleDeleteConfirm}
          isLoading={delete_email_template_loading}
        />
      </Box>
    </>
  );
};

export default BusinessTemplate;
