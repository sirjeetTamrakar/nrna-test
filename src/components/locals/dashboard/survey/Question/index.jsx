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
import { useState } from 'react';
import Edit from './Edit';
import Register from './Register';
import { useStyles } from './styles';
const Questions = () => {
  const classes = useStyles();
  const [openForm, formOpenFunction] = useToggle(false);
  const [openEdit, editOpenFunction] = useToggle(false);
  const [openDelete, deleteOpenFunction] = useToggle(false);
  const [openStatus, statusOpenFunction] = useToggle(false);
  const [detail, setDetail] = useState();
  const [page, setPage] = useState();
  const [rowsPerPage, setRowsPerPage] = useState();
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
            {row?.status === 'Active' ? (
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

  const tableData = [
    {
      question: 'Canada wildfires: The past 2 days in 75 seconds',
      option1: 'Option 1',
      option2: 'Option 2',
      option3: 'Option 3',
      option4: 'Option 4',
      status: 'Active'
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
          tableData={tableData}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          page={page}
          setPage={setPage}
          total={30}
          ChildComponent={ChildComponent}
        />

        <CustomModal
          open={openForm}
          handleClose={formOpenFunction}
          modalTitle="Add Question"
          modalSubtitle="Add question and options for the survey"
          icon={<PsychologyAltIcon />}
          width={`50rem`}>
          <Register />
        </CustomModal>
        <CustomModal
          open={openEdit}
          handleClose={editOpenFunction}
          modalTitle={`Update Question`}
          modalSubtitle="Use update to make survey accurate"
          icon={<PsychologyAltIcon />}
          width={`50rem`}>
          <Edit data={detail} />
        </CustomModal>

        <CustomDeleteModal open={openDelete} handleClose={deleteOpenFunction} />
        <CustomStatusModal
          open={openStatus}
          handleClose={statusOpenFunction}
          status={detail?.status}
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
      {[...Array(4)?.keys()]?.map((list, index) => (
        <Box className={classes.childList} key={index}>
          {row?.[`option${list + 1}`]}
        </Box>
      ))}
    </Box>
  );
};
