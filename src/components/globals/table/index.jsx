import { useState } from 'react';
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  TablePagination,
  Skeleton
} from '@mui/material';
import useStyles from './styles';
import { ArrowDropDown, ArrowDropUp, MoreVertOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';

// MAIN Component
const CustomTable = ({
  isMulti = true,
  tableHeads,
  tableData,
  onEdit,
  onDelete,
  loading = false
}) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [actionSelectedData, setActionSelectedData] = useState(null);
  const open = Boolean(anchorEl);
  const handleActionButtonClick = (event, data) => {
    setAnchorEl(event.currentTarget);
    setActionSelectedData(data);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleEditClicked = () => {
    onEdit(actionSelectedData);
    handleClose();
  };

  const handleDeleteClicked = () => {
    onDelete(actionSelectedData);
    handleClose();
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const classes = useStyles();

  const onSelectAllClick = (e, tableData) => {
    if (!e.target.checked) return setSelectedRows([]);
    const newDatas = tableData.map((singleData, idx) => ({
      ...singleData,
      id: idx
    }));
    setSelectedRows(newDatas);
  };

  const handleSingleRowSelect = (singleData, idx) => {
    const singleRow = { id: idx, ...singleData };
    if (selectedRows.find((el) => el.id === idx)) {
      return setSelectedRows(selectedRows.filter((el) => el.id !== idx));
    }
    return setSelectedRows([...selectedRows, singleRow]);
  };

  const checkChecked = (idx) => {
    const el = selectedRows.find((el) => el.id === idx);
    if (el) return true;
    return false;
  };

  const arrowIcons = () => {
    return (
      <span className={classes.tableHeadSpan}>
        <ArrowDropUp className={classes.arrowIcon1} />
        <ArrowDropDown className={classes.arrowIcon2} />
      </span>
    );
  };

  return (
    <TableContainer className={classes.root}>
      <Table>
        <TableHead>
          <TableRow className={classes.tableHead}>
            {isMulti && (
              <TableCell padding="checkbox">
                <Checkbox
                  //   indeterminate={numSelected > 0 && numSelected < rowCount}
                  //   checked={rowCount > 0 && numSelected === rowCount}
                  onChange={(e) => onSelectAllClick(e, tableData)}
                  inputProps={{ 'aria-label': 'select all desserts' }}
                />
              </TableCell>
            )}
            {tableHeads?.map((element, idx) => {
              return (
                <TableCell className={classes.tableHeadItem} key={idx}>
                  {typeof element.title == 'object'
                    ? element.title
                    : `${element.title}`.toUpperCase()}
                  {element.isSortable && arrowIcons()}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {!loading
            ? tableData.map((singleData, index) => {
                return (
                  <TableRow key={index}>
                    {isMulti && (
                      <TableCell>
                        <Checkbox
                          //   indeterminate={numSelected > 0 && numSelected < rowCount}
                          checked={checkChecked(index)}
                          onChange={() => handleSingleRowSelect(singleData, index)}
                          inputProps={{ 'aria-label': 'select all desserts' }}
                        />
                      </TableCell>
                    )}
                    {tableHeads.map((el, idx) => {
                      //checking on  type of table data
                      // 1) if type is index automatically populate the tablecell with number data
                      if (el.type?.toLowerCase() === 'index') {
                        return (
                          <TableCell className={classes.tableItem} key={idx}>
                            {index + 1}
                          </TableCell>
                        );
                      }
                      // if callback is passed then render anything returned by that callback
                      // if (typeof singleData[el.field] === 'function') {
                      //   return (
                      //     <TableCell className={classes.tableItem} key={idx}>
                      //       {singleData[el.field]()}
                      //     </TableCell>
                      //   );
                      // }
                      if (typeof el.field === 'function') {
                        return (
                          <TableCell className={classes.tableItem} key={idx}>
                            {el.field(singleData, el.field, index)}
                          </TableCell>
                        );
                      }
                      // if type is action then render the vertical item
                      if (el.type?.toLowerCase() === 'actions') {
                        return (
                          <TableCell className={classes.tableItem} key={idx}>
                            <IconButton
                              onClick={(event) => handleActionButtonClick(event, singleData)}>
                              <MoreVertOutlined />
                            </IconButton>
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell className={classes.tableItem} key={idx}>
                          {singleData[el.field]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
            : [...Array(8).keys()].map((index) => (
                <TableRow key={index}>
                  {tableHeads?.map((item, list) => (
                    <TableCell key={list} sx={{ minWidth: item?.minWidth }} align={item?.align}>
                      <Skeleton height={30} />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}>
        <MenuItem onClick={handleEditClicked}>Edit</MenuItem>
        <MenuItem onClick={handleDeleteClicked}>Delete</MenuItem>
      </Menu>
    </TableContainer>
  );
};

export default CustomTable;

CustomTable.propTypes = {
  isMulti: PropTypes.bool, // this is to render the multiple row selectbox
  tableHeads: PropTypes.array, // header for table (will write custom documentation on it later)
  tableData: PropTypes.array,
  onEdit: PropTypes.func
};
CustomTable.defaultProps = {
  isMulti: false,
  onEdit: () => {},
  tableHeads: [
    { title: '#', type: 'Index', isSortable: true },
    { title: 'Name', field: 'name' },
    { title: 'LastName', field: 'lname' },
    { title: 'Actions', type: 'actions' }
  ],
  tableData: [
    { name: 'ariana', lname: 'grande' },
    { name: 'jamie', lname: 'laninster' },
    {
      name: 'romeo',
      lname: () => {
        let a = 3;
        if (a === 3) return 3;
        return 'hell';
      }
    }
  ]
};
