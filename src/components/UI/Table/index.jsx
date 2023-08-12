import { PersonOutline } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import GroupsIcon from '@mui/icons-material/Groups';
import { Button, Skeleton, Switch, Tooltip, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import { FormattedMessage } from 'react-intl';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';

export default function CustomTable({
  columns,
  rows = [],
  actionType,
  handleModalOpen,
  handleClose,
  loading = false,
  setPage,
  page = 0,
  total,
  rowsPerPage = 10,
  setRowsPerPage
}) {
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label=" table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading ? (
              rows?.length > 0 ? (
                rows
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {columns.map((column) => {
                          const value = row[column.id];

                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{ cursor: column?.cursor }}
                              onClick={() => handleModalOpen('detail', row?.slug)}>
                              {column.id == 'sn' ? (
                                page * 10 + index + 1
                              ) : column.id == 'actions' ? (
                                <Actions
                                  row={row}
                                  id={row?.slug}
                                  actionType={actionType}
                                  handleModalOpen={handleModalOpen}
                                  handleClose={handleClose}
                                  // openFunction={openFunction}
                                />
                              ) : column.id === 'status' ? (
                                <Button
                                  variant="contained"
                                  color={row?.statusId === 1 ? 'primary' : 'error'}
                                  onClick={(event) => handleModalOpen(event, 'status', row?.slug)}>
                                  {row?.status?.toLowerCase() == 'active' ? (
                                    <FormattedMessage id="Active" defaultMessage="Active" />
                                  ) : (
                                    <FormattedMessage id="Inactive" defaultMessage="Inactive" />
                                  )}
                                </Button>
                              ) : column.format && typeof value === 'number' ? (
                                column.format(value)
                              ) : column.id == 'function' ? (
                                column.field(row, column.field)
                              ) : (
                                <Box
                                  onClick={(event) => handleModalOpen(event, 'detail', row?.slug)}>
                                  {value}
                                </Box>
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })
              ) : (
                <TableRow>
                  <TableCell align="center" colSpan={columns.length}>
                    <Typography variant="h5">No Data to Show</Typography>
                  </TableCell>
                </TableRow>
              )
            ) : (
              [...Array(5).keys()]?.map((index) => (
                <TableRow key={index}>
                  {[...Array(columns?.length).keys()]?.map((list) => (
                    <TableCell align="center" key={list}>
                      <Skeleton height={24} />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={total || rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

const Actions = ({ row, id, openFunction, actionType, handleModalOpen, handleClose }) => {
  const location = useLocation();

  const classes = useStyles();
  return (
    <>
      {actionType === 'agreementAction' ? (
        <>
          <Box display="flex" columnGap={1} alignItems="center" className={classes.iconWrapper}>
            <Switch defaultChecked size="small" onChange={() => handleModalOpen('toggle')} />
            <EditIcon
              style={{ pointer: 'cursor' }}
              onChange={() => handleModalOpen('agreementEdit')}
            />
          </Box>
        </>
      ) : (
        <div className={classes.iconWrapper}>
          {/* <Tooltip title="Documents">
            <FolderOpenIcon />
          </Tooltip> */}
          <Link to={`${location?.pathname}/edit/${id}`}>
            <Tooltip title={<FormattedMessage id="Edit" defaultMessage="Edit" />}>
              <EditIcon />
            </Tooltip>
          </Link>
          <Tooltip title={<FormattedMessage id="Edit User" defaultMessage="Edit User" />}>
            <PersonOutline onClick={(event) => handleModalOpen(event, 'userDetail', id)} />
          </Tooltip>
          <Tooltip title={<FormattedMessage id="Company Users" defaultMessage="Company Users" />}>
            <GroupsIcon onClick={(event) => handleModalOpen(event, 'companyUser', id)} />
          </Tooltip>
          <Tooltip title={<FormattedMessage id="Remove Company" defaultMessage="Remove Company" />}>
            <DeleteIcon onClick={(event) => handleModalOpen(event, 'removeCompany', id)} />
          </Tooltip>
        </div>
      )}
    </>
  );
};
