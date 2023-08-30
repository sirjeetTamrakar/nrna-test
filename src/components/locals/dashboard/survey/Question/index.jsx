import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import { Box, Button } from '@mui/material';
import CollapseTable from 'components/common/CollapseableTable';
import CustomDeleteModal from 'components/common/CustomModal/CustomDeleteModal';
import CustomModal from 'components/common/CustomModal/CustomModal';
import CustomStatusModal from 'components/common/CustomModal/CustomStatusModal';
import CustomPopover from 'components/common/CustomPopover/CustomPopover';
import useToggle from 'hooks/useToggle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatus, deleteQuestion, getAllQuestions } from '../redux/actions';
import Edit from './Edit';
import Register from './Register';
import { useStyles } from './styles';

const Questions = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [openForm, formOpenFunction] = useToggle(false);
  const [openEdit, editOpenFunction] = useToggle(false);
  const [openDelete, deleteOpenFunction] = useToggle(false);
  const [openStatus, statusOpenFunction] = useToggle(false);
  const [detail, setDetail] = useState();
  const [page, setPage] = useState();
  const [rowsPerPage, setRowsPerPage] = useState();

  useEffect(() => {
    dispatch(getAllQuestions());
  }, []);

  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },

    {
      title: 'Question',
      minWidth: 300,

      field: 'question'
    },

    {
      title: 'Status',
      minWidth: 100,
      field: (row) => {
        return (
          <Box>
            {row?.status === '1' ? (
              <Button
                variant="contained"
                color="success"
                onClick={() => handleStatus(row)}
                sx={{ width: '100px' }}>
                Active
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={{ width: '100px' }}
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
              <li onClick={() => handleEdit(row)}>Edit Question </li>
              <li onClick={() => handleDelete(row)}>Delete</li>
            </ul>
          </CustomPopover>
        );
      }
    }
  ];

  const { questions, questions_loading } = useSelector((state) => state.question);

  const refetch = () => {
    dispatch(getAllQuestions());
  };

  const handleConfirm = (slug) => {
    dispatch(deleteQuestion(slug, refetch));
    deleteOpenFunction();
  };

  const handleStatusConfirm = (slug) => {
    const finalData = {
      question_id: slug,
      status: detail?.status === '0' ? true : false,
      // status: false,
      _method: 'PATCH'
    };
    dispatch(changeStatus(finalData, refetch));
    statusOpenFunction();
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
          <Box>Questions</Box>
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            display="flex"
            onClick={formOpenFunction}>
            Add Questions
          </Button>
        </Box>
        <CollapseTable
          tableHeads={tableHeads}
          tableData={questions}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
          total={30}
          ChildComponent={ChildComponent}
          loading={questions_loading ? true : false}
        />

        <CustomModal
          open={openForm}
          handleClose={formOpenFunction}
          modalTitle="Add Question"
          modalSubtitle="Add question and options for the survey"
          icon={<PsychologyAltIcon />}
          width={`50rem`}>
          <Register handleClose={formOpenFunction} />
        </CustomModal>
        <CustomModal
          open={openEdit}
          handleClose={editOpenFunction}
          modalTitle={`Update Question`}
          modalSubtitle="Use update to make survey accurate"
          icon={<PsychologyAltIcon />}
          width={`50rem`}>
          <Edit data={detail} handleClose={editOpenFunction} />
        </CustomModal>

        <CustomDeleteModal
          handleConfirm={handleConfirm}
          open={openDelete}
          handleClose={deleteOpenFunction}
          slug={detail?.id}
          // modalTitle="Delete Question"
        />
        <CustomStatusModal
          open={openStatus}
          handleClose={statusOpenFunction}
          status={detail?.status === '1' ? 'Active' : 'Inactive'}
          modalTitle="Change status"
          id={detail?.id}
          handleConfirm={handleStatusConfirm}
        />
      </Box>
    </>
  );
};

export default Questions;

const ChildComponent = ({ row }) => {
  const classes = useStyles();
  return (
    <Box className={classes.childRoot}>
      {row?.options?.map((item, index) => (
        <Box className={classes.childList} key={index}>
          {item?.option}
        </Box>
      ))}
    </Box>
  );
};
