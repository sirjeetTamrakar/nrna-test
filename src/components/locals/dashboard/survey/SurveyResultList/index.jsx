import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography/Typography';
import CustomApproveModal from 'components/common/CustomModal/CustomApproveModal';
import CustomDeleteModal from 'components/common/CustomModal/CustomDeleteModal';
import CustomModal from 'components/common/CustomModal/CustomModal';
import CustomStatusModal from 'components/common/CustomModal/CustomStatusModal';
import CustomTable from 'components/common/table';
import useToggle from 'hooks/useToggle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Questions from '../Question';
import { changeSurveyStatus, deleteSurvey, getAllSurvey } from '../redux/actions';
import Edit from './Edit';
import Register from './Register';
import { useStyles } from './styles';
import View from './View';

const SurveyListResult = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openForm, formOpenFunction] = useToggle(false);
  const [openEdit, editOpenFunction] = useToggle(false);
  const [openDelete, deleteOpenFunction] = useToggle(false);
  const [openQuestions, openQuestionsFunction] = useToggle(false);

  const [openStatus, statusOpenFunction] = useToggle(false);
  const [openApprove, approveOpenFunction] = useToggle(false);
  const [openView, viewOpenFunction] = useToggle(false);
  const [detail, setDetail] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const classes = useStyles();

  const {
    survey,
    survey_loading,
    create_survey_loading,
    update_survey_loading,
    delete_survey_loading,
    survey_status_loading
  } = useSelector((state) => state.question);

  const { user } = useSelector((state) => state.auth);

  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },

    {
      title: 'Title',
      minWidth: 250,
      field: 'title'
    },
    {
      title: 'Description',
      minWidth: 250,
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

    // {
    //   title: 'Status',
    //   minWidth: 100,
    //   field: (row) => {
    //     return (
    //       <Box>
    //         {Number(row?.status) === 1 ? (
    //           <Button
    //             sx={{ width: '100px' }}
    //             variant="contained"
    //             color="success"
    //             onClick={() => handleStatus(row)}>
    //             Active
    //           </Button>
    //         ) : (
    //           <Button
    //             sx={{ width: '100px' }}
    //             variant="contained"
    //             color="error"
    //             onClick={() => handleStatus(row)}>
    //             Inactive
    //           </Button>
    //         )}
    //       </Box>
    //     );
    //   }
    // },
    {
      title: 'Questions',
      minWidth: 120,
      field: (row) => {
        return (
          <Box>
            <Button variant="contained" color="primary" onClick={() => handleShowQuestions(row)}>
              Results
            </Button>
          </Box>
        );
      }
    },
    {
      title: 'Participants',
      minWidth: 120,
      field: (row) => {
        return (
          <Box>
            <Button variant="contained" color="primary" onClick={() => handleShowParticipants(row)}>
              Participants
            </Button>
          </Box>
        );
      }
    }

    // {
    //   title: 'Actions',
    //   minWidth: 85,
    //   field: (row) => {
    //     return (
    //       <CustomPopover ButtonComponent={<MoreVertIcon />}>
    //         <ul className={classes.listWrapper}>
    //           <li onClick={() => handleEdit(row)}>Edit Survey </li>
    //           <li onClick={() => handleView(row)}>View Details</li>
    //           <li onClick={() => handleDelete(row)}>Delete</li>
    //         </ul>
    //       </CustomPopover>
    //     );
    //   }
    // }
  ];

  const handleConfirm = (slug) => {
    let typeData;
    typeData = { page: 1, pagination_limit: 10 };
    dispatch(deleteSurvey(slug, deleteOpenFunction, typeData));
  };

  const handleStatusConfirm = (slug) => {
    const finalData = {
      slug: slug,
      status: Number(detail?.status) === 0 ? 1 : 0,
      _method: 'PATCH'
    };
    let typeData;
    typeData = { page: 1, pagination_limit: 10 };
    dispatch(changeSurveyStatus(finalData, statusOpenFunction, typeData));
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

  const handleShowQuestions = (row) => {
    console.log('jjjsjsjsjs', { row });
    setDetail(row);
    navigate(`/dashboard/survey/result-list`, { state: row });
  };

  const handleShowParticipants = (row) => {
    setDetail(row);
    navigate(`/dashboard/survey/participants`, { state: row });
  };

  const refetch = () => {
    const data = { page: page + 1, pagination_limit: rowsPerPage };
    dispatch(getAllSurvey(data));
  };

  useEffect(() => {
    refetch();
  }, [page, rowsPerPage]);

  console.log({ detail });

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
          <Box>Result according to survey</Box>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            display="flex"
            onClick={formOpenFunction}>
            Add Survey
          </Button>
        </Box>
        <CustomTable
          tableHeads={tableHeads}
          tableData={survey}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
          // total={newsData?.meta?.total}
          loading={survey_loading ? true : false}
        />
        <CustomModal
          open={openForm}
          handleClose={formOpenFunction}
          modalTitle="Create Survey"
          modalSubtitle=""
          icon={<PersonAddIcon />}
          width={`40rem`}>
          <Register handleClose={formOpenFunction} />
        </CustomModal>
        <CustomModal
          open={openEdit}
          handleClose={editOpenFunction}
          modalTitle={`Update Survey`}
          modalSubtitle=""
          icon={<PersonAddIcon />}
          width={`60rem`}>
          <Edit data={detail} handleClose={editOpenFunction} />
        </CustomModal>
        <CustomModal
          open={openView}
          handleClose={viewOpenFunction}
          modalTitle="Survey Details"
          icon={<PersonIcon />}
          width={`40rem`}>
          <View data={detail} />
        </CustomModal>
        <CustomModal
          open={openQuestions}
          handleClose={openQuestionsFunction}
          modalTitle="Questions"
          icon={<PersonIcon />}
          padding
          width={`60rem`}>
          <Questions data={detail} />
        </CustomModal>
        <CustomDeleteModal
          handleConfirm={handleConfirm}
          slug={detail?.slug}
          open={openDelete}
          isLoading={delete_survey_loading}
          handleClose={deleteOpenFunction}
        />
        <CustomStatusModal
          open={openStatus}
          isLoading={survey_status_loading}
          handleClose={statusOpenFunction}
          status={Number(detail?.status) == 1 ? 'Active' : 'Inactive'}
          id={detail?.slug}
          handleConfirm={handleStatusConfirm}
        />
        <CustomApproveModal open={openApprove} handleClose={approveOpenFunction} row={detail} />
      </Box>
    </>
  );
};

export default SurveyListResult;
