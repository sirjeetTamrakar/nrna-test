import { Box, Button, Typography } from '@mui/material';
import CustomTable from 'components/common/table';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPublicDownload } from 'components/locals/dashboard/downloads/redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Downloads = () => {
  // const { settings } = useSelector((state) => state.homepage);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();
  const { downloadData, get_download_loading } = useSelector((state) => state.download);

  useEffect(() => {
    dispatch(getPublicDownload({ downloadable_type: 'nbns', downloadable_id: '' }));
  }, []);

  const tableHeads = [
    { title: 'S.N.', type: 'Index', minWidth: 20 },

    {
      title: 'Title',
      minWidth: 200,
      field: (row) => {
        return (
          <Box
            sx={{ '& a': { textDecoration: 'none', color: (theme) => theme.palette.text.main } }}>
            <Link
              to={`${row?.id}`}
              state={{
                title: row?.title,
                file_src: row?.file,
                updatedDate: row?.updated_at,
                description: row?.description
              }}>
              {row?.title}
            </Link>
          </Box>
        );
      }
    },
    {
      title: 'Action',
      minWidth: 200,
      field: (row) => {
        return (
          <>
            <a href={row.file} target="_blank" download={'download.pdf'} rel="noreferrer">
              <Button
                variant="text"
                sx={{
                  p: '10px !important',
                  ml: '-10px',
                  color: (theme) => theme.palette.text.main
                }}
                startIcon={<FileDownloadOutlinedIcon />}>
                Download
              </Button>
            </a>
          </>
        );
      }
    }
  ];

  return (
    <>
      <div className="main_content">
        <section className="all_events">
          <div className="container">
            <div className="about_title" style={{ fontSize: '20px' }}>
              Downloads
            </div>
            <CustomTable
              tableHeads={tableHeads}
              tableData={downloadData?.data}
              // tableData={tableData}
              loading={get_download_loading}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              page={page}
              setPage={setPage}
              total={downloadData?.data?.length}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Downloads;
