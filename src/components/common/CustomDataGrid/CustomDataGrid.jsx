import Box from '@mui/material/Box';
import styles from './style';

import Pagination from '@mui/material/Pagination';
import {
  DataGrid,
  GridFooterContainer,
  GridPagination,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector
} from '@mui/x-data-grid';
import CustomLoader from '../CustomLoader/CustomLoader';
import DataNotFound from '../DataNotFound/DataNotFound';

export function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

function CustomFooter() {
  return (
    <GridFooterContainer>
      <CustomPagination />
      <GridPagination />
    </GridFooterContainer>
  );
}

function CustomNoRowsOverlay() {
  return (
    <Box style={{ height: '300px !important', width: '100px !important' }}>Data Not found!!!!</Box>
  );
}

function CustomToolbar(props) {
  console.log({ props });
  return (
    <Box>
      {' '}
      {props?.Tabs}
      <GridPagination />
    </Box>
  );
}

export default function CustomDataGrid({
  rows,
  columns,
  checkboxSelection,
  Tabs,
  isLoading,
  isSuccess
}) {
  const classes = styles();
  return (
    <>
      {isLoading && <CustomLoader />}
      {isSuccess && (
        <Box className={classes.root} sx={{ height: !rows?.length && '400px', width: '100%' }}>
          <DataGrid
            columnHeaderHeight={39}
            rowHeight={45}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10
                }
              }
            }}
            checkboxSelection={checkboxSelection}
            disableRowSelectionOnClick
            slots={{
              // footer: CustomFooter,
              // toolbar: CustomToolbar,
              noRowsOverlay: DataNotFound
            }}
            slotProps={{
              toolbar: {
                Tabs
              }
            }}
            sx={{
              [`& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeaderTitleContainer:focus`]:
                {
                  outline: 'none'
                }
            }}
          />
        </Box>
      )}
    </>
  );
}
