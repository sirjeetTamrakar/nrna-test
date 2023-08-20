import { Box, Typography } from '@mui/material';
import CollapseTable from 'components/common/CollapseableTable';
import { useState } from 'react';
import OverallResult from './OverallResult';
import { useStyles } from './styles';
const Results = () => {
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
      title: 'Attempted',
      minWidth: '100',
      field: (row) => {
        return (
          <Typography color="primary" variant="h6">
            {row?.total}
          </Typography>
        );
      }
    }
  ];

  const tableData = [
    {
      question: 'Canada wildfires: The past 2 days in 75 seconds',
      options: [
        { title: 'Choice 1', count: 263 },
        { title: 'Choice 2', count: 237 },
        { title: 'Choice 3', count: 318 },
        { title: 'Choice 4', count: 120 }
      ],
      total: 938
    },
    {
      question:
        'Canada wildfires: The past 2 days in 75 seconds Canada wildfires: The past 2 days in 75 seconds Canada wildfires: The past 2 days in 75 seconds Canada wildfires: The past 2 days in 75 seconds',
      options: [
        { title: 'Choice 1', count: 263 },
        { title: 'Choice 2', count: 237 },
        { title: 'Choice 3', count: 318 },
        { title: 'Choice 4', count: 120 }
      ],
      total: 938
    }
  ];

  return (
    <>
      <Box>
        <OverallResult />
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
      </Box>
    </>
  );
};

export default Results;

const ChildComponent = ({ row }) => {
  const classes = useStyles();
  const getPercentage = (count) => {
    return ((count / row?.total) * 100)?.toFixed(2) ?? 0;
  };
  return (
    <Box className={classes.childRoot}>
      {row?.options?.map((list, index) => (
        <Box
          className={classes.childList}
          style={{
            background: `linear-gradient(90deg, #a9e2ff ${getPercentage(
              list?.count
            )}%, transparent ${getPercentage(list?.count)}% )`
          }}
          key={index}>
          <Box display="flex" alignItems="center" columnGap="15px">
            <Box className={classes.count}>{list?.count}</Box>
            {list?.title}
          </Box>
          <Box className={classes.count}>{getPercentage(list?.count)} %</Box>
        </Box>
      ))}
    </Box>
  );
};
